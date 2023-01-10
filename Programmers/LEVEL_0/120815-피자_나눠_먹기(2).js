/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120815
 *
 * COMMENT:
 * 모든 사람이 똑같은 피자 조각 개수를 먹을 수 있으려면,
 * 피자 조각이 사람 수와 6의 최소공배수만큼 필요하다
 **/

function solution(n) {
	let gcdNum = gcd(n, 6);
	let lcmNum = (n * 6) / gcdNum;

	return lcmNum / 6;
}

function gcd(a, b) {
	if (b === 0) return a;
	else return gcd(b, a % b);
}
