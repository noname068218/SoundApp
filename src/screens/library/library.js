import React, { useState, useEffect } from "react";
import APIKit from "../../spotify";
const Library = () => {
  const [playLists, setPlayLists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlayLists(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  return (
    <div className="screen-container">
      {playLists?.map((playlist) => {
        <div></div>;
      })}
    </div>
  );
};
export default Library;
