import React from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import actions from '../actions'

const navMsg = ['Register a cc ', 'Schedule a meeting', 'Manage your attendees', 'Confirm Your Meeting', 'Check Your Status']

const mapStateToProps = (state) => ({ auth:state.auth,  rails:state.rails })
const mapDispatchToProps= (dispatch) => ({logoutUser(){
  dispatch(actions.logoutUser())
}})


const App = React.createClass({

  render() {


    const {isOwner} = this.props.rails



    let backMsg, fwdMsg, fwd, back
    const {pathname}= this.props.location
    const {childRoutes} = this.props.route
    switch (pathname) {
      case '/register':
        if(isOwner){
          fwdMsg=navMsg[1]
          fwd=childRoutes[1].path
        }else{
          fwdMsg=navMsg[3]
          fwd=childRoutes[3].path
        }
        break
      case '/schedule': backMsg=navMsg[0], back=childRoutes[0].path, fwdMsg=navMsg[2], fwd = childRoutes[2].path
        break
      case '/manage': backMsg=navMsg[1], back=childRoutes[1].path
        break
      case '/confirm': backMsg=navMsg[0], back=childRoutes[0].path, fwdMsg=navMsg[4], fwd = childRoutes[4].path
        break
      case '/status': backMsg=navMsg[3], back=childRoutes[3].path
        break
    }

    const {username } = this.props.auth
    const {logoutUser} = this.props
    return (
      <div className='is-flex' style={styles.app}>
        <div  className="navbar-left is-flex" style={styles.nav}>
          {back ?
            <Link to={back}>
              <span style={styles.links} className='icon'><i className="fa fa-chevron-left"></i></span>&nbsp;
              <span>{backMsg}</span>
            </Link>
            : null }
          <div className='is-flex' style={styles.userLogout}>
            <p>{username}</p> &nbsp;
            <Link  to='/' onClick={logoutUser} className="button is-primary">
              <span>logout</span>
              <span style={styles.links} className='icon'><i className="fa fa-sign-out"></i></span>
            </Link>
          </div>
          {fwd ?
            <Link to={fwd} style={{justifyContent: 'flex-end'}}>
              <span>{fwdMsg}</span>&nbsp;
              <span style={styles.links} className='icon'><i className="fa fa-chevron-right"></i></span>
            </Link>
            : null }
        </div>
        <div  className='is-flex' style={styles.content}>{this.props.children}</div>
      </div>
    )
  }
})

const styles = {
  app:{
    flexDirection: 'column',
    height: '100vh',
    flex: 1
  },
  nav:{
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor: 'white',
    fontSize: '20',
    flex: 1,
  },
  content:{
    flex:10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'column'
  },
  userLogout:{
    flexDirection:'row',
    alignItems:'center',
  },
  links:{
    marginTop:3
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
