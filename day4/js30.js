const people = ["beck, glenn", "becker, carl", "doe, john"];
const inventors = [
	{ first: "joe", last: "regan", year: 1545, passed: 1555 },
	{ first: "moe", last: "megan", year: 1505, passed: 1555 },
	{ first: "poe", last: "pegan", year: 1500, passed: 1555 },
	{ first: "doe", last: "degan", year: 1687, passed: 1655 },
	{ first: "loe", last: "legan", year: 1405, passed: 1500 },
];

const data = ["car", "car", "truck", "truck", "bike", "walk"];
//filter method

const members = inventors.filter((inventor) => {
	return inventor.year >= 1500 && inventor.year < 1600;
});
console.table(members);

//map method

const fullNames = inventors.map(
	(inventor) => inventor.first + " " + inventor.last
);
console.table(fullNames);

//sort method

const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordered);

//reduce method

const totYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year);
}, 0);
console.table(totYears);

const alph = inventors.sort((a, b) => (a.last > b.last ? 1 : -1));
console.table(alph);

//sum up instances of each element in data

const transport = data.reduce((obj, item) => {
	if (!obj[item]) {
		obj[item] = 0;
	}
	obj[item]++;
	return obj;
}, {});
console.log(transport);

//.some and .every

const atleastSome = inventors.some((inventor) => inventor.passed === 1555);
console.log({ atleastSome });

const all = inventors.every((inventor) => inventor.last);
console.log({ all });

//find -> its like filter, but it return the first value that matches the criterion

const findMembers = inventors.find((inventor) => {
	return inventor.year >= 1500 && inventor.year < 1600;
});
console.log(findMembers);
