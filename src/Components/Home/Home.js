import React, { useEffect, useState } from 'react';
import "./home.css";
import Axios from 'axios';
import { insert } from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import like from '../../database/index';
import Like from "../../images/icons/like.svg";

export default function Home() {
      const dispatch = useDispatch();
      const selector = useSelector(state => state.doors);
      const [flag, setFlag] = useState(false);

      useEffect(() => {
            Axios('http://localhost:3001/doors')
                  .then((res) => {
                        dispatch(insert(res.data));
                  });
      })
      return (
            <div className="home">
                  {selector.map((e, i) => {
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
