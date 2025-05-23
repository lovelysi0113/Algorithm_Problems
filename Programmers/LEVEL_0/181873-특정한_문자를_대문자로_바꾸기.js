/**
 * ABOUT
 *
 * DATE: 2025-05-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181873
 *
 * COMMENT:
 * 각 문자가 alp와 같은지 확인하여 대문자로 바꿔준다
 **/

function solution(my_string, alp) {
	return my_string.split('').reduce((answer, str) => {
		if (str === alp) return answer + str.toUpperCase();
		else return answer + str;
	}, '');
}
