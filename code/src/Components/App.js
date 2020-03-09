import React from "react";
import data from "../data.json";
import { Album } from "./Album";
import { Heading } from "./Heading";

export const App = () => {
  return (
    <section>
      <Heading />
      <section className="albumContainer">
        {data.albums.items.map(album => {
          return <Album key={album.id} item={album} />;
        })}
      </section>
    </section>
  );
};
