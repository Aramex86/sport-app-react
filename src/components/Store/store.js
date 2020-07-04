import {createStore,combineReducers} from 'redux';
import featureReducer from './feature-reducer';
import featureProducts from './Products-top/featureProducts-reducer';
import bestSellers from './Products-top/bestSellers-reducer';


let reducers = combineReducers({
    feature:featureReducer,
    featureProd:featureProducts,
    BestSellers:bestSellers
});

let store=createStore(reducers);

window.store = store;

export default store;