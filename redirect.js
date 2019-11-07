const regex = /(?:((https?):\/\/)(.{2})(?:\.m)\.wikipedia\.org\/(wiki\/.*))/gm;
// dont really have a reason to use let instead of var but whatever
let m;
let language;
let article;
let protocol;
// code inspired by regex101's code generator
m = regex.exec(window.location);
// these are useful. dont remember why im doing protocol matching but whatever
protocol = m[2];
language = m[3];
article = m[4];
// debugging purposes
console.log(protocol);
console.log(language);
console.log(article);
// sets the location
window.location = `${protocol}://${language}.wikipedia.org/${article}`
