import React from 'react'
import Timer from '../components/Timer'

const options = { prefix: 'minutes elapsed!', delay: 1000}

export default React.createClass({
  render (){
    return(
      <div>
        <Timer options={options} />
      </div>
    )
  }
})
