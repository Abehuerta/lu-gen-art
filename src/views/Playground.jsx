import React, { useState } from "react";
import cornMaze from "../p5/cornMaze";
import droplets from "../p5/droplets";
import cityscape from "../p5/cityscape";
import feather from "../p5/feather";

const Playground = () => {
  const [canvas, setCanvas] = useState(null);
  const [sketch, setSketch] = useState("cornMaze");

  const handleChange = (event) => {
    event.preventDefault();
    setSketch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (canvas) {
      canvas.remove();
    }

    switch (sketch) {
      case "cornMaze":
        setCanvas(new window.p5(cornMaze, "sketchContainer"));
        break;
      case "droplets":
        setCanvas(new window.p5(droplets, "sketchContainer"));
        break;
      case "cityscape":
        setCanvas(new window.p5(cityscape, "sketchContainer"));
        break;
      case "feather":
        setCanvas(new window.p5(feather, "sketchContainer"));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        id='sketchContainer'
        style={{
          width: "100%",
          height: "400px",
          textAlign: "center",
          marginTop: "50px",
        }}
      />

      <div style={{ width: "100%", textAlign: "center", marginTop: "75px" }}>
        <form onSubmit={handleSubmit}>
          <div className='select' style={{ textAlign: "center" }}>
            <select
              className='custom-select'
              value={sketch}
              onChange={handleChange}>
              <option value='cornMaze'>Corn Maze</option>
              <option value='droplets'>Droplets</option>
              <option value='cityscape'>Cityscape</option>
              <option value='feather'>Feather</option>
            </select>
          </div>
          <br />
          <input type='submit' className='submitButton' />
        </form>
      </div>
    </>
  );
};

export default Playground;
