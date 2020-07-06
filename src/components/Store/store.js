import {createStore,combineReducers} from 'redux';
import featureReducer from './feature-reducer';
import featureProducts from './Products-top/featureProducts-reducer';
import bestSellers from './Products-top/bestSellers-reducer';
import newArrival from './Products-top/newArrival-reducer';


let reducers = combineReducers({
    feature:featureReducer,
    featureProd:featureProducts,
    bestSellers:bestSellers,
    newArrival:newArrival
});

let store=createStore(reducers);

window.store = store;

export default store;