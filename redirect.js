const regex = /(?:((https?):\/\/)(.{2})(?:\.m)\.wikipedia\.org\/(wiki\/.*))/gm;
const str = window.location;
let m;
let language;
let article;
let protocol;

while ((m = regex.exec(str)) !== null) {
	// This is necessary to avoid infinite loops with zero-width matches
	if (m.index === regex.lastIndex) {
		regex.lastIndex++;
	}
	// The result can be accessed through the `m`-variable.
	language = m[3];
	article = m[4];
	protocol = m[2]
}

console.log(language);
console.log(article);
console.log(protocol);

window.location = `${protocol}://${language}.wikipedia.org/${article}`
