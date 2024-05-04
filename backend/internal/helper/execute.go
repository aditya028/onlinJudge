package helper

import (
	"bytes"
	"onlineJudge-backend/model"
	"os"
	"os/exec"
)

// Execute function takes a message from the message queue and executes the code
// The function writes output and error to the message queue
func Execute() {
	mq := MessageQueue

	msg := <-mq

	outputMQ := OutputQueue

	cmd := exec.Command("g++", msg.FilePath, "-o", "output")
	err := cmd.Run()
	if err != nil {
		outputMQ <- model.OutputMessage{
			Error: err,
		}
	}

	cmd = exec.Command("./output")

	if msg.Input != "" {
		cmd.Stdin = bytes.NewBufferString(msg.Input)
	}

	output, err := cmd.Output()
	if err != nil {
		outputMQ <- model.OutputMessage{
			Error: err,
		}
	}

	err = os.Remove("output")
	if err != nil {
		outputMQ <- model.OutputMessage{
			Error: err,
		}
	}
	err = os.Remove(msg.FilePath)
	if err != nil {
		outputMQ <- model.OutputMessage{
			Error: err,
		}
	}

	outputMQ <- model.OutputMessage{
		Output: string(output),
	}
}
