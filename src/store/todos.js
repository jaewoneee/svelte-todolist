import { writable } from 'svelte/store'

const storedTodos = JSON.parse(localStorage.getItem('todos'))
export const todoItems = storedTodos ? writable([...storedTodos]) : writable([])
