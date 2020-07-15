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

const RATE_ITEM = "RATE_ITEM";

let initialState={
    products:[
        {
            id:1,
            name:'Baseball Boots',
            deals:'Best Deals In',
            img:`${boots}`,
            discount:20,
            price:29.99,
            rating:0,
        },
        {
            id:2,
            name:'Baseball Gloves',
            deals:'Limited Offer In',
            img:`${gloves}`,
            discount:20,
            price:29.99,
            rating:0,
        },
        {
            id:3,
            name:'Helmet',
            deals:'Newest Arrivals',
            img:`${helmet}`,
            discount:20,
            price:29.99,
            rating:0,
        },
        {
            id:4,
            name:'Nikebag',
            deals:'Newest Arrivals',
            img:`${nikebag}`,
            price:29.99,
            rating:0,
        },
        {
            id:5,
            name:'Nikehat',
            deals:'Newest Arrivals',
            img:`${nikehat}`,
            discount:20,
            price:29.99,
            rating:0,
        },
        {
            id:6,
            name:'Backpack',
            deals:'Newest Arrivals',
            img:`${ruksak}`,
            discount:20,
            price:29.99,
            rating:0,
        },
        {
            id:7,
            name:'Fotball Shields',
            deals:'Newest Arrivals',
            img:`${shitki}`,
            discount:20,
            price:29.99,
            rating:0,
        },
        {
            id:8,
            name:'jump Rope',
            deals:'Newest Arrivals',
            img:`${skakalka}`,
            discount:20,
            price:29.99,
            rating:0,
        },
        {
            id:9,
            name:'Sport Socks',
            deals:'Newest Arrivals',
            img:`${socks}`,
            price:29.99,
            rating:0,
        },
        {
            id:10,
            name:'Sportbag',
            deals:'Newest Arrivals',
            img:`${sportbag}`,
            price:29.99,
            rating:0,
        },
        {
            id:11,
            name:'Sport Gloves',
            deals:'Newest Arrivals',
            img:`${sportgloves}`,
            price:29.99,
            rating:0,
        },
        {
            id:12,
            name:'Sneakers',
            deals:'Newest Arrivals',
            img:`${sportshoes}`,
            price:29.99,
            rating:0,
        },
        // {
        //     id:13,
        //     name:'Athletic Shorts',
        //     deals:'Newest Arrivals',
        //     img:`${sportshots}`,
        //     price:29.99
        // },
        // {
        //     id:14,
        //     name:'Smart Sport Watch',
        //     deals:'Newest Arrivals',
        //     img:`${sportsmart}`,
        //     discount:10,
        //     price:29.99
        // },
        // {
        //     id:15,
        //     name:'Sport Tshirt',
        //     deals:'Newest Arrivals',
        //     img:`${sporttshirt}`,
        //     price:29.99
        // },
        // {
        //     id:16,
        //     name:'Sport Watch',
        //     deals:'Newest Arrivals',
        //     img:`${sportwatch1}`,
        //     discount:20,
        //     price:29.99
        // },
        // {
        //     id:17,
        //     name:'taybox',
        //     deals:'Newest Arrivals',
        //     img:`${taybox}`,
        //     discount:15,
        //     price:29.99
        // },
    ],
    

}


const featureProducts=(state=initialState,action)=>{
    switch(action.type){
        case RATE_ITEM :
            return{
                ...state,
                rating:state.products.rating +1

            }
        default:
            return state;
    }
}

export const setRating=(rating)=>{
    return{type: RATE_ITEM,rating}
}

export default featureProducts;
