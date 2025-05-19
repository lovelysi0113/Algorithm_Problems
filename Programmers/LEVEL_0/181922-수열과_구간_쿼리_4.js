/**
 * ABOUT
 *
 * DATE: 2025-05-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181922
 *
 * COMMENT:
 * 범위 내의 인덱스가 k의 배수인지 % 연산을 통해 확인한다
 **/

function solution(arr, queries) {
	queries.forEach(([s, e, k]) => {
		for (let i = s; i <= e; i++) {
			if (i % k === 0) {
				arr[i] += 1;
			}
		}
	});

	return arr;
}
