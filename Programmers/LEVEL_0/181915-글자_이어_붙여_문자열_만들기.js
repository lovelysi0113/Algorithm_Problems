/**
 * ABOUT
 *
 * DATE: 2025-05-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181915
 *
 * COMMENT:
 * 문자열을 배열로 변환한 후 index_list에 있는 인덱스의 문자만을 모아 새로운 문자열을 만든다
 **/

function solution(my_string, index_list) {
	const stringArr = my_string.split('');

	return index_list.map(idx => stringArr[idx]).join('');
}
