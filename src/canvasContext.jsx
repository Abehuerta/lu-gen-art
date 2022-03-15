import React, { createContext, useState } from "react";

export const CanvasContext = createContext(null);

export const CanvasProvider = (props) => {
  const [dataURL, setDataUrl] = useState("");
  const canvasValues = { dataURL, setDataUrl };
  return (
    <CanvasContext.Provider value={canvasValues}>
      {props.children}
    </CanvasContext.Provider>
  );
};
