import React from 'react';
import './product.css';
import { connect } from 'react-redux';
import { chnageFlag } from '../../redux/actions';

const mapStateToProps = (state) => {
      return {...state, product: state.product.product}
}
const mapPropsToState = (dispatch) => ({
      changeFlag: () => dispatch(chnageFlag())
})
function Product(props) {
      return (
            <div className="product-container" onClick={() => props.changeFlag()}>
                  <div className="product">
                        <h1>{props.product.name}</h1>
                        <div id="img" style={{backgroundImage: `url(/imgdoors/${props.product.image}.jpg)`}} />
                        <div className="details">
                              <p id="description">{props.product.description}</p>
                        </div>
                  </div>
            </div>
      )
}
export default connect(
      mapStateToProps,
      mapPropsToState
)(Product);