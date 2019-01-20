import React from 'react'
import { connect } from 'react-redux'
import { loadStories } from './actions'

export function Stories(props) {
  return (
    <div>
      <StoryList {...props} />
    </div>
  )
}

function StoryList(props) {
  if (props.users.length === 0) return null
  return (
    <div>

      {props.users.map(user => (
        <button key={user.id} type="button" onClick={() => props.loadStories(user.id)}>
          {user.id}
        </button>
      ))}
      <div>
        ({props.current})
      </div>
    </div>
  )
}

function mapState(state) {
  return state
}

function mapDispatch(dispatch) {
  return {
    loadStories: (item) => dispatch(loadStories(item)),
  }
}

export default connect(mapState, mapDispatch)(Stories)
