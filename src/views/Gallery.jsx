import React, { useEffect, useState } from "react";
import ArtPiece from "../components/ArtPiece";
import { supabase } from "../supbaseClient";

const Gallery = () => {
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    async function fetchGallery() {
      const response = await supabase.from("gallery").select("*");
      setGallery(response.data);
    }
    fetchGallery();
  }, [setGallery]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Gallery</h1>
      <div className='gallery'>
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
