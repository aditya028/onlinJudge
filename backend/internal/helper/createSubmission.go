package helper

import (
	"context"
	"log"
	collection "onlineJudge-backend/internal/constant"
	"onlineJudge-backend/internal/db"
	"onlineJudge-backend/model"
	"time"
)

func CreateSubmission(code, id, email ,language, title string, isAccepted bool) {
	coll := db.Client.Database(collection.DB_NAME).Collection(collection.SUBMISSION)
	doc := model.Submission{
		ProblemID:  id,
		UserEmail:  email,
		Code:       code,
		Time:       time.Now(),
		IsAccepted: isAccepted,
		Language:   language,
		Title:      title,
	}
	_, err := coll.InsertOne(context.TODO(), doc)
	if err != nil {
		log.Println("Error in inserting submission: ", err)
		return
	}
}
