import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTodo } from '../../actions/todos'

export class TodoInput extends Component {
  state = {
    todo: '',
  }

  _handleChange = ({ target: { value } }) => {
    this.setState({ todo: value })
  }

  _handleSubmit = () => {
    const { todo } = this.state

    this.props.addTodo(todo)
  }

  render() {
    return (
      <div>
        <input onChange={this._handleChange} />
        <button onClick={this._handleSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo,
    },
    dispatch,
  )
}

export default connect(
  null,
  mapDispatchToProps,
)(TodoInput)
