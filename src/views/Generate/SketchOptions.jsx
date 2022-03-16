import React from "react";

const SketchOptions = (props) => {
  const handleSketchChange = (event) => {
    event.persist();
    props.setSketch(event.target.value);
  };

  return (
    <div>
      <label className='subject-control'>
        <input
          id='number'
          type='radio'
          name='subject'
          value='cornMaze'
          onChange={handleSketchChange}
          checked={props.sketch === "cornMaze"}
        />
        Corn Maze
      </label>

      <label className='subject-control'>
        <input
          id='number'
          type='radio'
          name='subject'
          value='droplets'
          onChange={handleSketchChange}
          checked={props.sketch === "droplets"}
        />
        Droplets on Window
      </label>
      <label className='subject-control'>
        <input
          id='number'
          type='radio'
          name='subject'
          value='feather'
          onChange={handleSketchChange}
          checked={props.sketch === "feather"}
        />
        Pile of Feathers
      </label>
    </div>
  );
};

export default SketchOptions;
