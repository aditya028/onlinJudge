package model

type Problem struct {
	ID          string    `json:"id" bson:"_id"`
	Title       string    `json:"title" bson:"title"`
	Description string    `json:"description" bson:"description"`
	Code        string    `json:"code" bson:"code"`
	Difficulty  string    `json:"difficulty" bson:"difficulty"`
	Example     []Example `json:"example" bson:"example"`
	TestCase    Example   `json:"test_case" bson:"tests"`
}

type Example struct {
	Input  string `json:"input" bson:"input"`
	Output string `json:"output" bson:"output"`
}
