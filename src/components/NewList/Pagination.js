import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ page, perPage, totalCount, handlePageChange }) => (
  <ReactPaginate
    activeClassName="active"
    breakClassName="page-link"
    containerClassName="pagination"
    forcePage={page - 1}
    initialPage={page - 1}
    marginPagesDisplayed={2}
    nextClassName="page-item"
    nextLinkClassName="page-link"
    onPageChange={handlePageChange}
    pageClassName="page-item"
    pageCount={Math.ceil(totalCount / perPage)}
    pageLinkClassName="page-link"
    pageRangeDisplayed={2}
    previousClassName="page-item"
    previousLinkClassName="page-link"
  />
)

export default Pagination
