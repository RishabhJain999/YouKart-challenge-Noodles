import React from "react";
import { connect } from "react-redux";
import { fetchImage } from "../../actions";
import Images from "../../components/Images/Images";

const Brands = (props) => {
  const { showBrands } = props;
  return (
    <div className="row">
      <h3> All Brands in the Country </h3>
      {showBrands.map(({ Brand, Country }, id) => {
        return (
          <div key={id} className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{Brand}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { showBrands: state.allBrandsInCountry };
};

export default connect(mapStateToProps, { fetchImage })(Brands);
