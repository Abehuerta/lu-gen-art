import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='homeContainer'>
      <h1 className='homeTitle'>Hidden Camera</h1>
      <h4 className='homeTitle'> The best camera you've never seen!</h4>
      <p>Project Description:</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Urna id volutpat
        lacus laoreet non curabitur gravida.{" "}
      </p>{" "}
      <p>
        Ut aliquam purus sit amet luctus venenatis. Consequat mauris nunc congue
        nisi vitae suscipit tellus mauris a. Dictum fusce ut placerat orci nulla
        pellentesque. Lorem ipsum dolor sit amet consectetur adipiscing elit.
        Scelerisque in dictum non consectetur a erat nam at. Quis auctor elit
        sed vulputate mi sit amet mauris. Volutpat odio facilisis mauris sit. Ut
        eu sem integer vitae. Pharetra diam sit amet nisl. Purus faucibus ornare
        suspendisse sed nisi.
      </p>
      <span className='homeButtonContainer'>
        <Link to='/generate'>
          <button type='button'>Generate</button>
        </Link>
        <Link to='/gallery'>
          <button type='button'>Gallery</button>
        </Link>
      </span>
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
