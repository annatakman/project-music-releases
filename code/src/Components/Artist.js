import React from "react";
import "./artist.css";

export const Artist = props => {
  return (
    <a
      className="artistName"
      href={props.item.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.item.name}
    </a>
  );
};
