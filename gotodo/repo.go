package gotodo

import "fmt"

var currentId int

var todos Todos

type Error struct {
		Error     bool    	`json:"error"`
    Message   string    `json:"message"`
}

// Seed data
func init() {
	RepoCreateTodo(Todo{Name: "Something here"})
	RepoCreateTodo(Todo{Name: "Lolling here"})
}

func RepoFindTodo(id int) Todo {
	for _, t:= range todos {
		if t.Id == id {
			return t
		}
	}
	return Todo{}
}

func RepoCreateTodo(t Todo) Todo {
	currentId += 1
	t.Id = currentId
	todos = append(todos, t)
	return t
}

func RepoDestroyTodo(id int) Error {
	for i, t := range todos {
		fmt.Println(t)
		if t.Id == id {
			// Append before the current todo the after todo and the others (...)
			todos = append(todos[:i], todos[i+1:]...)
			currentId -= 1
			return Error{Error: false}
		}
	}

	return Error{Error: true, Message: fmt.Sprintf("Cannot find a Todo with the Id specified: %v", id)}
}
