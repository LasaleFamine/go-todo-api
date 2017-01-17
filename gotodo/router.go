package gotodo

import (
  "net/http"

  "github.com/gorilla/mux"
)

func NewRouter() *mux.Router {
	// Create the router
  router := mux.NewRouter().StrictSlash(true)
	// Check for every routes and details
  for _, route := range routes {
		var handler http.Handler
		// Get the current handler and pass to the logger decorator
		handler = route.HandlerFunc
		handler = Logger(handler, route.Name)

    router.
      Methods(route.Method).
      Path(route.Pattern).
      Name(route.Name).
			// Pass the handler with the logger decorator
      Handler(handler)
  }

	// Serve static files from "/static" folder within the root
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))
  http.Handle("/", router)

  return router
}
