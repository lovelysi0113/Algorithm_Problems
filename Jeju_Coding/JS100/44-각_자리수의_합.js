/**
 * ABOUT
 *
 * DATE: 2021-07-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/44-a15b4323690f449ebb91275d7d38662f
 *
 * COMMENT:
 * 입력받은 수를 10으로 계속 나누면서 각 자리수를 구할 수 있다
 **/

function solution(n) {
	let result = 0;
	while (n > 0) {
		result += n % 10;
		n = parseInt(n / 10);
	}
	console.log(result);
}
