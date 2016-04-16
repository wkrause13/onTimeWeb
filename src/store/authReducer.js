//keep skinny
export default (state={}, action) => {
  switch (action.type) {
    case 'ATTEMPT_LOGIN':
      return {
        status: 'AWAITING_AUTH_RESPONSE',
      }
    case 'LOGIN_USER':
      return {
        status: 'LOGGED_IN',
        username: action.username,
      }
    case 'LOGOUT':
      return {
        status: 'ANONYMOUS'
      }
  }
  return state
}
