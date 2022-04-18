import React, { Suspense, useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchImage } from "../../actions";

const Images = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    console.log(fetchImage());
    setImage(fetchImage());
  }, []);

  const renderedImage = () => {
    setTimeout(() => {
      <img src={image[randomImage(7)]} class="card-img-top" alt=""></img>;
    }, 5000);
  };
  const randomImage = (length) => {
    return Math.floor(Math.random() * length);
  };
  return { renderedImage };
};

export default connect(null, { fetchImage })(Images);
