import React from "react";
import { Artist } from "./Artist";

export const Album = props => {
  return (
    <section className="Album">
      <div key={props.id}>
        <img src={props.item.images[1].url} alt="Album cover" />
        <a
          href={props.item.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.item.name}
        </a>
        {props.item.artists.map(item => {
          return <Artist item={item} />;
        })}
      </div>
    </section>
  );
};
