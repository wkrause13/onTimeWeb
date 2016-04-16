import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, Link} from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import AppContainer from './views/AppContainer'
import DashboardContainer from './views/DashboardContainer'
import SettingsContainer from './views/SettingsContainer'
import LoginContainer from './views/LoginContainer'
import fourZerofour from './views/404'
import actions from './actions'
import store from './store'




const routes =(
  <Router history={browserHistory}>
    <Route path="/" component={LoginContainer} onEnter={redirect}/>
    <Route component={AppContainer} onEnter={requireAuth}>
      <Route path="/dashboard"  component={DashboardContainer}/>
      <Route path="/settings" component={SettingsContainer} />
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
        pathname: '/dashboard',
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