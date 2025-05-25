/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181855
 *
 * COMMENT:
 * 문자열의 길이를 키로 하는 Map을 만들어 해당 길이를 가진 문자열의 갯수를 구한다
 **/

function solution(strArr) {
	const map = new Map();

	strArr.forEach(str => {
		const len = str.length;
		map.set(len, (map.get(len) || 0) + 1);
	});

	return Array.from(map).reduce((max, [len, count]) => Math.max(max, count), 0);
}
