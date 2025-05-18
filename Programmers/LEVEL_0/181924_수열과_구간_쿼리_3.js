/**
 * ABOUT
 *
 * DATE: 2025-05-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181924
 *
 * COMMENT:
 * 인덱스를 key로 하는 Map을 만든 후, queries로 두 개 값의 위치를 Map.set()으로 바꿔준다
 **/

function solution(arr, queries) {
	const arrMap = arr.reduce((map, num, idx) => {
		map.set(idx, num);
		return map;
	}, new Map());

	queries.forEach(([i, j]) => {
		const iNum = arrMap.get(i);
		const jNum = arrMap.get(j);

		arrMap.set(i, jNum);
		arrMap.set(j, iNum);
	});

	return Array.from(arrMap.entries())
		.sort(([aIdx], [bIdx]) => aIdx - bIdx)
		.map(([, num]) => num);
}
