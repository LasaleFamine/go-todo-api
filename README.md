# Gotodo - Golang TODO API

> Learning Go making a RESTful API

First attempt using Go as web server and REST API for an hypothetic TODO application.

Under development :construction:

## Install

	$ go get github.com/lasalefamine/go-todo-api

## Usage

	$ go-todo-api

The server will run under the `:8080` port of the `localhost`.

## APIs

### `/todos`
```json
[
	{
		"id": 1,
		"name": "Something here",
		"completed": false,
		"due": "0001-01-01T00:00:00Z"
	},
	{
		"id": 2,
		"name": "Lolling here",
		"completed": false,
		"due": "0001-01-01T00:00:00Z"
	}
]
```

### `/todos/{todoId}`
	Todo show: {todoId}


## Logger
A simple logger decorator is implemented:
```
...
2017/01/16 23:17:48 GET /       Index   22.275µs
2017/01/16 23:17:55 GET /todos  TodoIndex       200.477µs
...
```

## License

MIT © LasaleFamine
