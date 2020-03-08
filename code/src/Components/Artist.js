import React from "react";

export const Artist = props => {
  return (
    <div>
      {/* data.albums.items.artists.name */}
      <a
        href={props.item.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.item.name}
      </a>
    </div>
  );
};
