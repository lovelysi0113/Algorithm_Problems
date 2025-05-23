/**
 * ABOUT
 *
 * DATE: 2025-05-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181879
 *
 * COMMENT:
 * length 함수로 배열의 길이를 구한다
 **/

function solution(num_list) {
	if (num_list.length >= 11) {
		return num_list.reduce((answer, num) => answer + num, 0);
	} else {
		return num_list.reduce((answer, num) => answer * num, 1);
	}
}
