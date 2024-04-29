package helper

import (
	"fmt"
	"log"
	"net/http"
)

func ErrorX(w http.ResponseWriter , err error , message string) {
	log.Println(message, err)
	w.WriteHeader(http.StatusBadRequest)
	fmt.Fprint(w, message)
}
