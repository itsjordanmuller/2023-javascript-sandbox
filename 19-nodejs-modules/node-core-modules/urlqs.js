const url = require("url");
const querystring = require("querystring");

// url.parse()
// Returns a URL object with many different keys and values
const myURL = url.parse("https://example.com/listing?id=1000&premium=true");
// console.log(myURL);

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
// console.log(myURL2);

// querystring.parse()
const myQs = "year=2023&month=october&day=17";
const q = querystring.parse(myQs);
console.log(q);
console.log(q.year);
console.log(q.month);
console.log(q.day);

// querystring.stringify()
const myQs2 = querystring.stringify({
  year: 2023,
  month: "october",
  day: 17,
});
console.log(myQs2);
