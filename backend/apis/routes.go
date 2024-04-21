package apis

import (
	"net/http"

	"github.com/go-chi/chi"
)

func PublicRouter() {
	r := chi.NewRouter()

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello, World!"))
	})
}