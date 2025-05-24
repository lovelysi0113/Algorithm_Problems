/**
 * ABOUT
 *
 * DATE: 2025-05-24
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181872
 *
 * COMMENT:
 * slice를 사용하여 myString을 pat으로 나눈다
 **/

function solution(myString, pat) {
	const subString = myString.split(pat);
	subString.pop();

	return subString.map(str => str + pat).join('');
}
