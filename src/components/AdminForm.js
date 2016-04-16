import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'
import Datetime from 'react-datetime';

export const fields = [ 'firstName'];


class AdminForm extends Component {
  render() {
    const {
      fields: { firstName },
      handleSubmit,
      resetForm,
      submitting
      } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <input type="text" placeholder="First Name" {...firstName}/>
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
          <button type="button" disabled={submitting} onClick={resetForm}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

AdminForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'simple',
  fields
})(AdminForm)

// export default AdminForm;
