/** @format */

let arr = [
	{ id: 1, name: 'john', age: '18', profession: 'developer' },
	{ id: 2, name: 'jack', age: '20', profession: 'developer' },
	{ id: 3, name: 'karen', age: '19', profession: 'admin' },
];

function PrintDeveloperbyMap() {
	//Write your code here , just console.log
	arr.map((element) => {
		if (element.profession === 'developer') {
			console.log(element);
		}
	});
}

function PrintDeveloperbyForEach() {
	//Write your code here , just console.log
	arr.forEach((element) => {
		if (element.profession === 'developer') {
			console.log(element);
		}
	});
}

function addData() {
	//Write your code here, just console.log
	let newData = { id: 4, name: 'susan', age: '20', profession: 'intern' };
	arr.push(newData);
	console.log(arr);
}

function removeAdmin() {
	//Write your code here, just console.log
	let newArr = arr.filter((element) => {
		return element.profession !== 'admin';
	});
	console.log(newArr);
}

function concatenateArray() {
	//Write your code here, just console.log
	let arr2 = [
		{ id: 4, name: 'Peter', age: '23', profession: 'Systems analyst' },
		{ id: 5, name: 'David', age: '20', profession: 'Developer' },
		{ id: 6, name: 'Diana', age: '21', profession: 'Data Analyst' },
	];

	let concatenatedArr = arr.concat(arr2);
	console.log(concatenatedArr);
}
