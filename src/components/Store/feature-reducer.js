/////-----------IMAGES--------/////
import sportShoes from '../../assets/feature/sportshoes.jpg';
import sportGloves from '../../assets/feature/sportgloves.jpg';
import sportwatch from '../../assets/feature/sportwatch.jpg';

//////////////////////////////////


let initialState={
    products:[
        {
            id:1,
            name:'Sport Shoes',
            deals:'Best Deals In',
            img:`${sportShoes}`,
        },
        {
            id:2,
            name:'Sport Watch',
            deals:'Limited Offer In',
            img:`${sportwatch}`,
        },
        {
            id:3,
            name:'Sport Gloves',
            deals:'Newest Arrivals',
            img:`${sportGloves}`,
        },
    ]
}

const featreReducer=(state=initialState,action)=>{
    switch(action.type){
        default:
        return state
    }
}


export default featreReducer;