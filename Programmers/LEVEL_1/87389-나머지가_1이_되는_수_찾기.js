/**
 * ABOUT
 *
 * DATE: 2021-10-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/87389
 *
 * COMMENT:
 * 2부터 n-1까지 나눠보며 나머지가 1이 되는 x를 구한다
 **/

function solution(n) {
	for (let num = 2; num < n; num++) {
		if (n % num === 1) {
			return num;
		}
	}
}
