/**
 * ABOUT
 *
 * DATE: 2025-05-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181875
 *
 * COMMENT:
 * 배열의 인덱스가 짝수이면 소문자, 홀수이면 대문자로 변환한다
 **/

function solution(strArr) {
	return strArr.map((str, idx) => {
		if (idx % 2 === 0) return str.toLowerCase();
		else return str.toUpperCase();
	});
}
