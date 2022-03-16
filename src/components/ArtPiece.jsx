import React from "react";

const ArtPiece = (props) => {
  return (
    <div className='piece-container'>
      <img alt={props.name} src={props.src} className='art-piece' />
      <p className='piece-name'>{props.name}</p>
      <p className='piece-artist'>{props.artist}</p>
    </div>
  );
};

export default ArtPiece;
