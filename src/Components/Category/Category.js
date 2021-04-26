import React, { useState } from 'react';
import "./category.css";
import { useSelector } from 'react-redux';

import like from '../../database/index';
import Like from "../../images/icons/like.svg";

export default function Category(props) {
      const category = props.category;
      const doorsArr = useSelector(state => state.doors.filter((e) => e.category === category));
      const [flag, setFlag] = useState(false);

      return (
            <div className="categories">
                  {doorsArr.map((e, i) => {
                        var img;
                        var div = " ";
                        img = require(`../../images/imgdoors/${e.image}.jpg`).default;
                        div = <div className="img" style={{ backgroundImage: `url(${img})` }} />;
                        return (
                              <div className="product" key={i}>
                                    <div className="details">
                                          <h1>{e.category} - {e.name}</h1>
                                          <p>{e.description}</p>
                                    </div>
                                    <div>
                                          {div}
                                          <button id="like" onClick={() => {
                                                like(e.id);
                                                setFlag(!flag);
                                          }}> <img src={Like} alt="like" width="20em" /> {e.likes ? e.likes : 0}</button>
                                    </div>
                              </div>
                        )
                  })}
            </div>
      )
}
