import FlightStore from './FlightStore';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore);

const rootReducer = createStoreWithMiddleware(combineReducers({
  FlightStore
}));

export default rootReducer;