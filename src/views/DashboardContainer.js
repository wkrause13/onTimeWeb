import React from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD
import AdminForm from '../components/AdminForm'
=======
import { Link } from 'react-router'
import AdminForm from './AdminFormContainer';
>>>>>>> e4549c4c3a5a68f0812ad07e4533e8ccdf44b73d

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
         <AdminForm />
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
