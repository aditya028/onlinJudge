package model

type Code struct {
	ID        string `json:"id" bson:"_id"`
	Code      string `json:"code" bson:"code"`
	Language  string `json:"language" bson:"language"`
	ProblemID string `json:"problem_id" bson:"problem_id"`
}
