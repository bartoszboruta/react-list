import { SET_VISIBILITY_FILTER } from '../types/visibilityFilter'

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
})
