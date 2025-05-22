/**
 * ABOUT
 *
 * DATE: 2025-05-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181890
 *
 * COMMENT:
 * 'l'과 'r'이 각각 처음으로 등장하는 인덱스를 찾아서 먼저 나오는 문자열을 기준으로 배열을 잘라낸다
 **/

function solution(str_list) {
	const lIdx = str_list.indexOf('l');
	const rIdx = str_list.indexOf('r');

	if (lIdx < rIdx) {
		if (lIdx === -1) return str_list.slice(rIdx + 1);
		else return str_list.slice(0, lIdx);
	}

	if (rIdx < lIdx) {
		if (rIdx === -1) return str_list.slice(0, lIdx);
		else return str_list.slice(rIdx + 1);
	}

	return [];
}
