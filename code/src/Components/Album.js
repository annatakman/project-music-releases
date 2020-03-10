import React from "react";
import { Artist } from "./Artist";
import { Icons } from "./Icons";
import "./album.css";

export const Album = props => {
  return (
    <article className="albumCard" key={props.item.id}>
      <div className="imageContainer">
        <img
          className="albumImage"
          src={props.item.images[0].url}
          alt="Album cover"
        />
        <Icons />
      </div>
      <a
        className="albumTitle"
        href={props.item.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.item.name}
      </a>
      <div className="artistContainer">
        {props.item.artists.map(artist => {
          return <Artist key={artist.id} item={artist} />;
        })}
      </div>
    </article>
  );
};
