import React from "react";

const ArtPiece = (props) => {
  return (
    <div>
      <img
        alt={props.name}
        src={props.src}
        style={{ width: "300px", height: "300px" }}
      />
      <p>{props.name}</p>
      <p>{props.artist}</p>
    </div>
  );
};

export default ArtPiece;
