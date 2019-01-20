import { LOAD_STORIES, LOAD_STORIES_FULFILLED } from './actions'

const initialState = {
  users: [
    {
      id: 'richlloydmiles',
    }
    ,
    {
      id: 'yesitsdave'
    }
  ],
  current: null
}

export function storiesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STORIES:
      return {
        ...state,
        users: initialState.users.slice(),
      }
    case LOAD_STORIES_FULFILLED:
      return {
        ...state,
        current: action.payload.avatar_url,
      }
    default:
      return state
  }
}

export default storiesReducer
