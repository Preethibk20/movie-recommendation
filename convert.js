const csv = require("csvtojson");
const fs = require("fs");

csv()
  .fromFile("movies_metadata.csv")
  .then((json) => {
    fs.writeFileSync("movies.json", JSON.stringify(json, null, 2));
    console.log("CSV converted to JSON!");
  });
