import React from "react";
import classNames from 'classnames';
import FlightActions from '../actions/FlightActions'
import ReactIntl from 'react-intl';

var FormattedDate = ReactIntl.FormattedDate

export default class FlightRow extends React.Component {  
  constructor() {
    super();
    this.selectFlight = this.selectFlight.bind(this);
  }

  selectFlight() {
    const { dispatch } = this.props;

    dispatch(FlightActions.select(this.props.flight));
  };

  render() {
    return <tr 
        className={classNames({
          'danger': this.props.flight.selected
        })} 
        onClick={this.selectFlight}>
        <td>{this.props.flight.airline}{this.props.flight.flight}</td>
        <td>{this.props.flight.departure}-{this.props.flight.destination}</td>
        <td><FormattedDate value={this.props.flight.etd} day="numeric" month="long" year="numeric" /></td>
    </tr>;
  };
}
