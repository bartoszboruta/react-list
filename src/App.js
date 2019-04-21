import React, { Component, useReducer } from 'react'
import logo from './logo.svg'
import './App.css'

import List from './components/NewList'
import listReducer, { defaultListState } from './components/NewList/reducer'

const tableName = 'campaignsReferenceImages'

const App = () => {
  const id = 100
  const [state, dispatch] = useReducer(listReducer, {
    [tableName]: { [id]: defaultListState },
  })

  console.log(state)

  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch({ type: 'setPage', payload: 111, meta: { tableName, tableId: id } })
        }
      >
        Set page = 111
      </button>
    </div>
  )
}

export default App
