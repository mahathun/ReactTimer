var React = require('react');

var CountdownForm = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    console.log($('input').length);
    var strSeconds = this.refs.seconds.value;

    if(strSeconds.match(/[0-9]/)){
      this.refs.seconds.value = "";
      this.props.onSetCountdown(parseInt(strSeconds,10));
    }
  },
  render:function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input ref="seconds" type="text" placeholder="Enter a number in seconds" />
          <button className="button expanded">Submit</button>
        </form>
      </div>
    );
  }

});

module.exports = CountdownForm;
