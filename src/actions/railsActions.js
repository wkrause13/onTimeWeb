const railsActions = {
  setState(){
    return (dispatch) =>{
      dispatch({type: 'SET_STATE'})
    }
  },
  checkIn(){
    return (dispatch) =>{
      dispatch({type: 'CHECKEDIN'})
    }
  },
  ownerCheck(){
    return (dispatch, getState) =>{
      const {owner_id, current_id}= getState().rails
      if(owner_id===current_id){
        dispatch({type: 'OWNER_SET'})
      }
    }
  },

}

export default railsActions
