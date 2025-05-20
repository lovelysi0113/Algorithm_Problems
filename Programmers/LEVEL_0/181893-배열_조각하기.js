/**
 * ABOUT
 *
 * DATE: 2025-05-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181893
 *
 * COMMENT:
 * query 인덱스에 따라 다르게 배열을 잘라준다
 **/

function solution(arr, query) {
	query.forEach((num, idx) => {
		if (idx % 2 === 0) {
			arr = arr.slice(0, num + 1);
		} else {
			arr = arr.slice(num);
		}
	});

	return arr;
}
