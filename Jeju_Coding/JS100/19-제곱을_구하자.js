/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/19-b268261747b3455a874b19f9dbb89ccf
 *
 * COMMENT:
 * pow() 함수를 사용하여 a의 b승을 구할 수 있다
 **/

function power(input) {
	let [a, b] = input.split(' ').map(el => parseInt(el));

	// 방법 1
	let result1 = 1;
	for (let num = 0; num < b; num++) {
		result1 *= a;
	}
	console.log(result1);

	// 방법 2
	let result2 = Math.pow(a, b);
	console.log(result2);
}
