package apis

import (
	"context"
	"errors"
	"log"
	"net/http"
	collection "onlineJudge-backend/internal/constant"
	"onlineJudge-backend/internal/db"
	"onlineJudge-backend/model"

	"go.mongodb.org/mongo-driver/bson"
	"golang.org/x/crypto/bcrypt"
)

func signup(w http.ResponseWriter, r *http.Request) {
	// Get user info from request
	username := r.FormValue("username")
	password := r.FormValue("password")
	email := r.FormValue("email")

	// check if value is empty or not
	if username == "" || password == "" || email == "" {
		log.Println("Username, password or email is empty")
		http.Error(w, "Please provide all the required values", http.StatusBadRequest)
		return
	}

	// check if user exists in database
	coll := db.Client.Database(collection.DB_NAME).Collection(collection.USER)
	result := coll.FindOne(context.TODO(), bson.M{"email": email})
	err := result.Decode(&model.User{})
	if err == nil {
		log.Println("User already exists")
		http.Error(w, "User already exists", http.StatusBadRequest)
		return
	}

	// create hash for password
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		log.Println(errors.New("error while hashing password"))
		http.Error(w, "Error while hashing password", http.StatusInternalServerError)
		return
	}

	// insert user info into database
	doc := model.User{
		Username: username,
		Password: string(hash),
		Email:    email,
	}
	_, err = coll.InsertOne(context.TODO(), doc)
	if err != nil {
		log.Println(errors.New("error while inserting user into database"))
		http.Error(w, "Error while inserting user into database", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Successfully Registerd user"))
}
