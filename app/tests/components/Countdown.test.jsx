var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown',()=>{
  it('should exist', ()=>{
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', ()=>{
    it('should change state to started and count down', (done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown />);

      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      },1001);
    });

    it('should never count down to a negative number', (done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown />);

      countdown.handleSetCountdown(1);

      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      },3000);
    });

    it('should pause countdown on paused status',(done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown />);

      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(()=>{
        var count = countdown.state.count;
        expect(count).toBe(3);
        done();
      }, 3000);

    });

  });
});
