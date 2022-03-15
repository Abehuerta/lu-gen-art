import React, { useContext, useEffect, useState } from "react";
import droplets from "../../p5/droplets";
import cityscape from "../../p5/cityscape";
import feather from "../../p5/feather";
import thread from "../../p5/thread";
import cornMazeSetup from "../../p5/cornMaze";
import SketchOptions from "./SketchOptions";
import Colors from "./Colors";
import { Link } from "react-router-dom";
import { CanvasContext } from "../../canvasContext";

const Generate = () => {
  const [canvas, setCanvas] = useState(null);
  const [sketch, setSketch] = useState("cornMaze");
  const [flash, setFlash] = useState(true);
  const [colorTheme, setColorTheme] = useState("mono");
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
        setCanvas(new window.p5(droplets, "sketchContainer"));
        break;
      case "cityscape":
        setCanvas(new window.p5(cityscape, "sketchContainer"));
        break;
      case "feather":
        setCanvas(new window.p5(feather, "sketchContainer"));
        break;
      case "thread":
        setCanvas(new window.p5(thread, "sketchContainer"));
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
        <form>
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
          <label className='prompt'>Choose a color theme:</label>
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
                <button onClick={handlePublish}>Finish</button>
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
