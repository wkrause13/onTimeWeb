export default (state={}, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return {
        confirmed:  true,
        checkedin:  false,
        owner_id: 2,
        current_id: 2,
        isOwner: false
      }
    case 'CHECKED_IN':
      return {
        checkedin:  true,
      }
    case 'OWNER_SET':
      return {
        isOwner:  true,
      }

  }
  return state
}
