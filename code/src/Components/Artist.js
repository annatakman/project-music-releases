import React from "react";
import "./artist.css";

export const Artist = props => {
  const { external_urls, name } = props.item;
  return (
    <a
      className="artistName"
      href={external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
};
