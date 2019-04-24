import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../types/visibilityFilter'
import { deleteTodo, toggleTodo } from '../../actions/todos'
import { setVisibilityFilter } from '../../actions/visibilityFilter'

class TodoList extends Component {
  render() {
    console.log(this.props)
    return <div />
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      setVisibilityFilter,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
