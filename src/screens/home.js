import React from "react";
import { Routes, Route } from "react-router-dom";
import Library from "./library";
import Feed from "./feed";
import Player from "./player";
import Trending from "./trending";
import Favorite from "./favorites";

function Home() {
  return (
    <Routes>
      <Route path="/" element={<Library />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/player" element={<Player />} />
      <Route path="/favorites" element={<Favorite />} />
      <Route path="/" element={<Library />} />
    </Routes>
  );
}
export default Home;
