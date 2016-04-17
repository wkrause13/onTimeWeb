import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'
import Datetime from 'react-datetime';
// import DatePicker from 'react-datepicker';

export const fields = ['startDate','time', 'gracePeriod', 'amount'];

class AdminForm extends Component {
  render() {
    const {
      fields: { startDate, time, gracePeriod, amount },
      handleSubmit,
      resetForm,
      submitting,
      clearSchedule,
      handleStartTimeChange,
      handleAmountChange
      } = this.props;

     return (
      <form onSubmit={handleSubmit}>
        <label>Date</label>
        <div className="control">
          <Datetime
            inputProps={{className: "input"}}
            timeFormat={false}
            defaultValue={new Date()}
            {...startDate}
          />
        </div>
        <label>Time</label>
        <div className="control">
          <div >
            <input
              type="time"
              className="input"
              {...time}
            />
          </div>
        </div>
        <label>Grace Period</label>
        <div className="control">
          <div>
            <input className={(gracePeriod.error && gracePeriod.touched)  ? "input is-danger" : "input"} type="text" placeholder="Grace Period (Minutes)" {...gracePeriod}/>
          </div>
          <div className="text-help">
            { gracePeriod.touched ? gracePeriod.error : null }
          </div>
        </div>
        <label>Amount</label>
        <div className="control">
          <div>
            <input
              className="input"
              placeholder="$0.00"
              {...amount}
            />
          </div>
        </div>
        <div>
          <button className="button is-primary" style={{marginRight:10}} type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
          <button className="button is-danger" type="button" disabled={submitting} onClick={clearSchedule}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.gracePeriod ) {
    errors.gracePeriod = 'Enter a grace period';
  }
  if (values.gracePeriod % 1 != 0 ) {
     errors.gracePeriod = 'Must be a number';
  }
  
  return errors;
}

AdminForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'ScheduleMeetingForm',
  fields,
  validate
})(AdminForm)

// export default AdminForm;
