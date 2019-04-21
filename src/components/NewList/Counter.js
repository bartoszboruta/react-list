import React from 'react'
import { Badge } from 'reactstrap'

const Counter = ({ totalCount = 0 }) => <Badge color="secondary">{`${totalCount} results`}</Badge>

export default Counter
