const socials = ["LinkedIn", "Facebook", "Instagram", "TikTok"];

// console.log(socials.__proto__);

// Use a forEach Loop
// socials.forEach(function (social) {
//   console.log(social);
// });

// Shorter Version With Arrow Function
// socials.forEach((social) => {
//   console.log(social);
// });

// Even Shorter Version with No Curly Braces
// socials.forEach((social) => console.log(social));

// Pass Index and Array into forEach
// socials.forEach((social, index, arr) =>
//   console.log(`${index} - ${social}`, arr)
// );

// Pass a Function into forEach
// function logSocials(social) {
//   console.log(social);
// }

// socials.forEach(logSocials);

// forEach Method Used on an Object
const socialObjs = [
  { name: "LinkedIn", url: "https://linkedin.com/" },
  { name: "Facebook", url: "https://facebook.com/" },
  { name: "Instagram", url: "https://instagram.com/" },
  { name: "TikTok", url: "https://tiktok.com/" },
];

// Get a Specific Property from the Object Using Dot Notation
socialObjs.forEach((social) => console.log(social.url));
