import React from 'react'
import { Input } from 'reactstrap'

const PerPage = ({ handlePerPageChange, perPage }) => (
  <div className="list__per-page">
    Per page
    <Input autoComplete="off" onChange={handlePerPageChange} type="select" value={perPage}>
      <option disabled value="">
        Items per page
      </option>
      {[10, 20, 30, 40, 50].map(perPage => (
        <option key={perPage} value={perPage}>
          {perPage}
        </option>
      ))}
    </Input>
  </div>
)

export default PerPage
