import FlightConstants from '../constants/FlightConstants';

function flightGrid (state = 
  {
    flights: [], 
    selectedFlightId: undefined,
    loading: false
  }, action) {
  switch(action.type) {
    case FlightConstants.FLIGHT_SELECT: {
      return {
        flights: [...state.flights],
        selectedFlightId: action.flightId,
        loading: false
      }
    }

    case FlightConstants.PERIOD_CHANGED: {
      return {
        flights: [...state.flights],
        selectedFlightId: state.selectedFlightId,
        loading: true
      }
    }

    case FlightConstants.FLIGHTS_LOADED: {
      return {
        flights: action.flights,
        selectedFlightId: state.selectedFlightId,
        loading: false
      }
    }

    default: {
      return state;
    }
  }
}

export default flightGrid;