import React, { Component } from 'react'
import { Input } from 'reactstrap'
import debounce from 'lodash/debounce'

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
    }
  }

  _setFilterValue = debounce(search => {
    const { list: { actions, name } } = this.props
    const { setFilter } = actions

    setFilter(name, { search })
  }, 500)

  _handleChange = ({ target: { value } }) => {
    this.setState({ value }, this._setFilterValue(value))
  }

  render() {
    const { value } = this.state

    return (
      <div className="list__search">
        <Input onChange={this._handleChange} placeholder="Search..." value={value} />
      </div>
    )
  }
}
