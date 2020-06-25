import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import FeatureContainer from './components/Feature/Feature-top/FeatureContainer';
import ProductsContainer from './components/Products-top/ProductsContainer';

function App() {
  return (
  <div>
    <Header/>
    <FeatureContainer/>
    <ProductsContainer/>
  </div>
  )
  
}

export default App;
