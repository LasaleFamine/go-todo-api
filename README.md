# Gotodo - Golang TODO API

> Learning Go making a RESTful API #100DaysOfCode

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

## Static contents
A static `index.html`, to consume the API, with some `bower_components` are inside the `/static` folder and are served with Go of course.
Built with the [clab-ui-components](https://github.com/contactlab/contactlab-ui-components).

## Deploy
Deploy your own **go-todo-api** with [now](https://zeit.co/now) and Docker.
Within the root directory of the project just run:

	$ now

Done :rocket:

## License

MIT © LasaleFamine
