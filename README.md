# ComicClan - React Webapp

### Description

An online library of comic books for ComicClan, an online community of comic book enthusiasts. The library represents the combined collection of comic books owned by the community members.

![Catalog]('./src/assets/comic-clan-1.png')

![Book Details]('./src/assets/comic-clan-2.png')

### Setup

- Run ```npm install```.
- Run  ```node server.js```, and ```npm start``` in separate terminals.

### Specifications

- The API endpoint for the list of comic books is accessible at `https://comicclan.vett.io/comics`. 
  - For authentication pass the following header:  `Authorization: Bearer ComicClanVettIO2019`.
  - If you add the `?q=<term>` url parameter you’ll get a filtered list of comic books based on their name.
- The application allows the following grouping categories:
  - Year (default)
  - Writer
  - Artist
  - Owner
  - Random
- The application allows searching for comic books based on a name (or partial name).

### Technologies

- React
- React Hooks and Context
- Styled-Components
- Axios
- React-Router-Browser

Designed by the [Vett.io](https://vett.io) Team.
