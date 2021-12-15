/** @format */
function flat(arr, ...args) {
	if (!Array.isArray(arr)) return console.log("your value is not array");

	if (args.length > 0)
		throw new Error(
			"Function accepts only 1 argument, too much arguments provided"
		);

	let newArray = [].concat(...arr);
	return console.log(newArray);
}
array = [1, 2, [1, 2], [3, 4], [5, 6], 9];
array2 = [1, 2, 3, 4, 5, 6];
let a = 123;
flat(array);
flat(array2);
flat(a);
