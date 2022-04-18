import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { displayAllBrandsInCountry } from "../../../src/actions";

import "./NoodlesCard.css";

const NoodlesCard = (props) => {
  const { allNoodles, uniqueNoodles, displayAllBrandsInCountry } = props;
  const navigate = useNavigate();

  const handleCardClick = (noodle) => {
    const filteredValue = allNoodles.filter((item) => {
      return item.Country === noodle;
    });
    displayAllBrandsInCountry(filteredValue);
    navigate(`/${noodle}`);
  };
  return (
    <div className="row">
      {uniqueNoodles.map((noodle, id) => {
        return (
          <div key={id} className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5
                  className="card-title"
                  onClick={() => handleCardClick(noodle)}
                >
                  {noodle}
                </h5>

                <button className="btn btn-primary">
                  View Details about
                  <span style={{ fontWeight: "600" }}>{noodle}</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default connect(null, { displayAllBrandsInCountry })(NoodlesCard);
