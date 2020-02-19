import React from 'react'
import TodoList from './pages/mobxDemo/todoList'
import TodoListView from './pages/mobxDemo/containers/TodoList'

const store = new TodoList()

function App() {
  return (
    <TodoListView todoList={store} />
  )
}

export default App;
