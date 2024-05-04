package main

import (
	"log"
	"onlineJudge-backend/apis"
	"onlineJudge-backend/internal/db"
	"onlineJudge-backend/internal/helper"

	"github.com/joho/godotenv"
)

func main() {
	// Load .env file
	err := godotenv.Load()
    if err != nil {
        log.Fatalf("Error loading .env file: %v", err)
    }

	// Implement message queue 
	go func() {
        for {
            helper.Execute()
        }
    }()

	// Connect to database
	db.ConnectDB()

	// Server the API
	apis.ServeAPI()
}
