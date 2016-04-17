import React from 'react'

export default React.createClass({

  render (){
    return(
      <div  className='is-flex' style={styles.conatiner}>
      <p className='subtitle is-3 is-text-centered'>Register Your Credit Card</p>
      <p className="control has-icon">
        <input className="input" required placeholder="Name (as it appears on credit card)"/>
        <i className="fa fa-user"></i>
      </p>
      <p className="control has-icon">
        <input className="input" required  placeholder="Credit Card Number (no dashes or spaces)"/>
        <i className="fa fa-cc-visa"></i>
      </p>
      <label className="subititle">Expiration Date</label>
      <div className='is-flex' style={styles.expDate}>
        <p className="control">
          <span className="select">
            <select>
              <option>Month</option>
              <option>January</option>
            </select>
          </span>
        </p> &nbsp;
        <p className="control">
          <span className="select">
            <select>
              <option>Year</option>
              <option>January</option>
            </select>
          </span>
        </p>
        <p className="control has-icon">
          <input className="input" required  placeholder="3-digit cvc"/>
          <i className="fa fa-lock"></i>
        </p>
        </div>
        <p className="control">
          <button className="button is-success">
            Register
          </button>
        </p>

      </div>
    )
  }
})

const styles = {
  conatiner:{
    padding: 30,
    flexDirection: 'column',
    flexBasis: '450px',
  },
  expDate:{
    flexDirection: 'row',
  }
}
