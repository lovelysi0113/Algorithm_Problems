/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/16-6a79764cb50f4849ad35b30073d61df0
 *
 * COMMENT:
 * reverse() 함수를 사용하여 순서를 바꿀 수 있다
 * reverse(): 배열의 순서를 반전
 **/

function reverse(str) {
	// 방법 1
	let result1 = '';
	for (let idx = 0; idx < str.length; idx++) {
		result1 = str[idx] + result1;
	}
	console.log(result1);

	// 방법 2
	let result2 = str.split('').reverse().join('');
	console.log(result2);
}
