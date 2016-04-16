import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, Link} from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import AppContainer from './views/AppContainer'
import ManageContainer from './views/ManageContainer'
import RegisterContainer from './views/RegisterContainer'
import LoginContainer from './views/LoginContainer'
import ScheduleContainer from './views/ScheduleContainer'
import fourZerofour from './views/404'
import actions from './actions'
import store from './store'




const routes =(
  <Router history={browserHistory}>
    <Route path="/" component={LoginContainer} onEnter={redirect}/>
    <Route component={AppContainer} onEnter={requireAuth}>
      <Route path="/register" component={RegisterContainer} />
      <Route path="/schedule" component={ScheduleContainer} />
      <Route path="/manage"  component={ManageContainer}/>
    </Route>
    <Route path='*' component={fourZerofour}/>
  </Router>
)



function requireAuth(nextState, replace) {
  const status =  store.getState().auth.status
  console.log(status)
  if (status!=='LOGGED_IN') {
    replace({
      pathname: '/',
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
  },
  componentWillReceiveProps() {
    window.previousLocation = this.props.location
  },
  render (){
    return <Provider store={store}>{routes}</Provider>
  }
})


render(<Index /> , document.getElementById('root'))
