package apis

import (
	"net/http"

	"github.com/go-chi/chi"
)

func PublicRouter() http.Handler{
	r := chi.NewRouter()

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Welcome to online Judge API!"))
	})
	r.Post("/login", login)
	r.Post("/signup", signup)
	r.Get("/problems", problem)
	return r 
}