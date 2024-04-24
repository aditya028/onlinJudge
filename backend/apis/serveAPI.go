package apis

import (
	"github.com/go-chi/chi"
	"log"
	"net/http")

func ServeAPI() {
	r := chi.NewRouter()
	r.Mount("/api", PublicRouter())
	log.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", r)
}