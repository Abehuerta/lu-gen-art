import React from "react";

const Generate = () => {
  function generateArt(event) {
    event.preventDefault();
  }

  return (
    <>
      <h1>Generate</h1>
      <div
        id='test'
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "whitesmoke",
        }}
      />
      <form onSubmit={generateArt}>
        <label htmlFor='number'>Enter a number 1-10:</label>
        <br />
        <input id='number' type='text' />
        <br />
        <label htmlFor='number'>Pick a color:</label>
        <br />
        <input id='number' type='text' />
        <br />
        <label htmlFor='number'>Enter:</label>
        <br />
        <input id='number' type='text' />
        <br />
        <label htmlFor='number'>Enter a number 1-10:</label>
        <br />
        <input id='number' type='text' />
      </form>
    </>
  );
};

export default Generate;
