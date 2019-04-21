import React from 'react'

import Counter from './Counter'
import Pagination from './Pagination'
import PerPage from './PerPage'

const List = props => {
  const {
    bulkData,
    children,
    exportCsv,
    list: { actions, listProps, name },
    search,
    totalCount,
  } = props

  const _handlePageChange = ({ selected }) => actions.setPage(name, parseInt(++selected, 10))
  const _handlePerPageChange = ({ target: { value } }) =>
    actions.setPerPage(name, parseInt(value, 10))

  return (
    <div className="list__container">
      {/* <div className="list__filters"></div> */}
      {search}
      {exportCsv}
      {bulkData}
      <Counter totalCount={totalCount} />
      {children}
      <PerPage handlePerPageChange={_handlePerPageChange} perPage={listProps.perPage} />
      <Pagination
        handlePageChange={_handlePageChange}
        page={listProps.page}
        perPage={listProps.perPage}
        totalCount={totalCount}
      />
    </div>
  )
}

export default List
