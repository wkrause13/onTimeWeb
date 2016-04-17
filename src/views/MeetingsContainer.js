import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import * as actions from '../actions/meetingActions';

class MeetingsList extends Component {
  constructor(){
    super();
    this.renderMeetingList = this.renderMeetingList.bind(this);
  }
  componentWillMount() {
    this.props.fetchMeetings();
  }
  renderMeetingList() {
   return this.props.meetingList.meetings.map((meeting) =>{
     let dateObject = moment(meeting.date).format("MMM Do YY");
     return (
       <li key={meeting.id}>
        <div className="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="http://placehold.it/46x46" style={{borderRadius:"50%"}}/>
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{'Meeting ' + meeting.id.toString()}</strong>
              </p>
               <small> <a href={meeting.url}>{dateObject}</a></small>
            </div>
          </div>
        </div>
        </li>
     )
      // return <li key={meeting.id}>{meeting.url}</li>
    })
  }
  renderTable() {
    return(
      <div>
        <ul>
          {this.renderMeetingList()}
        </ul>
      </div>

    )
  }
  render() {
    if (_.isEmpty(this.props.meetingList)){
      return null;
    }
    console.log(this.props);
    return (
      <div className="MeetingsList">
        {(_.isEmpty(this.props.meetingList.meetings)) ? "Loading..." :
        this.renderTable()}

      </div>
    );
  }
}


function mapStateToProps(state) {
  return { meetingList: state.meetingsReducer };
}

export default connect(mapStateToProps, actions)(MeetingsList);