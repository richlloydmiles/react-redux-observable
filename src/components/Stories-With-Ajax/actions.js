export const LOAD_STORIES = 'LOAD_STORIES'
export const LOAD_STORIES_FULFILLED = 'LOAD_STORIES_FULFILLED'

export function loadStories(login) {
  console.log(login)
  return {
    type: LOAD_STORIES,
    payload: login
  }
}

export function loadStoriesFulfilled(response) {
  return {
    type: LOAD_STORIES_FULFILLED,
    payload: response
  }
}
