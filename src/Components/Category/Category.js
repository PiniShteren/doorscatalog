import React, { useState, useEffect } from 'react';
import "./category.css";
import { connect } from 'react-redux';
import Like from "../../images/icons/like.svg";

const mapStateToProps = (state) => ({
      doors: state.doors.doors
});
function Category(props) {
      const [doors, setDoors] = useState([]);
      const [flag, setFlag] = useState(false);
      useEffect(() => {
            setDoors(props.doors.filter(e => e.category == props.category))
      }, [flag])
      return (
            <div className="categories">
                  {doors.map((e, i) => {
                        var img;
                        var div = " ";
                        img = require(`../../images/imgdoors/${e.image}.jpg`).default;
                        div = <div className="img" style={{ backgroundImage: `url(${img})` }} />;
                        return (
                              <div className="product" key={i}>
                                    <div>
                                          {div}
                                          <button id="like" onClick={() => {
                                                // like(e.id);
                                                setFlag(!flag);
                                          }}> <img src={Like} alt="like" width="20em" /> {e.likes ? e.likes : 0}</button>
                                    </div>
                                    <div className="details">
                                          <h1>{e.category} - {e.name}</h1>
                                          <p>{e.description}</p>
                                    </div>
                              </div>
                        )
                  })}
            </div>
      )
}
export default connect(
      mapStateToProps,
      null
)(Category)