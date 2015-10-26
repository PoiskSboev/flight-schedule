import React from "react";
import FlightGrid from './FlightGrid.react'
import FlightActions from '../actions/FlightActions'
import FlightFilter from './FlightFilter.react';
import Calendar from 'react-input-calendar';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FlightApp extends React.Component {  
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(FlightActions.periodChanged(1, undefined, undefined));
  };

  render() {
    const { loading, flights, dispatch } = this.props;

    if (loading === undefined){
      return <div className="container">Loading</div>
    };

    if (loading){
      return <div className="container">Loading...</div>
    };

    return <div className="container">
        <div>
            <h1>Flight schedule</h1>
            <h2>Airport</h2>
            <FlightFilter dispatch={dispatch}/>
            <div className="table-responsive">
                <FlightGrid flights={flights} dispatch={dispatch}/>
            </div>
        </div>
    </div>;
  }
}

function mapStateToProps(state) {
  return state.FlightStore;
}

export default connect(mapStateToProps)(FlightApp);
