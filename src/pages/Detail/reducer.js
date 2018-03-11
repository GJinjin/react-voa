import { CHANGE_ITEM } from './actionType'

const defaultState = {
  title: '',
  data: '',
  source: '',
  count: '',
  mp3: '',
  content: ''
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_ITEM:
      return action.value
    default:
      return state
  }
}