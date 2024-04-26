package apis

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	collection "onlineJudge-backend/internal/constant"
	"onlineJudge-backend/internal/db"
	"onlineJudge-backend/model"

	"go.mongodb.org/mongo-driver/bson"
)

func problem(w http.ResponseWriter, r *http.Request) {
	coll := db.Client.Database(collection.DB_NAME).Collection(collection.PROBLEM)
	cursor, err := coll.Find(context.TODO(), bson.M{})
	if err != nil {
		log.Println("Failed to fetch problems", err)
		http.Error(w, "Failed to fetch problems", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(context.Background())

	var problems []model.Problem
	for cursor.Next(context.TODO()) {
		var problem model.Problem
		err := cursor.Decode(&problem)
		if err != nil {
			log.Println("Failed to decode problem", err)
			http.Error(w, "Failed to fetch problems", http.StatusInternalServerError)
			return
		}
		problems = append(problems, problem)
	}
	resBytes, err := json.Marshal(problems)
	if err != nil {
		log.Println("Failed to marshal response", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(resBytes)
}
