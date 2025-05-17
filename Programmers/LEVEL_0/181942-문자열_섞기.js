/**
 * ABOUT
 *
 * DATE: 2025-05-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181942
 *
 * COMMENT:
 * 문자열을 쪼갠 후 같은 인덱스 위치끼리 묶어준다
 **/

function solution(str1, str2) {
	const str1Arr = str1.split('');
	const str2Arr = str2.split('');

	return str1Arr.map((str, idx) => str + str2Arr[idx]).join('');
}
