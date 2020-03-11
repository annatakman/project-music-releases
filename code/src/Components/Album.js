import React from "react";
import { Artist } from "./Artist";
import { Icons } from "./Icons";
import "./album.css";

export const Album = props => {
  const { artists, name, external_urls, images, id } = props.item;
  return (
    <article className="albumCard" key={id}>
      <div className="imageContainer">
        <img className="albumImage" src={images[0].url} alt="Album cover" />
        <Icons />
      </div>
      <a
        className="albumTitle"
        href={external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
      <div className="artistContainer">
        {artists.map(artist => {
          return <Artist key={artist.id} item={artist} />;
        })}
      </div>
    </article>
  );
};
