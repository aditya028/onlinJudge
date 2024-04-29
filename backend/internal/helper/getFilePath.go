package helper

import (
	"io"
	"os"
	"path/filepath"
)

// GetFilePath creates a new file, writes the code to it, and returns its path
func GetFilePath(code , language string) (string , error){
	dir := "code"
    err := os.MkdirAll(dir, 0755)
    if err != nil {
        return "", err
    }

    fileName := filepath.Join(dir, "code."+language)
    file, err := os.Create(fileName)
    if err != nil {
        return "", err
    }
    defer file.Close()

    _, err = io.WriteString(file, code)
    if err != nil {
        return "", err
    }

    path, err := filepath.Abs(fileName)
    if err != nil {
        return "", err
    }

    return path, nil
}