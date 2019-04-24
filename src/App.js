import React, { useReducer } from 'react'

import listReducer, { defaultListState } from './components/NewList/reducer'
import TodoInput from './components/Todo/TodoInput'
import TodoList from './components/Todo/TodoList'
const tableName = 'campaignsReferenceImages'

const App = () => {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
