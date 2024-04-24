package main

import (
	"log"
	"onlineJudge-backend/apis"
	"onlineJudge-backend/internal/db"

	"github.com/joho/godotenv"
)

func main() {
	// Load .env file
	err := godotenv.Load()
    if err != nil {
        log.Fatalf("Error loading .env file: %v", err)
    }

	// Connect to database
	db.ConnectDB()

	// Server the API
	apis.ServeAPI()
}
