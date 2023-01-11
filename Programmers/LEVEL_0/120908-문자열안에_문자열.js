/**
 * ABOUT
 *
 * DATE: 2023-01-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120908
 *
 * COMMENT:
 * indexOf() 함수를 사용하여 str1 안에 str2가 포함되어 있는지 확인할 수 있다
 **/

function solution(str1, str2) {
	if (str1.indexOf(str2) !== -1) {
		return 1;
	} else {
		return 2;
	}
}
