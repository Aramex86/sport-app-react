import {createStore,combineReducers} from 'redux';
import featureReducer from './feature-reducer';
import featureProducts from './Products-top/featureProducts-reducer';


let reducers = combineReducers({
    feature:featureReducer,
    featureProd:featureProducts
});

let store=createStore(reducers);

window.store = store;

export default store;