import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Lucie's Generative Art Project</h1>
      <h3>Project Description:</h3>
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
      <span>
        <Link to='/generate'>
          <button type='button'>Generate</button>
        </Link>
        <Link to='/gallery'>
          <button type='button'>Gallery</button>
        </Link>
      </span>
    </>
  );
};

export default Home;
