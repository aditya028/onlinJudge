package helper

import (
	"context"
	"log"
	collection "onlineJudge-backend/internal/constant"
	"onlineJudge-backend/internal/db"
	"onlineJudge-backend/model"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetTestCase(id string) (string , string , error){
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		log.Println("Failed to convert id to objectID", err)
		return "" , "" , err
	}

	coll := db.Client.Database(collection.DB_NAME).Collection(collection.PROBLEM)
	cursor := coll.FindOne(context.TODO(), bson.M{"_id": objectID})

	problem := model.Problem{}
	err = cursor.Decode(&problem)
	if err != nil {
		log.Println("Failed to decode problem", err)
		return "" , "" , err
	}
	return problem.TestCase.Input , problem.TestCase.Output , nil
}