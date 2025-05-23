/**
 * ABOUT
 *
 * DATE: 2025-05-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181878
 *
 * COMMENT:
 * toLowerCase()를 사용하여 모두 소문자로 변환한 후, includes()를 사용하여 pat이 myString에 포함되어 있는지 확인한다
 **/

function solution(myString, pat) {
	const lowerString = myString.toLowerCase();
	const lowerPat = pat.toLowerCase();

	return lowerString.includes(lowerPat) ? 1 : 0;
}
