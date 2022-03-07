import React from "react";

const Generate = () => {
  function generateArt(event) {
    event.preventDefault();
  }

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
        <form onSubmit={generateArt}>
          <label className='prompt'>Choose a subject matter:</label>
          <div>
            <label className='subject-control'>
              <input id='number' type='radio' name='subject' />
              Corn Maze
            </label>
            <label className='subject-control'>
              <input id='number' type='radio' name='subject' />
              City Lights
            </label>
            <label className='subject-control'>
              <input id='number' type='radio' name='subject' />
              Droplets on Window
            </label>
            <label className='subject-control'>
              <input id='number' type='radio' name='subject' />
              Pile of Feathers
            </label>
            <label className='subject-control'>
              <input id='number' type='radio' name='subject' />
              Snagged Thread
            </label>
          </div>
          <br />
          <label className='prompt'>Flash on or off:</label>
          <br />
          <label className='switch'>
            <input id='number' type='checkbox' />
            <span className='toggler'></span>
          </label>
          <br />
          <label className='prompt'>Choose a color theme:</label>
          <br />
          <div>
            <label className='subject-control'>
              <input id='number' type='radio' name='Color Theme' />
              Monochromatic
            </label>
            <label className='subject-control'>
              <input id='number' type='radio' name='Color Theme' />
              Pastel
            </label>
            <label className='subject-control'>
              <input id='number' type='radio' name='Color Theme' />
              Vibrant
            </label>
            <label className='subject-control'>
              <input id='number' type='radio' name='Color Theme' />
              Rainbow
            </label>
            <label className='subject-control'>
              <input id='number' type='radio' name='Color Theme' />
              Black and white
            </label>
          </div>
          <br />
          <label className='prompt'>adjust saturation</label>
          <br />
          <div className='sliderContainer'>
            <input
              type='range'
              min='1'
              max='100'
              defaultValue='0'
              id='number'
              step='1'
              className='slider'
            />
          </div>
        </form>
        <div
          style={{
            alignSelf: "center",
          }}>
          <div
            id='test'
            style={{
              width: "400px",
              height: "400px",
              backgroundColor: "whitesmoke",
            }}
          />
          <div style={{ width: "100%", textAlign: "center", marginTop: "1em" }}>
            <button>Generate</button>
          </div>
        </div>
      </div>
      <div
        className='footer'
        style={{
          marginTop: "5em",
          height: "15em",
          backgroundColor: "#151718",
        }}></div>
    </>
  );
};

export default Generate;
