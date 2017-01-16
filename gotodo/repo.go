package main

import "fmt"

var currentId int

var todos Todos

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
}

func RepoCreateTodo(t Todo) Todo {
	currentId += 1
	t.Id = currentId
	todos = append(todos, t)
	return t
}

func RepoDestroyTodo(id int) error {
	for i, t := range todos {
		if t.Id == id {
			// Append before the current todo the after todo and the others (...)
			todos = append(todos[:i], todos[i+1:]...)
			return nil
		}
	}

	return fmt.Errorf("Cannot find a Todo with the Id specified: %s", id)
}
