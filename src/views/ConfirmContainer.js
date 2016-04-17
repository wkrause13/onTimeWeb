import React from 'react'

export default React.createClass({
  render (){
    return(
      <div>
        <h1 className='subtitle is-3 is-text-centered'>Are you Sure?</h1>
        <a  className="button is-large is-danger control" onClick={()=>console.log('confirm!')}>
         <i className="fa fa-bomb"></i>
         &nbsp;&nbsp;&nbsp;Confirm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
      </div>
    )
  }
})
