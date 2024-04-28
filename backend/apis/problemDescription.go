package apis

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	collection "onlineJudge-backend/internal/constant"
	"onlineJudge-backend/internal/db"
	"onlineJudge-backend/model"

	"github.com/go-chi/chi"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func problemDescription(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		log.Println("Failed to convert id to objectID", err)
		http.Error(w, "Invalid problem id", http.StatusBadRequest)
		return
	}

	coll := db.Client.Database(collection.DB_NAME).Collection(collection.PROBLEM)
	cursor := coll.FindOne(context.TODO(), bson.M{"_id": objectID})

	problem := model.Problem{}
	err = cursor.Decode(&problem)
	if err != nil {
		log.Println("Failed to decode problem", err)
		http.Error(w, "Failed to fetch problems", http.StatusInternalServerError)
		return
	}
	resBytes, err := json.Marshal(problem)
	if err != nil {
		log.Println("Failed to marshal response", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(resBytes)
}
