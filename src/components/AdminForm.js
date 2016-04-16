import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'
import Datetime from 'react-datetime';

export const fields = ['startTime', 'gracePeriod'];


class AdminForm extends Component {
  
  handleStartDateChange(startDate) {
    var {endDate} = this.props.fields
    if (endDate.value == null || endDate.value < startDate) {
      endDate.onChange(startDate)
    }
  }
  render() {
    const {
      fields: { time, gracePeriod },
      handleSubmit,
      resetForm,
      submitting,
      startTime,
      handleStartTimeChange
      } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className="control">
          <Datetime
          inputProps={{className: "input", placeholder: "Date"}}
          value={startTime}
          onChange={ handleStartTimeChange }
          />
        </div>
        <div className="control">
          <div>
            <input className={(gracePeriod.error && gracePeriod.touched)  ? "input is-danger" : "input"} type="text" placeholder="Grace Period (Minutes)" {...gracePeriod}/>
          </div>
          <div className="text-help">
            { gracePeriod.touched ? gracePeriod.error : null }
          </div>
        </div>
        <div>
          <button className="button is-primary" type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
          <button className="button is-danger" type="button" disabled={submitting} onClick={resetForm}>
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
