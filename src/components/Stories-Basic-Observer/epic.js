import { combineEpics, ofType } from 'redux-observable'
import { LOAD_STORIES, clear } from './actions'

import { delay, mapTo } from 'rxjs/operators'

const loadStoriesEpic = action$ => action$.pipe(
  ofType(LOAD_STORIES),
  delay(2000),
  mapTo(clear())
)

export const rootEpic = combineEpics(loadStoriesEpic)
