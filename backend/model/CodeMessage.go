package model

type CodeMessage struct {
	Code     string `json:"code"`
	Language string `json:"language"`
	FilePath string `json:"filePath"`
	Input    string `json:"input"`
}

type OutputMessage struct{
	Output string `json:"output"`
	Error error `json:"error"`
}
