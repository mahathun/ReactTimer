var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer',()=>{
  it('should exist', ()=>{
    var timer = TestUtils.renderIntoDocument(<Timer />);
    expect(timer).toExist();
  });

  it('should start counting when started',(done)=>{
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);

    setTimeout(()=>{
      expect(timer.state.count).toBe(3);
      expect(timer.state.timerStatus).toBe('started');
      done();
    },3001);
  });

  it('should pause counting when paused',(done)=>{
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.setState({count:2})
    timer.handleStatusChange('started');

    timer.handleStatusChange('paused');

    setTimeout(()=>{
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(2);
      done();
    },1001);

  });

  it('should stop and clear the count counting when stopped', (done)=>{
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.state.count = 5;
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(()=>{
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('stopped');
      done();
    },1001);

  });
});
