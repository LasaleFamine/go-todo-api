package gotodo

import (
    "fmt"
    "net/http"
		"encoding/json"

		"github.com/gorilla/mux"
)


func Index(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "Hello!")
}

func TodoIndex(w http.ResponseWriter, r *http.Request) {
	// Fill a todo
	todos := Todos{
    Todo{Name: "Write presentation"},
    Todo{Name: "Host meetup"},
  }

	w.Header().Set("Content-Type", "application/json;charset=UTF-8")
	w.WriteHeader(http.StatusOK)

	// Send back encoded
	if err := json.NewEncoder(w).Encode(todos); err != nil {
    panic(err)
  }
}

func TodoShow(w http.ResponseWriter, r *http.Request) {
	// Getting the params from the route
	vars := mux.Vars(r)
	todoId := vars["todoId"]

  fmt.Fprintln(w, "Todo show:", todoId)
}
