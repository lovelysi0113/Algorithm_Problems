/**
 * ABOUT
 *
 * DATE: 2025-05-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181883
 *
 * COMMENT:
 * queries의 각 쿼리마다 arr의 s부터 e까지 1씩 더해준다
 **/

function solution(arr, queries) {
	queries.forEach(([s, e]) => {
		for (let i = s; i <= e; i++) {
			arr[i] += 1;
		}
	});

	return arr;
}
