//instrution explain this is use to read and set any environment variables with the dotenv package.
require("dotenv").config();

//instruction explain this is used to import the keys.js file and store it in a varialbe.
var keys = require("./keys.js");

//I took this from Node activity 16 to use axis use the .get and .then code
var axios = require("axios");

var fs = require("fs");

// this is to obtain the user search category so i know which api to use.
var SearchType = Process.argv[2];
//this is to obtain the user concert/spotify/movie/other search terms
var SearchName = Process.argv[3];

//now  that i have the search term i need to run a search witht the capture search type and name.

axios
  .get(
    (spotifysearch =
      "https://rest.bandsintown.com/" +
      SearchName +
      "/events?app_id=codingbootcamp")
  )
  .then(function(response) {
    console.log(response.data);
    console.log("this test worked")
  });





  //Copy of instructions below.
// * You should then be able to access your keys information like so

//   ```js
//   var spotify = new Spotify(keys.spotify);
//   ```

// 9. Make it so liri.js can take in one of the following commands:

//    * `concert-this`

//    * `spotify-this-song`

//    * `movie-this`

//    * `do-what-it-says`

//1.`node liri.js concert-this <artist/band name here>`
// spotifysearch="https://rest.bandsintown.com/"+artists+"/celine+dion/events?app_id=codingbootcamp"
//Output
// Name of the venue

//      * Venue location

//      * Date of the Event (use moment to format this as "MM/DD/YYYY")


