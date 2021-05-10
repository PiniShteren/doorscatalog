import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';
import { connect } from 'react-redux';

import menu from '../../images/icons/menu.svg';

const mapStateToProps = (state) => ({
      categories: state.doors.categories
})
function Header(props) {
      const [display, setDisplay] = useState(false)
      return (
            <div className="header">
                  <div className="top">
                        <h1>פיני</h1>
                        <h4>דלתות מעוצבות & מנעולים</h4>
                        <p>בעל ניסיון של 25 שנים</p>
                  </div>
                  <div className="nav">
                        <img style={{ color: 'black' }} src={menu} width="20em" alt="menu" onClick={() => {
                              setDisplay(!display);
                              console.log("dis");
                        }} />
                        <NavLink activeClassName="active-item" className="nav-item" to="/about" onClick={() => setDisplay(false)}>אודותינו</NavLink>
                        <NavLink activeClassName="active-item" className="nav-item" to="/contect" onClick={() => setDisplay(false)}>צור קשר</NavLink>
                  </div>
                  <div className="navigaition-category" style={{ display: display ? 'inline-flex' : "none" }} onClick={() => setDisplay(!display)}>
                        <Link className="category" to="/" onClick={() => { setDisplay(!display) }}>הכל</Link>
                        {props.categories ? props.categories.map((e, i) => {
                              return (
                                    <NavLink key={i} className="category" to={`/${e}`} onClick={() => { setDisplay(!display) }}>{e}</NavLink>
                              )
                        }) : ""}
                  </div>
            </div>
      )
}
export default connect(
      mapStateToProps,
      null
)(Header)