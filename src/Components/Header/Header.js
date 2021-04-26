import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';

import { useSelector } from 'react-redux';

export default function Header() {
      const categories = useSelector(state => state.categories);

      return (
            <div className="header">
                  <div className="top">
                        <h1>פיני</h1>
                        <h4>דלתות מעוצבות & מנעולים</h4>
                        <p>בעל ניסיון של 25 שנים</p>
                  </div>
                  <div className="nav">
                        <NavLink activeClassName="active-item" exact className="nav-item" to="/doors">קטלוג</NavLink>
                        <NavLink activeClassName="active-item" className="nav-item" to="/about">אודותינו</NavLink>
                        <NavLink activeClassName="active-item" className="nav-item" to="/contect">צור קשר</NavLink>
                  </div>
                  <div className="navigaition-category">
                        {categories.map((e, i) => {
                              return (
                                    <NavLink key={i} className="category" to={`/${e}`}>{e}</NavLink>
                              )
                        })}
                  </div>
            </div>
      )
}
