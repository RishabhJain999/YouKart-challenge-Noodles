import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { connect } from "react-redux";
import { fetchBrandDetails } from "../../actions";
import NoodlesCard from "../../components/NoodlesCard/NoodlesCard";

const Home = (props) => {
  const { fetchBrandDetails, noodles } = props;

  useEffect(() => {
    fetchBrandDetails();
  }, []);

  const uniqueNoodles = [...new Set(noodles.map((item) => item.Country))];
  return (
    <>
      <NavBar />
      <NoodlesCard allNoodles={noodles} uniqueNoodles={uniqueNoodles} />
    </>
  );
};
const mapStateToProps = (state) => {
  return { noodles: state.allBrands };
};

export default connect(mapStateToProps, { fetchBrandDetails })(Home);
