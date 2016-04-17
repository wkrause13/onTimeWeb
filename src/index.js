import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, Link} from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import LoginContainer from './views/LoginContainer'
import AppContainer from './views/AppContainer'
import RegisterContainer from './views/RegisterContainer'
import ScheduleContainer from './views/ScheduleContainer'
import ManageContainer from './views/ManageContainer'
import ConfirmContainer from './views/ConfirmContainer'
import StatusContainer from './views/StatusContainer'
import MeetingsList from './views/MeetingsContainer'

import fourZerofour from './views/404'
import actions from './actions'
import store from './store'




const routes =(
  <Router history={browserHistory}>


    <Route path="/" component={LoginContainer} onEnter={redirect}/>
    <Route component={AppContainer} onEnter={requireAuth}>
      <Route path="/register" component={RegisterContainer} />
      <Route path="/schedule" component={ScheduleContainer} />
      <Route path="/manage"  component={ManageContainer} />
      <Route path="/confirm"  component={ConfirmContainer}/>
      <Route path="/status"  component={StatusContainer}/>
      <Route path="/meetings"  component={MeetingsList}/>
    </Route>



    <Route path='*' component={fourZerofour}/>
  </Router>
)



function requireAuth(nextState, replace) {
  const status =  store.getState().auth.status
  if (status!=='LOGGED_IN') {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function ownerOnly(nextState, replace) {
  const {isOwner} =  store.getState().rails
  if (isOwner) {
    replace({
      pathname: '/status',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}



function redirect(nextState, replace) {
  const status =  store.getState().auth.status
  if (status==='LOGGED_IN') {
    replace({
        pathname: '/manage',
        state: { nextPathname: nextState.location.pathname }
      })
  }
}



const Index = React.createClass({
  componentWillMount(){

    store.dispatch(actions.listenToAuth())
    store.dispatch(actions.setState())
    store.dispatch(actions.ownerCheck())
  },
  render (){
    return <Provider store={store}>{routes}</Provider>
  }
})


render(<Index /> , document.getElementById('root'))
