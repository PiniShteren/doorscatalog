import React from 'react';
import "./navbar.css";
import { connect } from 'react-redux';
import { changeCategory, changeFlagMenu } from '../../redux/actions';

const mapStatetoProps = (state) => {
      return {...state, flagMenu: state.flagMenu.flagMenu, categories: state.doors.categories}
}
const mapPropsToState = (dispatch) => ({
      changeFlagMenu: () => dispatch(changeFlagMenu()),
      changeCategory: (item) => dispatch(changeCategory(item))
})
function NavbarPhone(props) {
      return (
            <div className="navbar-phone" style={{display: props.flagMenu ? "" : "none"}}>
                  {props.categories.length > 0 ? props.categories.map((e, i) => {
                        return (
                              <div onClick={() => {props.changeFlagMenu(); props.changeCategory(e)}} key={i} className="navbar-phone-item">
                                   <p id="navbar-phone-item">{e} </p>
                              </div>
                             
                        )
                  }): null}
            </div>
      )
}
export default connect(
      mapStatetoProps,
      mapPropsToState
)(NavbarPhone);