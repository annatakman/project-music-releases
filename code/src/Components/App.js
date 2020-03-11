import React from "react";
import data from "../data.json";
import stretchGoal from "../stretch-goal.json";
import { Album } from "./Album";
import { Heading } from "./Heading";
import { Playlist } from "./Playlist";
import "./app.css";

export const App = () => {
  return (
    <section className="siteContainer">
      <section>
        <Heading />
        <section className="albumContainer">
          {data.albums.items.map(album => {
            return <Album key={album.id} item={album} />;
          })}
        </section>
      </section>
      <section className="playlistContainer">
        <h3>Playlists</h3>
        <section>
          {stretchGoal.playlists.items.map(playlist => {
            return <Playlist key={playlist.id} item={playlist} />;
          })}
        </section>
      </section>
    </section>
  );
};
