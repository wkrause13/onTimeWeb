import React from 'react'

export default React.createClass({

  render (){
    return(
      <div  className='is-flex' style={settings}>
      <p className='subtitle is-3 is-text-centered'>Register</p>
      <p className="control has-icon">
        <input className="input" type="email" placeholder="Current Username"/>
        <i className="fa fa-user"></i>
      </p>
      <p className="control has-icon">
        <input className="input" type="password" placeholder="Old Username"/>
        <i className="fa fa-user"></i>
      </p>
      <p className="control">
        <button className="button is-success">
          Save
        </button>
      </p>

      </div>
    )
  }
})

const settings = {
  padding: 30,
  flexDirection: 'column',
  flexBasis: '450px',
  // alignSelf: 'flex-start'
}
