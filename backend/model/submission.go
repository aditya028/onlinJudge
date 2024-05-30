package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Submission struct {
	ID         primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	ProblemID  string             `json:"problemID" bson:"problemID"`
	UserEmail  string             `json:"userEmail" bson:"userEmail"`
	Code       string             `json:"code" bson:"code"`
	Time       time.Time          `json:"time" bson:"time"`
	IsAccepted bool               `json:"isAccepted" bson:"isAccepted"`
	Language   string             `json:"language" bson:"language"`
	Title      string             `json:"title" bson:"title"`
	Difficulty string             `json:"difficulty" bson:"difficulty"`
}
