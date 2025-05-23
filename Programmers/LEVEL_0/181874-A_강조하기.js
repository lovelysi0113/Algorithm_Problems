/**
 * ABOUT
 *
 * DATE: 2025-05-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181874
 *
 * COMMENT:
 * 문자가 'a' 또는 'A'인 경우에만 대문자로 변환하고 나머지는 모두 소문자로 변환한다
 **/

function solution(myString) {
	return myString.split('').reduce((answer, str) => {
		if (str === 'a' || str === 'A') return (answer += str.toUpperCase());
		else return (answer += str.toLowerCase());
	}, '');
}
