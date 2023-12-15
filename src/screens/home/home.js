import React from "react";
import { Routes, Route } from "react-router-dom";
import Library from "../library/library";
import Feed from "../feed/feed";
import Player from "../player/player";
import Trending from "../trending/trending";
import Favorite from "../favorites/favorites";
import "./home.css";
import { Sidebar } from "../../components/sidebar";

function Home() {
  return (
    <div className="main-body">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
  );
}
export default Home;
