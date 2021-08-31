import React,{ useState } from 'react';
import "./navbar.css";
import { connect } from 'react-redux';
import { changeCategory } from '../../redux/actions';

const mapStateToProps = (state) => {
      return {...state, categories: state.doors.categories || []}
}
const mapPropsToStata = (dispatch) => ({
      changeCategory: (item) => dispatch(changeCategory(item))
})

function Navbar(props) {
      const [active, setcActive] = useState();
      return (
            <div className="navbar">
                  <p id="nav-item-head">קטגוריות</p>
                  {props.categories.map((e, i) => {
                        if(i === active) {
                              return (
                                    <p key={i} id="nav-item-active">{e}</p>
                              )
                        }else{
                              return (
                              <p key={i} id="nav-item" onClick={()=>{
                                      props.changeCategory(e); setcActive(i)
                              }}>{e}</p>
                        )
                        }
                  })}
            </div>
      )
}
export default connect(
      mapStateToProps,
      mapPropsToStata
)(Navbar);