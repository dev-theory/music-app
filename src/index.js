"use strict";

const allMusic = require("../music-db.json");

const keywords = process.argv[2];

const search = (str) => {};

if (keywords) {
  const results = search(keywords);
  console.log(`>> Search results for "${keywords}":`);
  console.log(results);
} else {
  console.log(">> No search keywords provided");
}
