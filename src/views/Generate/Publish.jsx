import React, { useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { CanvasContext } from "../../canvasContext";
import { supabase } from "../../supbaseClient";
import { decode } from "base64-arraybuffer";
import { useNavigate } from "react-router-dom";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

const emptyPiece = {
  created_at: new Date(),
  piece_name: "",
  artist_name: "",
  piece_url: "",
};

const Publish = (props) => {
  const [piece, setPiece] = useState(emptyPiece);
  const [status, setStatus] = useState(STATUS.IDLE);
  const { dataURL } = useContext(CanvasContext);
  const navigate = useNavigate();

  //derived state
  const errors = getErrors(piece);
  const isValid = Object.keys(errors).length === 0;

  useEffect(() => {
    uploadImage();
  }, []);

  async function uploadImage() {
    try {
      const data = dataURL.replace("data:image/png;base64,", "");

      const fileURL = `${Math.floor(Math.random() * 1000000)}.png`;

      setURL(fileURL);
      const response = await supabase.storage
        .from("generated-pieces")
        .upload(fileURL, decode(data), {
          contentType: "image/png",
        });

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  function getErrors(piece) {
    const result = {};
    if (!piece.piece_name) result.name = "Piece name is required";
    if (!piece.artist_name) result.artist = "Artist name is required";
    return result;
  }

  function setURL(piece_url) {
    try {
      const { publicURL, error } = supabase.storage
        .from("generated-pieces")
        .getPublicUrl(piece_url);

      setPiece((currPiece) => {
        return { ...currPiece, piece_url: publicURL };
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (event) => {
    event.persist();

    setPiece((currPiece) => {
      return {
        ...currPiece,
        [event.target.id]: event.target.value,
      };
    });
  };

  const handleSubmit = async () => {
    setStatus(STATUS.SUBMITTING);
    console.log(piece);

    if (isValid) {
      try {
        const response = await supabase.from("gallery").insert(piece);
        console.log(response);
        navigate("/gallery");
      } catch (err) {
        console.log(err);
      }
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  };

  return (
    <div
      style={{
        marginTop: "3em",
        width: "100%",
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
      }}>
      <img
        src={dataURL}
        alt='canvas art'
        style={{
          margin: "auto",
          width: "400px",
          height: "400px",
          textAlign: "center",
          marginTop: "50px",
        }}
      />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "1.5em",
        }}>
        <label style={{ padding: "0.5em" }}>Give the piece a name:</label>
        {status === STATUS.SUBMITTED && errors.name ? (
          <input
            id='piece_name'
            type='text'
            style={{
              width: "20em",
              height: "2em",
              margin: "auto",
              backgroundColor: "black",
              border: "solid 1px red",
              color: "white",
            }}
            value={piece.piece_name}
            onChange={handleChange}
          />
        ) : (
          <input
            id='piece_name'
            type='text'
            style={{
              width: "20em",
              height: "2em",
              margin: "auto",
              backgroundColor: "black",
              border: "solid 1px white",
              color: "white",
            }}
            value={piece.piece_name}
            onChange={handleChange}
          />
        )}
        <span style={{ color: "red" }}>
          {status === STATUS.SUBMITTED && errors.name}
        </span>
        <label style={{ padding: "0.5em" }}>Enter your name:</label>
        {status === STATUS.SUBMITTED && errors.artist ? (
          <input
            id='artist_name'
            type='text'
            style={{
              width: "20em",
              height: "2em",
              margin: "auto",
              backgroundColor: "black",
              border: "solid 1px red",
              color: "white",
            }}
            value={piece.artist_name}
            onChange={handleChange}
          />
        ) : (
          <input
            id='artist_name'
            type='text'
            style={{
              width: "20em",
              height: "2em",
              margin: "auto",
              backgroundColor: "black",
              border: "solid 1px white",
              color: "white",
            }}
            value={piece.artist_name}
            onChange={handleChange}
          />
        )}
        <span style={{ color: "red" }}>
          {status === STATUS.SUBMITTED && errors.artist}
        </span>
      </form>
      <div style={{ marginTop: "1.5em" }}>
        <button
          style={{ width: "10em", margin: "auto" }}
          onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default Publish;
