import React, { useContext, useEffect, useState } from "react";
import cornMazeSetup from "../../p5/cornMaze";
import featherSetup from "../../p5/feather";
import dropletsSetup from "../../p5/droplets";
import SketchOptions from "./SketchOptions";
import Colors from "./Colors";
import { Link } from "react-router-dom";
import { CanvasContext } from "../../canvasContext";

const Generate = () => {
  const [canvas, setCanvas] = useState(null);
  const [sketch, setSketch] = useState("cornMaze");
  const [flash, setFlash] = useState(true);
  const [colorTheme, setColorTheme] = useState("pastel");
  const [isGenerated, setIsGenerated] = useState(false);
  const { setDataUrl } = useContext(CanvasContext);

  const handleFlashChange = (event) => {
    event.persist();
    setFlash(!flash);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (canvas) {
      canvas.remove();
    }

    switch (sketch) {
      case "cornMaze":
        const cornMaze = cornMazeSetup(flash, colorTheme);
        setCanvas(new window.p5(cornMaze, "sketchContainer"));
        break;
      case "droplets":
        const droplets = dropletsSetup(flash, colorTheme);
        setCanvas(new window.p5(droplets, "sketchContainer"));
        break;
      case "feather":
        const feather = featherSetup(flash, colorTheme);
        setCanvas(new window.p5(feather, "sketchContainer"));
        break;
      default:
        break;
    }
    setIsGenerated(true);
  };

  const handlePublish = () => {
    const canvasIMG = document.getElementById("defaultCanvas0");
    const url = canvasIMG.toDataURL();

    setDataUrl(url);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Generate</h1>
      <p style={{ width: "30em", textAlign: "center", margin: "auto" }}>
        There is a hidden camera inside this computer. Direct it to take a photo
        and edit the photo. After you make your selections, the computer will
        develop the photo for you!
      </p>
      <div
        style={{
          paddingTop: "50px",
          width: "66%",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          verticalAlign: "center",
        }}>
        <form
          style={{
            alignSelf: "center",
          }}>
          <label className='prompt'>Choose a subject matter:</label>
          <SketchOptions setSketch={setSketch} sketch={sketch} />
          <br />
          <label className='prompt'>Flash on or off:</label>
          <br />
          <label className='switch'>
            <input id='number' type='checkbox' onChange={handleFlashChange} />
            <span className='toggler'></span>
          </label>
          <br />
          <label className='prompt'>Choose a color filter:</label>
          <br />
          <Colors setColorTheme={setColorTheme} colorTheme={colorTheme} />
          <br />
        </form>
        <div
          style={{
            alignSelf: "center",
          }}>
          <div
            id='sketchContainer'
            style={{
              width: "400px",
              height: "400px",
              textAlign: "center",
              marginTop: "50px",
              backgroundColor: "whitesmoke",
            }}
          />
          {isGenerated ? (
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "1em" }}>
              <Link to={{ pathname: "/publish" }}>
                <button onClick={handlePublish}>Submit</button>
              </Link>
            </div>
          ) : (
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "1em" }}>
              <button onClick={handleSubmit}>Generate</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Generate;
