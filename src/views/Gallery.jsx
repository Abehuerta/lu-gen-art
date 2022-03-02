import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ArtPiece from "../components/ArtPiece";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpaWR6dmp0aHJld2FrbGFpaXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYyMzU1NzIsImV4cCI6MTk2MTgxMTU3Mn0.F6zh64CIMJVk79HMwzyqwMuLzuOvzmQ7zGjvI5Cbqvc";

const SUPABASE_URL = "https://ciidzvjthrewaklaiiww.supabase.co";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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
      <h1>Gallery</h1>
      <p>Here are all the art pieces</p>
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
    </>
  );
};

export default Gallery;
