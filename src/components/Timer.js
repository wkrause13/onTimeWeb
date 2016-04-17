import React from 'react'

let SecondsTohhmmss = function(totalSeconds) {
  let hours   = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

  // round seconds
  seconds = Math.round(seconds * 100) / 100

  let result = (hours < 10 ? "0" + hours : hours);
      result += ":" + (minutes < 10 ? "0" + minutes : minutes);
      result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
  return result;
}


export default React.createClass({
  getInitialState: function(){
      return {
        clock: 0,
        time: ''
      }
   },
   /**
    * Pause the timer.
   **/
   pause: function() {
     if (this.interval) {
       clearInterval(this.interval);
       this.interval = null;
     }
   },
   /**
    * Play the timer.
   **/
   play: function() {
     if (!this.interval) {
       this.offset   = Date.now();
       this.interval = setInterval(this.update, this.props.options.delay); // 100 is delay
     }
   },
   /**
    * Reset the timer.
   **/
   reset: function() {
     let clockReset = 0;
     this.setState({clock: clockReset });
     let time = SecondsTohhmmss(clockReset / 1000);
     this.setState({time: time });
   },
   /**
    * Increment the timer.
   **/
   update: function() {
     let clock = this.state.clock;
     clock += this.calculateOffset();
     this.setState({clock: clock });
     let time = SecondsTohhmmss(clock / 1000);
     this.setState({time: time });
   },
   /**
    * Calculate the offset time.
   **/
   calculateOffset: function() {
     let now = Date.now(),
         o   = now - this.offset;
     this.offset = now;
     return o;
   },
   componentDidMount: function() {
     this.play();
   },
   componentWillUnmount: function() {
     this.pause();
   },
   render: function(){


     let secondsStyles = {
       fontSize: 80,
     };

     return (

       <div  className="react-timer">
       <h3 style={secondsStyles} className="seconds"> {this.state.time} {this.props.prefix}</h3>
       </div>
     );
   }
})
