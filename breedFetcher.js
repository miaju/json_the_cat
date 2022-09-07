const request = require("request");


const fetchBreedDescription = function(breedName, cb) {

  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    if (error) {
      cb(error, null);
      return;
    }
    const data = JSON.parse(body);

    if (!data[0]) {

      cb(new Error(`Invalid cat breed entered`), null);
      return;
    }

    cb(null, data[0].description);
      

  
  });

};

module.exports = { fetchBreedDescription };
