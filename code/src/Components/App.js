import React from "react";
import data from "../data.json";
import { Album } from "./Album";

export const App = () => {
  return (
    <div>
      {data.albums.items.map(item => {
        return <Album key={item.id} item={item} />;
      })}
    </div>
  );
};
