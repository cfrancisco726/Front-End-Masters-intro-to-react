import { SET_SEARCH_TERM } from './actions';

export function setSarchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm }
}
