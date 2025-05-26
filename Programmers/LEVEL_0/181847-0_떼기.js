/**
 * ABOUT
 *
 * DATE: 2025-05-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181847
 *
 * COMMENT:
 * 앞에서부터 검사하여 숫자가 0이 아닐때 그 위치부터 자른 문자열을 반환한다
 **/

function solution(n_str) {
	for (let i = 0; i < n_str.length; i++) {
		if (n_str[i] !== '0') {
			return n_str.slice(i);
		}
	}
}
