"use client"
import AddTodo from "@/components/AddTodo";
import TodoFlter from "@/components/TodoFlter";
import TodoList from "@/components/TodoLIst";
import { Todo } from "@/types";
import { useState } from "react";


export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('all')
  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
  return (
    <div>
      <h1>Hello</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      <TodoFlter setFilter={setFilter} />
    </div>
  );
}
