import React from "react";
import FeatureImg from "./Feature-img";
import FeatureName from "./Feature-name";
import { NavLink } from "react-router-dom";

const Feature = (props) => {
  let img = props.products.map((p, i) => (<FeatureImg img={p.img}  key={i} />));
  let name = props.products.map((p,i)=> <FeatureName name={p.name} key={i}/>);

  return (
    <section className="feature__wrapp">
      <div className="feature__wrapp-item">
        <div className="item-text">
          <p>
            Best <span>Deals</span> In
          </p>
          {name[0]}
          <NavLink to="/shoes">Shop now</NavLink>
        </div>
        <div className="item-image">
            {img[0]}
        </div>
      </div>
      <div className="feature__wrapp-item">
      <div className="item-text">
          <p>
            Limited <span>Offers</span> In
          </p>
          {name[1]}
          <NavLink to="/watch">Shop now</NavLink>
        </div>
        <div className="item-image">
            {img[1]}
        </div>
      </div>
      <div className="feature__wrapp-item">
      <div className="item-text">
          <p>
            New <span>Arrivals</span>
          </p>
          {name[2]}
          <NavLink to="/gloves">Shop now</NavLink>
        </div>
        <div className="item-image">
            {img[2]}
        </div>
      </div>
    </section>
  );
};

export default Feature;
