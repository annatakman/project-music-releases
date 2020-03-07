import React from "react";
import data from "../data.json";

// export const Artist = () => {
//   return (
//     <div>
//       {data.albums.items[0].artists.map(item => {
//         return <a href={item.external_urls.spotify}>{item.name}</a>;
//       })}
//     </div>
//   );
// };

// export const Artist = (prop) => {
//   return (
//     <div>
//       {data.albums.items.map(item => {
//         console.log(item.artists[0].name);
//         return (
//           <a href={item.artists[0].external_urls.spotify}>
//             {item.artists[0].name}
//           </a>
//         );
//       })}
//     </div>
//   );
// };

export const Artist = item => {
  return (
    <div>
      <a href={item.artists.external_urls.spotify}>{item.artists.name}</a>
    </div>
  );
};

// item.name.forEach(name => {
//   return <a href={item.external_urls.spotify}>{item.name}</a>;
// });
