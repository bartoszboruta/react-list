import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../types/todos'

let TodoId = 2

export const addTodo = text => ({
  type: ADD_TODO,
  id: TodoId++,
  text,
})

export const deleteTodo = id => ({
  type: REMOVE_TODO,
  id: id,
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id: id,
})
