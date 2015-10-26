import React from "react";
import FlightRow from './FlightRow.react'

export default class FlightGrid extends React.Component {  
  render() {
    const { dispatch } = this.props;

    var flightRows = this.props.flights.map(function (flight) {
      return (
        <FlightRow flight={flight} dispatch={dispatch}/>
      );
    });

    return <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>flight number</th>
                  <th>route</th>
                  <th>etd</th>
                </tr>
              </thead>
              <tbody>
                {flightRows}
              </tbody>
          </table>;
  }
}
