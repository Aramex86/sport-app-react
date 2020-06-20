import {createStore,combineReducers} from 'redux';
import featureReducer from './feature-reducer';


let reducers = combineReducers({
    feature:featureReducer
});

let store=createStore(reducers);

window.store = store;

export default store;