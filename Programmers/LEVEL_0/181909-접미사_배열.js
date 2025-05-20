/**
 * ABOUT
 *
 * DATE: 2025-05-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181909
 *
 * COMMENT:
 * 문자열을 앞에서부터 하나씩 잘라서 배열에 담은 후 오름차순 정렬해준다
 **/

function solution(my_string) {
	const result = [];
	for (let i = 0; i < my_string.length; i++) {
		result.push(my_string.slice(i));
	}
	return result.sort();
}
