var React = require('react');

var Clock = React.createClass({

  getDefaultProps:function(){
      return {
        totalSec: 0
      }
  },
  formatSeconds:function(totalSec){

    var minuts = Math.floor(totalSec/60);
    var seconds = totalSec%60;

    minuts =(minuts<10)?"0"+minuts:minuts;
    seconds =(seconds<10)?"0"+seconds:seconds;

    return (minuts + ":" + seconds);
  },
  render: function () {
    var {totalSec} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSec)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
