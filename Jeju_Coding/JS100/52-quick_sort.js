/**
 * ABOUT
 *
 * DATE: 2021-07-03
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/52-quick-sort-46b7823bdea64ddfb6a6c7083be7cba9
 *
 * COMMENT:
 * quick sort를 구현할 수 있다
 **/

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[0];
	const left = [];
	const right = [];

	for (let i = 1; i < arr.length; i++) {
		if (left[0] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(pivot, quickSort(right));
}

const array = prompt('배열을 입력하세요')
	.split(' ')
	.map(n => parseInt(n, 10));

console.log(quickSort(array));
