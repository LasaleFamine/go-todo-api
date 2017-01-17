FROM golang

ADD . /go/src/github.com/lasalefamine/go-todo-api
RUN go get github.com/lasalefamine/go-todo-api
RUN go install github.com/lasalefamine/go-todo-api
WORKDIR /go/src/github.com/lasalefamine/go-todo-api
CMD ["go-todo-api"]

EXPOSE 8080
