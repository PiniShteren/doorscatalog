import React, { useState, useRef } from 'react';
import './header.css';
import {connect} from 'react-redux';

import menu from '../../images/icons/menu.svg';
import { changeFlagMenu } from '../../redux/actions';

const mapPropsToState = (dispatch) => ({
      changeFlagMenu: () => dispatch(changeFlagMenu())
})

function Header(props) {
      return (
            <div className="header" >
                <h1>פיני דלתות</h1>
                <div className="btn-menu" onClick={() => props.changeFlagMenu()}  style={{backgroundImage: `url(${menu})`}} />
            </div>
      )
}
export default connect(
   null,
   mapPropsToState
)(Header);