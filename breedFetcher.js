const request = require("request");
const cat = process.argv[2];

request("https://api.thecatapi.com/v1/breeds/search?q=" + cat, (error, response, body) => {
  if (error) {
    console.log("\nError: " + error.message + "\n");
    return;
  }

  const data = JSON.parse(body);

  if (!data[0]) {
    console.log(`\nCat not found: ${cat}. Please try again.\n`);
    return;
  }
  
  console.log("\n" + data[0].description + "\n");

});