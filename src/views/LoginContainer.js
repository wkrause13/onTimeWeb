import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import actions from '../actions'

const mapStateToProps = (state) => ({auth: state.auth })

const mapDispatchToProps= (dispatch) => ({attemptLogin(site){
  dispatch(actions.attemptLogin(site))
}})


const Login = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidUpdate(){
    const {status} = this.props.auth
    if(status==='LOGGED_IN'){
      browserHistory.push('/dashboard')
    }
  },
  render (){
    const {attemptLogin } = this.props
    const sites = ['twitter', 'facebook', 'google']
    return   (
      <div className='is-flex ' style={styles}>
         <h1 className='subtitle is-3 is-text-centered'>Sign In</h1>
        <a  className="button is-large is-primary control" onClick={attemptLogin.bind(this, sites[0])}>
          <i className="fa fa-twitter"></i>
          &nbsp;&nbsp;Twitter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <a className="button is-large is-info control" onClick={attemptLogin.bind(this, sites[1])}>
          <i className="fa fa-facebook"></i>
          &nbsp;&nbsp;Facebook&nbsp;
        </a>
        <a className="button is-large is-danger control" onClick={attemptLogin.bind(this, sites[2])}>
          <i className="fa fa-google-plus"></i>
          &nbsp;&nbsp;Google&nbsp;&nbsp;&nbsp;
        </a>
      </div>
    )


  }
})
const styles={
  height: '80vh',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
