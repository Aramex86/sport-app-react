import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import FeatureContainer from './components/Feature/Feature-top/FeatureContainer';
//import ProductsContainer from './components/Products-top/ProductsContainer';
import ProductsContainerWithHooks from './components/Products-top/ProductsContainerWithHooks';
import Paralax from './components/Paralax/Paralax';

function App() {
  return (
  <div>
    <Header/>
    <FeatureContainer/>
    <ProductsContainerWithHooks/>
    <Paralax />
  </div>
  )
  
}

export default App;
