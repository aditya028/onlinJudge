package helper

import (
	"fmt"
	"os"

	"github.com/golang-jwt/jwt/v5"
)

func VerifyToken(tokenString string) (string , error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
	   return ([]byte(os.Getenv("JWT_SECRET"))), nil
	})
	if err != nil {
	   return "",err
	}
   
	if !token.Valid {
	   return "",fmt.Errorf("invalid token")
	}
   
	claims, ok := token.Claims.(jwt.MapClaims)
    if !ok {
        return "", fmt.Errorf("invalid token claims")
    }

    id, ok := claims["id"].(string)
    if !ok {
        return "", fmt.Errorf("token does not contain id")
    }

    return id, nil
 }