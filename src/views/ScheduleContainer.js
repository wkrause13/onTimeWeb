import React, { Component } from 'react';
import AdminForm from '../components/AdminForm';

import { connect } from 'react-redux';
import * as actions from '../actions/scheduleActions';

class AdminFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
  }
  handleSubmit(props) {
    this.props.submitSchedule(props);
  }
  handleStartTimeChange(date){
    this.props.changeStartTimeChange(date);
  }
  render() {
    const myInitialValues = {
      initialValues: {
        startDate: new Date()
      }
    }
    return (
      <div>
        <AdminForm
          onSubmit={this.handleSubmit}
          handleStartTimeChange={this.handleStartTimeChange}
          clearSchedule={this.props.clearSchedule}
          {...myInitialValues}
        />
        { this.props.scheduleMeetingForm ? this.props.scheduleMeetingForm.fullName : ''}
      </div>
    );
  }
}
// AdminForm.propTypes = {
//   devices: React.PropTypes.instanceOf(List).isRequired,
// };

function mapStateToProps(state) {
  return { scheduleForm: state.scheduleReducer };
}

export default connect(mapStateToProps, actions)(AdminFormContainer);
