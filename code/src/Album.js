import React from "react";
import data from "./data.json";

export const Album = () => {
  return (
    <section className="Album">
      {data.albums.items.map(item => {
        return (
          <div key={item.id}>
            <picture>
              <source media="(max-width: 1023px)" srcset={item.images[1].url} />
              <source media="(min-width: 1040px)" srcset={item.images[0].url} />
              <img src={item.images[1].url} alt="Album cover" />
            </picture>
            <a
              href={item.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </div>
        );
      })}
    </section>
  );
};
