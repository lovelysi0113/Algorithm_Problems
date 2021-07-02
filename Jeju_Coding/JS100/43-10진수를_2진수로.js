/**
 * ABOUT
 *
 * DATE: 2021-07-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/43-10-2-ea6da83e61ba4b038841ec035a621fea
 *
 * COMMENT:
 * 10진수를 2로 계속 나누면 2진수를 구할 수 있다
 **/

function solution(n) {
	let result = [];
	while (n > 0) {
		result.push(n % 2);
		n = parseInt(n / 2);
	}
	console.log(result.reverse().join(''));
}
