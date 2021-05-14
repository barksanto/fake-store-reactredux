import { createStore } from 'redux';
import reducers from './reducers/index';

// first argument are the reducers, second argument is the state
const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;