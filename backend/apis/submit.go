package apis

import (
	"encoding/json"
	"fmt"
	"net/http"
	"onlineJudge-backend/internal/helper"
	"onlineJudge-backend/model"

	"github.com/go-chi/chi"
)

type RequestBody struct {
	Code     string `json:"code"`
	Language string `json:"language"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type Result struct {
	StdOutput string `json:"stdOutput"`
	StdInput  string `json:"stdInput"`
	ExpOutput string `json:"expOutput"`
	Accepted  bool   `json:"accepted"`
	Type      string `json:"type"`
}

func submit(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	tokenString := r.Header.Get("Authorization")
	if tokenString == "" {
		helper.ErrorX(w, nil, "Missing authorization header")
		return
	}
	tokenString = tokenString[len("Bearer "):]

	email, err := helper.VerifyToken(tokenString)
	if err != nil {
		helper.ErrorX(w, err, "Invalid token")
		return
	}

	id := chi.URLParam(r, "id")

	var reqBody RequestBody
	err = json.NewDecoder(r.Body).Decode(&reqBody)
	if err != nil {
		helper.ErrorX(w, err, "Error decoding request body")
		return
	}
	codeString := reqBody.Code
	language := reqBody.Language
	title := reqBody.Title
	submitType := reqBody.Type

	testInput, testOutput, err := helper.GetTestCase(id)
	if err != nil {
		helper.ErrorX(w, err, "Error getting test case")
		return
	}

	filePath, err := helper.GetFilePath(codeString, "cpp")
	if err != nil {
		helper.ErrorX(w, err, "Error creating file")
		return
	}

	mqInput := helper.MessageQueue
	mqInput <- model.CodeMessage{
		Code:     codeString,
		Language: language,
		FilePath: filePath,
		Input:    testInput,
	}

	mqOutput := helper.OutputQueue
	output := <-mqOutput

	if output.Error != nil {
		w.WriteHeader(http.StatusOK)
		fmt.Fprint(w, "Compilation error")
		return
	}

	result := Result{
		StdOutput: output.Output,
		StdInput:  testInput,
		ExpOutput: testOutput,
		Type:      submitType,
	}

	if submitType == "run" {
		err := json.NewEncoder(w).Encode(result)
		if err != nil {
			helper.ErrorX(w, err, "Error decoding code")
		}
		return
	}

	if output.Output == testOutput {
		result.Accepted = true
		helper.CreateSubmission(codeString, id, email, language, title, true)
		err := json.NewEncoder(w).Encode(result)
		if err != nil {
			helper.ErrorX(w, err, "Error decoding code")
		}
	} else {
		result.Accepted = false
		helper.CreateSubmission(codeString, id, email, language , title, false)
		err := json.NewEncoder(w).Encode(result)
		if err != nil {
			helper.ErrorX(w, err, "Error decoding code")
		}
	}
}
