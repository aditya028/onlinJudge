package apis

import (
	"net/http"
	"log"
	"fmt"
	"encoding/json"
	"context"
	helper "onlineJudge-backend/internal/helper"
	"onlineJudge-backend/internal/db"
	collection "onlineJudge-backend/internal/constant"
	"go.mongodb.org/mongo-driver/bson"
	"onlineJudge-backend/model"
	
)

type UserResult struct {
	Username string `json:"username"`
	Email    string `json:"email"`
}

func myAccount(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	tokenString := r.Header.Get("Authorization")
	if tokenString == "" {
		log.Println("Missing authorization header")
		w.WriteHeader(http.StatusUnauthorized)
		fmt.Fprint(w, "Missing authorization header")
		return
	}
	tokenString = tokenString[len("Bearer "):]

	email , err := helper.VerifyToken(tokenString)
	if err != nil {
		log.Println("Invalid token")
		w.WriteHeader(http.StatusUnauthorized)
		fmt.Fprint(w, "Invalid token")
		return
	}

	coll := db.Client.Database(collection.DB_NAME).Collection(collection.USER)
	res := coll.FindOne(context.TODO(), bson.M{"email": email})
	user := model.User{}
	err = res.Decode(&user)
	if err != nil {
		log.Println("User does not exists" , err)
		http.Error(w, "User does not exists", http.StatusBadRequest)
		return
	}

	ress := UserResult{
		Username: user.Username,
		Email:    user.Email,
	}
	json.NewEncoder(w).Encode(ress)
}
