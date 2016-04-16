import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const mapStateToProps = (state) => ({ auth:state.auth })

const Manage = React.createClass({
  render (){
    const {counter,onIncrement,onDecrement } = this.props

    return(
      <div className='is-flex' style={styles.container}>
        <div>
          <img src="" />
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
export default connect(mapStateToProps)(Manage)
