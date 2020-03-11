import React from "react";
import "./playlist.css";

export const Playlist = props => {
  const { external_urls, name, images } = props.item;
  return (
    <a
      className="playlistCard"
      href={external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="playlistImage" src={images[0].url} alt="Playlist cover" />
      {name}
    </a>
  );
};
