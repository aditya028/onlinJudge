package apis

import (
	"github.com/go-chi/chi"
	"github.com/rs/cors"
	"log"
	"net/http"
)

func ServeAPI() {
	r := chi.NewRouter()
	r.Mount("/api", PublicRouter())
	log.Println("Server is running on port 8080")
	
	handler := cors.Default().Handler(r)

	http.ListenAndServe(":8080", handler)
}
