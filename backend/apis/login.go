package apis

import (
	"context"
	"log"
	"net/http"
	collection "onlineJudge-backend/internal/constant"
	"onlineJudge-backend/internal/db"
	"onlineJudge-backend/model"
)

func login(w http.ResponseWriter, r *http.Request) {
	// Get user info from request
	// check if value is empty or not
	// check if user exists in database
	// if user exists, check if password is correct
	// create hash for password
	// insert user info into database
	// Create jwt token using user info
	// return jwt token

	coll := db.Client.Database(collection.DB_NAME).Collection(collection.USER)
	doc := model.User{
		Username: "username",
		Password: "password",
		Email:    "email",
	}
	result, err := coll.InsertOne(context.TODO(), doc)
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Inserted document with _id: %v\n", result.InsertedID)

	w.Write([]byte("Login page"))
}
