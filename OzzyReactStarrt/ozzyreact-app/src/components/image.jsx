import React from "react";

const ImageBox = props => {
  return (
    <img
      src={props.src}
      alt={"Cannot load"}
      width="100%"
      object-fit="contain"
      className="card-img-top"
    />
  );
};

export default ImageBox;
