const fs = require("fs");

const raw = fs.readFileSync("serviceAccountKey.json", "utf8");
const json = JSON.parse(raw);
const stringified = JSON.stringify(json);

console.log(stringified);
