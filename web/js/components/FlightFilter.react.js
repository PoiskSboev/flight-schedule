import React from "react";
import FlightStore from '../stores/FlightStore';
import FlightActions from '../actions/FlightActions'
import Calendar from 'react-input-calendar';

export default class FlightApp extends React.Component {  
  constructor(props){
    super(props);
    this.periodChanged = this.periodChanged.bind(this);
    this.periodFromDateChanged = this.periodFromDateChanged.bind(this);
    this.periodToDateChanged = this.periodToDateChanged.bind(this);
    this.state={
      period: 1,
      fromDate: new Date(),
      toDate: new Date('3000-01-01')
    }
  }

  periodChanged(e) {
    const { dispatch } = this.props;

    var period = e.currentTarget.value;
    this.setState({period : period})
    dispatch(FlightActions.periodChanged(period, this.state.fromDate, this.state.toDate));
  }

  periodToDateChanged(e) {
    const { dispatch } = this.props;

    var date = e;
    this.setState({toDate: date, period: -1});
    dispatch(FlightActions.periodChanged(-1, this.state.fromDate, date));
  }

  periodFromDateChanged(e) {
    const { dispatch } = this.props;

    var date = e;
    this.setState({fromDate: date, period: -1});
    dispatch(FlightActions.periodChanged(-1, date, this.state.toDate));
  }
  
  render() {
    return <div>
               <div>
                   <select className="form-control">
                       <option>Flight</option>
                       <option>Arrival</option>
                       <option>Dep date</option>
                       <option>Time</option>
                   </select>
               </div>
               <div>
                   <label className="radio-inline">
                       <input type="radio" name="period" value="1" onChange={this.periodChanged} checked={this.state.period == 1}/> 1
                   </label>
                   <label className="radio-inline">
                       <input type="radio" name="period" value="7" onChange={this.periodChanged} checked={this.state.period == 7}/> 7
                   </label>
                   <label className="radio-inline">
                       <input type="radio" name="period" value="30" onChange={this.periodChanged} checked={this.state.period == 30}/> 30
                   </label>
                   <label className="radio-inline">
                     <input type="radio" name="period" value="-1" onChange={this.periodChanged} checked={this.state.period == -1}/> Custom
                   </label>
                     <div>From : <Calendar format="DD/MM/YYYY" date={this.state.fromDate} onChange={this.periodFromDateChanged}/></div>
                     <div>To <Calendar format="DD/MM/YYYY" date={this.state.toDate} onChange={this.periodToDateChanged}/></div>
               </div>
           </div>;
  }
}
