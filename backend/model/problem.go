package model

type Problem struct {
	ID          string `json:"id" bson:"_id"`
	Title       string `json:"title" bson:"title"`
	Description string `json:"description" bson:"description"`
	CodeID      string `json:"code_id" bson:"code_id"` // This is the _id of a Code document
	Difficulty  string `json:"difficulty" bson:"difficulty"`
	Example     []Example `json:"example" bson:"example"`
}

type Example struct {
    Input  string `json:"input" bson:"input"`
    Output string `json:"output" bson:"output"`
}
