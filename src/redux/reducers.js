const initialState = {
  isLoggedIn: false,
}

const USER_LOGIN = 'USER_LOGIN'
export const logUserIn = isLoggedIn => ({
  type: USER_LOGIN,
  isLoggedIn,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isLoggedIn: action.isLoggedIn }

    default:
      return state
  }
}
