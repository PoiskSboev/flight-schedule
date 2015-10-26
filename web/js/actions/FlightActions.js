import FlightConstants from '../constants/FlightConstants';
import jquery from 'jquery'

function startLoading(period, fromDate, toDate) {
  return {
    type: FlightConstants.PERIOD_CHANGED,
    period: period,
    fromDate: fromDate,
    toDate: toDate
  };
};

function flightsLoaded(flights) {
  return {
    type: FlightConstants.FLIGHTS_LOADED,
    flights: flights
  };
};

class FlightActions{
  static selectFlight(flightId) {
    return {
      type: FlightConstants.FLIGHT_SELECT,
      flightId: flightId
    };
  };

  static periodChanged(period, fromDate, toDate) {
    return dispatch => {
      dispatch(startLoading(period, fromDate, toDate))
      jquery
        .ajax({
          url: 'http://localhost:8083/items',
          dataType: 'json',
          data: { period: period, fromDate: fromDate, toDate: toDate }
        })
        .then(function(result){
          var flights = [];
          for(var i in result){
            var flight = result[i];
            flights.push({ 
              id: flight.departure_id,
              airline : flight.marketing_carrier_code, 
              flight : flight.flight_no, 
              departure : flight.departure_airport.airport_code, 
              destination : flight.arrival_airport.airport_code, 
              etd : flight.departure_date_time});
          }

          dispatch(flightsLoaded(flights));
        });
    }
  };
};

export default FlightActions;