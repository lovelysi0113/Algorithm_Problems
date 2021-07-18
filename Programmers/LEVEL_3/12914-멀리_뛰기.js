/**
 * ABOUT
 *
 * DATE: 2021-07-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12914
 *
 * COMMENT:
 * n칸을 가는 방법은 n-1칸에서 1칸 가는 방법 + n-2칸에서 2칸 가는 방법이다
 **/

function solution(n) {
	let jump = Array(n + 1).fill(0);
	jump[0] = 1;
	jump[1] = 1;

	for (let idx = 2; idx <= n; idx++) {
		jump[idx] = (jump[idx - 1] + jump[idx - 2]) % 1234567;
	}

	return jump[n];
}
