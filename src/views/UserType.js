import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render (){
    return(
      <div className='is-flex' style={styles}>
      <Link to='/loginOwner' className="button is-large is-primary control" >
         &nbsp;Meeting Owner &nbsp;
      </Link>
      <Link to='/loginAttendee' className="button is-large is-primary control" >
         Meeting Attendee
      </Link>
      </div>
    )
  }
})

const styles={
  height: '90vh',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

}
