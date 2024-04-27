package apis

import (
	"context"
	"log"
	"net/http"
	collection "onlineJudge-backend/internal/constant"
	"onlineJudge-backend/internal/db"
	"onlineJudge-backend/model"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"

	"go.mongodb.org/mongo-driver/bson"
	"golang.org/x/crypto/bcrypt"
)

func signin(w http.ResponseWriter, r *http.Request) {
	// Get user info from request
	password := r.FormValue("password")
	email := r.FormValue("email")

	// check if value is empty or not
	if password == "" || email == "" {
		log.Println("password or email is empty")
		http.Error(w, "Please provide all the required values", http.StatusBadRequest)
		return
	}

	// check if user exists in database
	coll := db.Client.Database(collection.DB_NAME).Collection(collection.USER)
	result := coll.FindOne(context.TODO(), bson.M{"email": email})
	user := model.User{}
	err := result.Decode(&user)
	if err != nil {
		log.Println("User does not exists" , err)
		http.Error(w, "User does not exists", http.StatusBadRequest)
		return
	}

	// compare password
	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if err != nil {
		log.Println("Invalid password" , err)
		http.Error(w, "Invalid password", http.StatusUnauthorized)
		return
	}

	// Create jwt token using user info
	token := jwt.NewWithClaims(jwt.SigningMethodHS256,
		jwt.MapClaims{
			"id":  user.Email,
			"exp": time.Now().Add(time.Hour * 24).Unix(),
		})

	tokenString, err := token.SignedString([]byte(os.Getenv("JWT_SECRET")))
	if err != nil {
		log.Println("Failed to generate token" , err)
		http.Error(w, "Failed to generate token", http.StatusBadRequest)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte(tokenString))
	
}
