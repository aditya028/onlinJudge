package helper

import (
	"bytes"
	"os"
	"os/exec"
)

func Execute(filePath, testInput string) (string, error) {
	cmd := exec.Command("g++", filePath, "-o", "output")
	err := cmd.Run()
	if err != nil {
		return "", err
	}

	cmd = exec.Command("./output")

	if testInput != "" {
		cmd.Stdin = bytes.NewBufferString(testInput)
	}
	
	output, err := cmd.Output()
	if err != nil {
		return "", err
	}

	err = os.Remove("output")
	if err != nil {
		return "", err
	}
	err = os.Remove(filePath)
	if err != nil {
		return "", err
	}

	return string(output), nil
}
