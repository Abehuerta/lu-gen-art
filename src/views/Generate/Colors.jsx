import React from "react";

const Colors = (props) => {
  const handleColorChange = (event) => {
    event.persist();
    props.setColorTheme(event.target.value);

    // switch (event.target.value) {
    //   case "mono":
    //     setColorTheme(lib.randomColors);
    //     break;
    //   case "pastel":
    //     setColorTheme(lib.pastelColors);
    //     break;
    //   case "vibrant":
    //     setColorTheme(lib.vibrantColors);
    //     break;
    //   case "rainbow":
    //     setColorTheme(lib.randomColors);
    //     break;
    //   case "baw":
    //     setColorTheme(lib.blackAndWhite);
    //     break;
    //   default:
    //     break;
  };

  return (
    <div>
      <label className='subject-control'>
        <input
          id='number'
          type='radio'
          name='Color Theme'
          value='mono'
          onChange={handleColorChange}
          checked={props.colorTheme === "mono"}
        />
        Monochromatic
      </label>
      <label className='subject-control'>
        <input
          id='number'
          type='radio'
          name='Color Theme'
          value='pastel'
          onChange={handleColorChange}
          checked={props.colorTheme === "pastel"}
        />
        Pastel
      </label>
      <label className='subject-control'>
        <input
          id='number'
          type='radio'
          name='Color Theme'
          value='vibrant'
          onChange={handleColorChange}
          checked={props.colorTheme === "vibrant"}
        />
        Vibrant
      </label>
      <label className='subject-control'>
        <input
          id='number'
          type='radio'
          name='Color Theme'
          value='rainbow'
          onChange={handleColorChange}
          checked={props.colorTheme === "rainbow"}
        />
        Rainbow
      </label>
      <label className='subject-control'>
        <input
          id='number'
          type='radio'
          name='Color Theme'
          value='baw'
          onChange={handleColorChange}
          checked={props.colorTheme === "baw"}
        />
        Black and white
      </label>
    </div>
  );
};

export default Colors;
