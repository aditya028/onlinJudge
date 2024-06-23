package helper

import (
	"bytes"
	"context"
	"onlineJudge-backend/model"
	"os"
	"os/exec"
	"time"
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

	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()

    cmd = exec.CommandContext(ctx, "./output")

    if msg.Input != "" {
        cmd.Stdin = bytes.NewBufferString(msg.Input)
    }

    output, err := cmd.Output()
    if ctx.Err() == context.DeadlineExceeded {
        outputMQ <- model.OutputMessage{
            Error: err,
        }
        return
    } else if err != nil {
        outputMQ <- model.OutputMessage{
            Error: err,
        }
        return
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
