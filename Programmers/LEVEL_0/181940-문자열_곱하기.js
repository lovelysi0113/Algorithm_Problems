/**
 * ABOUT
 *
 * DATE: 2025-05-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181940
 *
 * COMMENT:
 * new Array()와 fill() 함수를 사용하여 원하는 길이의 배열을 만들 수 있다
 **/

function solution(my_string, k) {
	const strArray = new Array(k).fill(my_string);
	return strArray.join('');
}
