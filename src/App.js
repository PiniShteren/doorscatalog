import React from 'react';
import "./App.css";

import { Switch, Route } from 'react-router-dom';

import { useSelector } from 'react-redux'

import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Product from './Components/Product/Product';
import Category from './Components/Category/Category';
export default function App() {
  const categories = useSelector(state => state.categories);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={() => {
          return <Home />
        }} />
        {categories.map((e, i) => {
          return <Route key={i} exact path={`/${e}`} component={() => {
            return <Category category={e} />
          }} />
        })}
        <Route exact path="/product" component={() => {
          return <Product />
        }} />
      </Switch>

    </div>
  )
}
