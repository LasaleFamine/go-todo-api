package gotodo

import (
	"log"
	"net/http"
	"time"
)

// inner http.Handler => the handler of the current http request
// name string => the current route name
// return http.Handler => the http.Handler itself with the logger decorator
func Logger(inner http.Handler, name string) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()

		inner.ServeHTTP(w, r)

		log.Printf(
			"%s\t%s\t%s\t%s",
			r.Method,
			r.RequestURI,
			name,
			time.Since(start),
		)
	})
}
