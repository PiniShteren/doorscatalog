import React, { useEffect, useState } from 'react';
import "./home.css";
import { insert } from '../../redux/actions';
import { connect } from 'react-redux';
import Like from "../../images/icons/like.svg";
import axios from 'axios';

const mapStateToProps = (state) => ({
      doors: state.doors.doors
});
const mapDispatchToProps = (dispatch) => {
      return {
            addData: item => dispatch(insert(item))
      }
}
function Home(props) {
      const like = (id) => {
            console.log('y');
            axios.post('http://localhost:3001/like', {
                  id: id
            }).then((res) => {
                  console.log(res);
            }).catch((err) => {
                  console.log(err);
            })
      }

      return (
            <div className="home">
                  {props.doors ? props.doors.map((e, i) => {
                        var img;
                        var div = " ";
                        img = require(`../../images/imgdoors/${e.image}.jpg`).default;
                        div = <div className="img" style={{ backgroundImage: `url(${img})` }} />;
                        return (
                              <div className="product" key={i}>
                                    <div>
                                          {div}
                                          <button id="like" onClick={() => {
                                                like(e.id);
                                          }}> <img src={Like} alt="like" width="20em" /> {e.likes ? e.likes : 0}</button>
                                    </div>
                                    <div className="details">
                                          <h1>{e.category} - {e.name}</h1>
                                          <p>{e.description}</p>
                                    </div>
                              </div>
                        )
                  }) : ""}
            </div>
      )
}
export default connect(
      mapStateToProps,
      mapDispatchToProps
)(Home);