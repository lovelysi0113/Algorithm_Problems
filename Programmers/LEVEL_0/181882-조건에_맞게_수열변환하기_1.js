/**
 * ABOUT
 *
 * DATE: 2025-05-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181882
 *
 * COMMENT:
 * num이 50보다 큰지, 짝수/홀수인지 확인한다
 **/

function solution(arr) {
	return arr.map(num => {
		if (num >= 50 && num % 2 === 0) return num / 2;
		else if (num < 50 && num % 2 === 1) return num * 2;
		return num;
	});
}
