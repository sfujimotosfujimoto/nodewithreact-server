// write a func to retrieve json

// make an ajax req! "fetch"

//http://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//   'use strict';
//   fetch('http://rallycoding.herokuapp.com/api/music_albums')
//     .then(res => res.json())
//     .then(json => console.log(json));
// }


// async function fetchAlbums() {
//   'use strict';
//   const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
//   const json = await res.json();
//
//   console.log(json);
// }

const fetchAlbums = async () => {
  'use strict';
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();

  console.log(json);
}

fetchAlbums();
