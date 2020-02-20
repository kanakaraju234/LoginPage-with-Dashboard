import { auth } from '../data/login'

const initial = {
  auth: auth,
  isLoggin: false
}

const loginReducer = (state = initial, action) => {
  if (action.type === 'LOG_IN') {
    if (
      state.auth.username === action.user &&
      state.auth.password === action.passwd
    ) {
      console.log('checki..' + action.user + 'welcome')
      return {
        ...state,
        isLoggin: { isLoggin: true }
      }
    }
  }

  return state
}

export default loginReducer
