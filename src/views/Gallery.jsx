import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ArtPiece from "../components/ArtPiece";

const API_KEY = process.env.REACT_APP_SUPABASE_KEY;
const SUPABASE_URL = "https://ciidzvjthrewaklaiiww.supabase.co";

const supabase = createClient(SUPABASE_URL, API_KEY);

const Gallery = () => {
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    async function fetchGallery() {
      const response = await supabase.from("gallery").select("*");
      console.log(response.data);
      setGallery(response.data);
      console.log(gallery[0].piece_name);
    }
    fetchGallery();
  }, [setGallery]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Gallery</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
          width: "66%",
          margin: "auto",
        }}>
        {gallery ? (
          gallery.map((piece) => (
            <ArtPiece
              key={piece.id}
              name={piece.piece_name}
              artist={piece.artist_name}
              src={piece.piece_url}
            />
          ))
        ) : (
          <div>No pieces to show</div>
        )}
      </div>
    </>
  );
};

export default Gallery;
