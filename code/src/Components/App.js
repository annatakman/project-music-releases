import React from "react";
import data from "../data.json";
import { Album } from "./Album";

console.log(data);

export const App = () => {
  return (
    <div>
      <Album />
    </div>
  );
};
