//-----images-----//
import boots from '../../../assets/products//baseball-boots.png';
import gloves from '../../../assets/products/baseball-gloves.png';
import helmet from '../../../assets/products/helmet.png';
import nikebag from '../../../assets/products/nikebag.png';
import nikehat from '../../../assets/products/nikehat.png';
import ruksak from '../../../assets/products/ruksak.png';
import socks from '../../../assets/products/socks.png';
import shitki from '../../../assets/products/shitki.png';
import skakalka from '../../../assets/products/skakalka.png';
import sportbag from '../../../assets/products/sportbag.png';
import sportgloves from '../../../assets/products/sportgloves.png';
import sportshoes from '../../../assets/products/sportshoes.png';
import sportshots from '../../../assets/products/sportshots.png';
import sportsmart from '../../../assets/products/sportsmart.png';
import sporttshirt from '../../../assets/products/sportt-shirt.png';
import sportwatch1 from '../../../assets/products/sportwatch1.png';
import taybox from '../../../assets/products/taybox.png';

////////////////////////

let initialState={
    products:[
        {
            id:1,
            name:'baseball-boots',
            deals:'Best Deals In',
            img:`${boots}`,
            discount:20,
            price:30
        },
        {
            id:2,
            name:'baseball-gloves',
            deals:'Limited Offer In',
            img:`${gloves}`,
            discount:20,
            price:30
        },
        {
            id:3,
            name:'helmet',
            deals:'Newest Arrivals',
            img:`${helmet}`,
            discount:20,
            price:30
        },
        {
            id:4,
            name:'nikebag',
            deals:'Newest Arrivals',
            img:`${nikebag}`,
            price:30
        },
        {
            id:5,
            name:'nikehat',
            deals:'Newest Arrivals',
            img:`${nikehat}`,
            discount:20,
            price:30
        },
        {
            id:6,
            name:'ruksak',
            deals:'Newest Arrivals',
            img:`${ruksak}`,
            discount:20,
            price:30
        },
        {
            id:7,
            name:'shitki',
            deals:'Newest Arrivals',
            img:`${shitki}`,
            discount:20,
            price:30
        },
        {
            id:8,
            name:'skakalka',
            deals:'Newest Arrivals',
            img:`${skakalka}`,
            discount:20,
            price:30
        },
        {
            id:9,
            name:'socks',
            deals:'Newest Arrivals',
            img:`${socks}`,
            price:30
        },
        {
            id:10,
            name:'sportbag',
            deals:'Newest Arrivals',
            img:`${sportbag}`,
            price:30
        },
        {
            id:11,
            name:'sportgloves',
            deals:'Newest Arrivals',
            img:`${sportgloves}`,
            price:30
        },
        {
            id:12,
            name:'sportshoes',
            deals:'Newest Arrivals',
            img:`${sportshoes}`,
            price:30
        },
        {
            id:13,
            name:'sportshots',
            deals:'Newest Arrivals',
            img:`${sportshots}`,
            price:30
        },
        {
            id:14,
            name:'sportsmart',
            deals:'Newest Arrivals',
            img:`${sportsmart}`,
            price:30
        },
        {
            id:15,
            name:'sportt-shirt',
            deals:'Newest Arrivals',
            img:`${sporttshirt}`,
            price:30
        },
        {
            id:16,
            name:'sportwatch1',
            deals:'Newest Arrivals',
            img:`${sportwatch1}`,
            price:30
        },
        {
            id:17,
            name:'taybox',
            deals:'Newest Arrivals',
            img:`${taybox}`,
            price:30
        },
    ]
}


const featureProducts=(state=initialState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}



export default featureProducts;
