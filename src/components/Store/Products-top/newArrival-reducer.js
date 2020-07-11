//-----images-----//
import boots from "../../../assets/products//baseball-boots.png";
import gloves from "../../../assets/products/baseball-gloves.png";
import helmet from "../../../assets/products/helmet.png";
import nikebag from "../../../assets/products/nikebag.png";
import nikehat from "../../../assets/products/nikehat.png";
import ruksak from "../../../assets/products/ruksak.png";
import socks from "../../../assets/products/socks.png";
import shitki from "../../../assets/products/shitki.png";
import skakalka from "../../../assets/products/skakalka.png";
import sportbag from "../../../assets/products/sportbag.png";
import sportgloves from "../../../assets/products/sportgloves.png";
import sportshoes from "../../../assets/products/sportshoes.png";
import sportshots from "../../../assets/products/sportshots.png";
import sportsmart from "../../../assets/products/sportsmart.png";
import sporttshirt from "../../../assets/products/sportt-shirt.png";
import sportwatch1 from "../../../assets/products/sportwatch1.png";
import taybox from "../../../assets/products/taybox.png";

////////////////////////

let initialState = {
  products2: [
    {
      id: 1,
      name: "Nikehat",
      deals: "Newest Arrivals",
      img: `${nikehat}`,
      discount: 20,
      price: 29.99,
    },
    {
      id: 2,
      name: "Backpack",
      deals: "Newest Arrivals",
      img: `${ruksak}`,
      discount: 20,
      price: 29.99,
    },
    {
      id: 3,
      name: "Fotball Shields",
      deals: "Newest Arrivals",
      img: `${shitki}`,
      discount: 20,
      price: 29.99,
    },
    {
      id: 4,
      name: "Baseball Gloves",
      deals: "Limited Offer In",
      img: `${gloves}`,
      discount: 20,
      price: 29.99,
    },
    {
      id: 5,
      name: "Baseball Boots",
      deals: "Best Deals In",
      img: `${boots}`,
      discount: 20,
      price: 29.99,
    },
    {
      id: 6,
      name: "Helmet",
      deals: "Newest Arrivals",
      img: `${helmet}`,
      discount: 20,
      price: 29.99,
    },
    {
      id: 7,
      name: "Nikebag",
      deals: "Newest Arrivals",
      img: `${nikebag}`,
      price: 29.99,
    },
    {
      id: 8,
      name: "Nikehat",
      deals: "Newest Arrivals",
      img: `${nikehat}`,
      discount: 20,
      price: 29.99,
    },
    {
      id: 9,
      name: "Backpack",
      deals: "Newest Arrivals",
      img: `${ruksak}`,
      discount: 20,
      price: 29.99,
    },
    {
      id: 10,
      name: "Fotball Shields",
      deals: "Newest Arrivals",
      img: `${shitki}`,
      discount: 20,
      price: 29.99,
    },
    {
      id: 11,
      name: "jump Rope",
      deals: "Newest Arrivals",
      img: `${skakalka}`,
      discount: 20,
      price: 29.99,
    },
    {
      id: 12,
      name: "Sport Socks",
      deals: "Newest Arrivals",
      img: `${socks}`,
      price: 29.99,
    },
    {
      id: 13,
      name: "Sportbag",
      deals: "Newest Arrivals",
      img: `${sportbag}`,
      price: 29.99,
    },
    {
      id: 14,
      name: "Sport Gloves",
      deals: "Newest Arrivals",
      img: `${sportgloves}`,
      price: 29.99,
    },
    {
      id: 15,
      name: "taybox",
      deals: "Newest Arrivals",
      img: `${taybox}`,
      discount: 15,
      price: 29.99,
    },
    {
      id: 16,
      name: "Sneakers",
      deals: "Newest Arrivals",
      img: `${sportshoes}`,
      price: 29.99,
    },
    {
      id: 17,
      name: "Athletic Shorts",
      deals: "Newest Arrivals",
      img: `${sportshots}`,
      price: 29.99,
    },
  ],
};

const newArrival = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default newArrival;
