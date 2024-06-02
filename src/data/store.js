import { create } from 'zustand';
import { todos } from './data';
import { getToday } from '../utils/date';

const useStore = create(set => ({
  todos: todos, // Importera och använd initiala todos från data.js
  toggleDone: id => set(state => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  })),
  resetTodos: () => set({ todos: [] }), // Nollställ todos
  deleteTodo: id => set(state => ({
    todos: state.todos.filter(t => t.id !== id)
  })),
  
  editTodo: (id, newText) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
    })),
  
  setTodos: newTodos => set({ todos: newTodos })
}));



export { useStore }
