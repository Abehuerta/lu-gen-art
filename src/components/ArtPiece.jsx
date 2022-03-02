import React from "react";

const ArtPiece = (props) => {
  return (
    <>
      <img
        alt={props.name}
        src={props.src}
        style={{ width: "400px", height: "400px" }}
      />
      <p>{props.name}</p>
      <p>{props.artist}</p>
    </>
  );
};

export default ArtPiece;
