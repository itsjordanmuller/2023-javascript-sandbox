const url = require("url");

// url.parse()
// Returns a URL object with many different keys and values
const myURL = url.parse("https://example.com/listing?id=1000&premium=true");
console.log(myURL);

// url.format()
// Returns URL as "https://www.example.com/listing?id=1000&premium=true"
const myURL2 = url.format({
  protocol: "https",
  host: "www.example.com",
  pathname: "listing",
  query: {
    id: 1000,
    premium: true,
  },
});
console.log(myURL2);
