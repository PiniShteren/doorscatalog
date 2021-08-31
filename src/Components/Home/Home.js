import React, { useEffect, useState } from "react";
import "./home.css";
import { connect } from "react-redux";
import HomeFooter from "../Home-Footer/HomeFooter";
import { chnageFlag, productShow } from "../../redux/actions";
const mapStateToProps = (state) => {
	return {
		...state,
		category: state.category.category,
		doors: state.doors.doors,
		categories: state.doors.categories,
	};
};

const mapPropsToState = (dispatch) => ({
      product: (item) => dispatch(productShow(item)),
      changeFlag: () => dispatch(chnageFlag())
})

function Home(props) {
	const [doorsToPrint, setDoorsToPrint] = useState(props.doors || []);
      const width = window.innerWidth;
	const cutDescription = (des) => {
		let description = "";
		let count = 0;
		for (let i = 0; i < des.length; i++) {
			if (des.charAt(i) === " ") {
				count++;
			}
			if (count === 11) {
				description = des.slice(0, i);
				break;
			} else if (i === des.length - 1) {
				description = des;
			}
		}
		return <p id="des">{description}...</p>;
	};
	useEffect(() => {
		setDoorsToPrint(props.doors);
	}, [props.doors]);
	useEffect(() => {
		console.log("filter");
		if (props.category) {
			let doors = props.doors.filter((e) => e.category == props.category);
			setDoorsToPrint(doors);
		}
	}, [props.category]);
	return (
		<div className="home">
			<div className="doors">
				{doorsToPrint.length > 0
					? doorsToPrint.map((e, i) => {
							return (
								<div key={i} id="door-item" onClick={() => {props.product(e); props.changeFlag()} }>
									<h2 id="name-phone">{e.name}</h2>
									<div
										id="img"
										style={{
											backgroundImage: `url(/imgdoors/${e.image}.jpg)`,
										}}
									/>
									<div id="details-item">
										{cutDescription(e.description)}
									</div>
								</div>
							);
					  })
					: null}
			</div>
                  <div>
                        <HomeFooter cutDescription={cutDescription}/>
                  </div>
		</div>
	);
}
export default connect(mapStateToProps, mapPropsToState)(Home);
