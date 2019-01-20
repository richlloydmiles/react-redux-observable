import { combineEpics, ofType } from 'redux-observable'
import { LOAD_STORIES, loadStoriesFulfilled } from './actions'

import { switchMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators'

const loadStoriesEpic = action$ => action$.pipe(
  ofType(LOAD_STORIES),
  switchMap(({payload}) => ajax.getJSON(`https://api.github.com/users/${payload}`)),
  map((user) =>loadStoriesFulfilled(user))
)

export const rootEpic = combineEpics(loadStoriesEpic)
