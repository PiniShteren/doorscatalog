import React, {useState, useEffect} from 'react';
import "./App.css";
import axios from 'axios';
import { connect } from 'react-redux';
import {insert} from './redux/actions'

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import Product from './components/Product/Product';
import NavbarPhone from './components/Navbar/NavbarPhone';

const mapStateToProps = (state) => {
      return {...state,
                 flag: state.product.flag
      }
}
const mapPropsToState = (dispatch) => ({
      insert: (item) => dispatch(insert(item))
})
function App(props) {
      const width = window.innerWidth;
      const [flag, setFlag] = useState(false);
      useEffect(()=>{
            
            axios.get('https://pinidoorscatalog.herokuapp.com/doors')
            .then(({data}) => props.insert(data))
      },[]);
      return (
            <div className="App">
                  <Header/>
                  <div className="body">
                       <Navbar/>
                       <NavbarPhone/>
                       <Home/>     
                  </div>
                  {props.flag ? <Product/> : ''}
                  {!props.flag ? <button id="contect">יצירת קשר</button>: null}
            </div>
      )
}
export default connect(
      mapStateToProps,
      mapPropsToState
)(App);