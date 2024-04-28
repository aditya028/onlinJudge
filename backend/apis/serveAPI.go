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
	
	corsHandler := cors.New(cors.Options{
        AllowedOrigins:   []string{"*"}, // Allow all origins
        AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"},
        AllowedHeaders:   []string{"Authorization", "Content-Type"}, // Allow Authorization and Content-Type headers
        AllowCredentials: true,
    })

    handler := corsHandler.Handler(r)

	http.ListenAndServe(":8080", handler)
}
