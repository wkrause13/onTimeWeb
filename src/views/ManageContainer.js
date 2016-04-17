import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Attendee from '../components/Attendee'
import actions from '../actions'


const mapStateToProps = (state) => ({ auth:state.auth, rails: state.rails})
const mapDispatchToProps= (dispatch) => ({checkIn(){
  dispatch(actions.checkIn())
}})

const Manage = React.createClass({
  render (){

    return(
      <div className='is-flex' style={styles.container}>
        <div>
          <Attendee {...this.props}   />
        </div>
      </div>
    )
  }
})

const styles = {
  container:{
    flexDirection: 'column',
    alignItems: 'center'
  },
  userRow:{
    flexDirection: 'row'
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Manage)
