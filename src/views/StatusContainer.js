import React from 'react'
import Timer from '../components/Timer'
import Penalize from '../components/Penalize'
import {connect} from 'react-redux'
import actions from '../actions'

const options = { prefix: 'minutes elapsed!', delay: 0}

const mapStateToProps = (state) => ({rails: state.rails})
const mapDispatchToProps= (dispatch) => ({onPenalize(){
  dispatch(actions.onPenalize())
}})


const Status = React.createClass({

  render (){
    const {penalize} = this.props.rails
    const {onPenalize} = this.props
    return(
      <div className='is-flex' style={styles.container}>
        {penalize ?  <Penalize/> : <Timer onPenalize={onPenalize} options={options}  />}
      </div>
    )
  }
})


const styles={
  container:{
    flex:1,
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}

export default connect(mapStateToProps,mapDispatchToProps)(Status)
