var React = require('react');
var Clock = require('Clock');
var Countdown = React.createClass({
  render:function(){
    return (
      <div>
        Countdown
        <Clock totalSec="62" />
      </div>
    );
  }
});

module.exports = Countdown;
