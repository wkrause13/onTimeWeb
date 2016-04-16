import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import AdminForm from './AdminFormContainer';

const mapStateToProps = (state) => ({counter: state.counter })
const mapDispatchToProps= (dispatch) => ({
  onIncrement(){dispatch({ type: 'INCREMENT' })},
  onDecrement(){dispatch({ type: 'DECREMENT' })}
})

const Dashboard = React.createClass({

  render (){
    const {counter,onIncrement,onDecrement } = this.props

    return(
      <div className='is-flex' style={styles.container}>
        <Link className="button is-success" to={`/adminform`}>Create Meeting</Link>
      </div>
    )
  }
})

const styles = {
  container:{
    flexDirection: 'column',
    alignItems: 'center'
  },
  text:{
    fontSize: 75,

  },

}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
