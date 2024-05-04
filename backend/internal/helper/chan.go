package helper

import "onlineJudge-backend/model"

var MessageQueue = make(chan model.CodeMessage)

var OutputQueue = make(chan model.OutputMessage)