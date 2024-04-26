package model

import "time"

type Submission struct {
	ID        string    `json:"id" bson:"_id"`
	ProblemID string    `json:"problemID" bson:"problemID"`
	UserID    string    `json:"userID" bson:"userID"`
	CodeID    string    `json:"codeID" bson:"codeID"`
	Time      time.Time `json:"time" bson:"time"`
}
