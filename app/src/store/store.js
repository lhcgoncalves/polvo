import { createStore } from 'redux';
import reducers from './reducers';

// Create Redux Store
const store = createStore(reducers);

export default store;
