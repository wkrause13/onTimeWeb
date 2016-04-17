import React from 'react'





export default React.createClass({
  render (){
    const {profileImageURL, username} =this.props.auth
    const {checkedin} = this.props.rails
    const{checkIn} = this.props
    return(
      <div className='is-flex' >

      <img src={profileImageURL} alt=""/>
      <div className="card is-fullwidth">
        <div className="card-content is-flex" style={styles.content}>
          <div >
            <p className="content title">
              {username}
            </p>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;

            {checkedin ?
              <i style={{fontSize: 30}} className="fa fa-check"></i> :
              <a style={styles.greenCircle}  onClick={checkIn}></a>
            }

        </div>
      </div>

      </div>
    )
  }
})
const styles = {
  redCircle: {
    backgroundColor: 'red',
    borderRadius: '50%',
    height: 30,
    width: 30,
  },
  greenCircle: {
    backgroundColor: 'green',
    borderRadius: '50%',
    height: 30,
    width: 30,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  }
}
