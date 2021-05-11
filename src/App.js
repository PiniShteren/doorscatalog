import React, { useEffect, useState } from 'react';
import "./App.css";
import axios from "axios";
import { Switch, Route } from 'react-router-dom';
import { insert } from "./redux/actions";
import { connect } from 'react-redux';

import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Product from './Components/Product/Product';
import Category from './Components/Category/Category';
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contect from "./Components/Contect/Contect";

const mapStateToProps = (state) => ({
  categories: state.doors.categories
});
const mapDispatchToProps = (dispatch) => {
  return {
    addData: item => dispatch(insert(item))
  }
}
function App(props) {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    axios.get('http://127.0.0.1:3001/doors')
      .then(({ data }) => {
        console.log(data);
        props.addData(data);
      })
  }, [flag])
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={() => {
          return <Home />
        }} />
        {props.categories ? props.categories.map((e, i) => {
          return <Route key={i} exact path={`/${e}`} component={() => {
            return <Category category={e} />
          }} />
        }) : ""}
        <Route exact path="/product" component={() => {
          return <Product />
        }} />
        <Route exact path="/about" component={() => {
          return <About />
        }} />
        <Route exact path="/contect" component={() => {
          return <Contect />
        }} />
      </Switch>
      <Footer />
    </div>
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);