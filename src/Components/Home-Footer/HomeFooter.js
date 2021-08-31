import React, { useEffect, useState } from "react";
import "./homeFooter.css";
import { connect } from "react-redux";
import { chnageFlag, productShow } from "../../redux/actions";

const mapStateToProps = (state) => {
	return {
		...state,
		doors: state.doors.doors,
	};
};
const mapPropsToState = (dispatch) => ({
      product: (item) => dispatch(productShow(item)),
      changeFlag: () => dispatch(chnageFlag())
})
function HomeFooter(props) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (props.doors.length > 0) {
			let countDoors = props.doors.length;
			let count = 3;
			let items = [];
			for (let i = 0; i <= count; i++) {
				let flag = true;
				let num = Math.floor(Math.random() * countDoors);
				items.forEach((e) => {
					if (props.doors[num].name === e.name) {
						flag = false;
					}
				});
				if (flag) {
					items.push(props.doors[num]);
				} else {
					if(items.length < 3){
                                    countDoors++;
                              }
				}
			}
			setProducts(items);
		}
	}, [props.doors]);
	return <div className="home-footer">
            <div>
            <p>דגמים שאולי יעניינו אותך</p>
            </div>
            <div className="home-footer-child">
            {products.length > 0 ? products.map((e, i) => {
                  return (
                        <div key={i} id="product" onClick={() => {props.changeFlag(); props.product(e)}}>
                              <h2>{e.name}</h2>
                              <div id="img" style={{backgroundImage: `url(/imgdoors/${e.image}.jpg)`}}/>
                              <div className="details">
                                    {props.cutDescription(e.description)}
                              </div>
                        </div>
                  )
            }):null}
            </div>
           
      </div>;
}
export default connect(mapStateToProps, mapPropsToState)(HomeFooter);
