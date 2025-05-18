/**
 * ABOUT
 *
 * DATE: 2025-05-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181923
 *
 * COMMENT:
 * queries에 나오는 범위 내 원소 들 중 k보다 큰 걸 찾은 후 그 중 제일 작은 값을 구한다
 **/

function solution(arr, queries) {
	const MAX_NUM = 1000001;
	const answer = [];

	queries.forEach(([s, e, k]) => {
		const found = arr.slice(s, e + 1).reduce((min, num) => (num > k && num < min ? num : min), MAX_NUM);
		answer.push(found === MAX_NUM ? -1 : found);
	});

	return answer;
}
