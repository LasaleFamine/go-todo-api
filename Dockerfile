FROM golang

RUN go get github.com/lasalefamine/go-todo-api

EXPOSE 8080
CMD ["/go/bin/go-todo-api", "/go/src/github.com/lasalefamine/go-todo-api"]
