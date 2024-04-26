package apis

import (
	"context"
	"log"
	"net/http"
	collection "onlineJudge-backend/internal/constant"
	"onlineJudge-backend/internal/db"
	"onlineJudge-backend/model"

	"go.mongodb.org/mongo-driver/bson"
)

func solution(w http.ResponseWriter, r *http.Request) {
	pID := r.URL.Query().Get("problem_id")
	language := r.URL.Query().Get("language")
	if pID == "" || language == "" {
		log.Println("Problem ID and Language is required")
		http.Error(w, "Problem ID and Language is required", http.StatusBadRequest)
		return
	}
	// Get the solution from the database
	coll := db.Client.Database(collection.DB_NAME).Collection(collection.CODE)
	result := coll.FindOne(context.TODO(), bson.M{"problem_id": pID , "language" : language})
	solution := model.Code{}
	err := result.Decode(&solution)
	if err != nil {
		log.Println("Error while fetching solution from database" , err)
		http.Error(w, "Error while fetching solution from database", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(solution.Code))

}