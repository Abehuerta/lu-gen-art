import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='homeContainer'>
      <h1 className='homeTitle'>Hidden Camera</h1>
      <h4 className='homeTitle'> The best camera you've never seen!</h4>
      <span className='homeButtonContainer'>
        <Link to='/generate'>
          <button type='button'>Generate</button>
        </Link>
        <Link to='/gallery'>
          <button type='button'>Gallery</button>
        </Link>
      </span>
      <h2 style={{ margin: "auto", textAlign: "center", marginTop: "5em" }}>
        Acknowledgements
      </h2>
      <div className='acknowledgements'>
        <p style={{ textAlign: "center" }}>
          Abraham Huerta - https://twitter.com/abe_huerta <br /> Stephen Alberts
          - http://stephenalberts.art/ <br /> The Coding Train -
          https://thecodingtrain.com/{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
