package main

import (
    "log"
    "net/http"

		"github.com/lasalefamine/go-todo-api/gotodo"
)

func main() {
    router := gotodo.NewRouter()
    log.Fatal(http.ListenAndServe(":8080", router))
}
