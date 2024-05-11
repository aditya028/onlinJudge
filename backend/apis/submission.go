package apis

import (
	"context"
	"encoding/json"
	"net/http"
	collection "onlineJudge-backend/internal/constant"
	"onlineJudge-backend/internal/db"
	"onlineJudge-backend/internal/helper"
	"onlineJudge-backend/model"
	"time"

	"go.mongodb.org/mongo-driver/bson"
)

type SubmissionResult struct {
	Title      string    `json:"title"`
	IsAccepted bool      `json:"isAccepted"`
	Language   string    `json:"language"`
	Time       time.Time `json:"time"`
}

func submission(w http.ResponseWriter, r *http.Request) {
	// Authorize the use and get email from their token
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

	// Get the problemID, isAccepted from the query parameters
	problemID := r.URL.Query().Get("problemID")
	isAccepted := r.URL.Query().Get("isAccepted")

	filter := bson.M{"userEmail": email}

	if problemID != "" {
		filter["problemID"] = problemID
	}

	if isAccepted != "" {
		filter["isAccepted"] = true
	}
	// Fetch submission from the database
	coll := db.Client.Database(collection.DB_NAME).Collection(collection.SUBMISSION)
	cursor, err := coll.Find(context.TODO(), filter)

	if err != nil {
		helper.ErrorX(w, err, "Failed to fetch submission")
		return
	}

	submissions := []model.Submission{}
	for cursor.Next(context.TODO()) {
		var submission model.Submission
		err := cursor.Decode(&submission)
		if err != nil {
			helper.ErrorX(w, err, "Failed to decode submission")
			return
		}
		submissions = append(submissions, submission)
	}

	result := []SubmissionResult{}
	for _, submission := range submissions {
		res := SubmissionResult{
			Title:      submission.Title,
			IsAccepted: submission.IsAccepted,
			Language:   submission.Language,
			Time:       submission.Time,
		}
		result = append(result, res)
	}

	w.WriteHeader(http.StatusOK)
	err = json.NewEncoder(w).Encode(result)
	if err != nil {
		helper.ErrorX(w, err, "Failed to encode submission")
	}
}
