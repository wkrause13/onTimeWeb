import React from 'react'

export default React.createClass({
  render (){
    return(
      <div  style={penalize} className='is-flex title is-1'>
        <div>:(</div>

      </div>
    )
  }
})

const penalize = {

    fontSize:80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ED6C63',
    color: 'white',
    flex:1,
    width: '100vw'



}
