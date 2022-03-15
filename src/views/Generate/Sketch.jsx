import React, { useState } from "react";

const Sketch = (props) => {
  const { progress, canvas } = useState(props.sketch);

  return (
    <div
      id='sketchContainer'
      style={{
        width: "400px",
        height: "400px",
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "whitesmoke",
      }}></div>
  );
};

export default Sketch;
