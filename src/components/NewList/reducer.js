import imm from 'object-path-immutable'

export const defaultListState = {
  page: 1,
  perPage: 10,
  filters: [],
  selectedItems: [],
  search: '',
}

const reducer = (state = {}, { type, payload, meta = {} }) => {
  const { tableName, tableId = 0 } = meta

  switch (type) {
    case 'setPage': {
      return imm.merge(state, [tableName, tableId], { page: payload })
    }

    case 'setPerPage': {
      return imm.merge(state, [tableName, tableId], { perPage: payload })
    }

    default:
      return state
  }
}

export default reducer
