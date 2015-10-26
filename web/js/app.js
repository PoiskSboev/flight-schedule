var ReactDOM = require('react-dom');
var React = require('react');

var Provider  = require('react-redux').Provider;
var FlightApp = require('./components/FlightApp.react');
var RootStore = require('./stores/RootStore');

ReactDOM.render(
  <Provider store={RootStore}>
    <FlightApp />
  </Provider>,
  document.getElementById('example')
);
