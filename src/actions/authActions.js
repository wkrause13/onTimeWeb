//keep fat
import Firebase from 'firebase'


const ref = new Firebase('https://livevoter.firebaseio.com/')

const authActions = {
  listenToAuth(){
    return (dispatch, getState) =>{

      ref.onAuth((authData)=>{
        if (authData){

          let displayName,profileImageURL
          if(authData.twitter){
            displayName = authData.twitter.displayName
          }else if(authData.facebook){
            displayName = authData.facebook.displayName
            profileImageURL = authData.facebook.profileImageURL
          } else{
            displayName = authData.google.displayName
          }

          dispatch({
            type: 'LOGIN_USER',
            username: displayName,
            profileImageURL: profileImageURL,
          })

        } else if (getState().status !== 'ANONYMOUS'){
          dispatch({type: 'LOGOUT'})
        }
      })
    }
  },

  attemptLogin(site){
    const authSite = site
    return (dispatch) =>{
      dispatch({type: 'ATTEMPT_LOGIN'}) //this sets the status on the store through the reducer
      ref.authWithOAuthRedirect(authSite, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        }
      })
    }
  },
  logoutUser(){
    return (dispatch) =>{
      dispatch({ type: 'LOGOUT' })
			ref.unauth()
    }
  }
}


//after this wire up to root

export default authActions
