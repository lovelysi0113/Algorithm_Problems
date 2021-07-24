/**
 * ABOUT
 *
 * DATE: 2021-07-24
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12938
 *
 * COMMENT:
 * 각 원소의 합이 S가 되면서 각 원소릐 곱이 최대가 되기 위해서는
 * 각 원소가 최대한 같은 값(오차 +- 1)이어야 한다
 **/

function solution(n, s) {
	let avg = Math.floor(s / n);

	// 최고의 집합이 존재하지 않는 경우
	if (avg === 0) {
		return [-1];
	}

	// 최고의 집합 만들기
	// 1. 값을 똑같이 배분하기
	let answer = Array(n).fill(avg);
	// 2. 남은 수를 1씩 배분하기(오름차순 정렬을 위해 뒤에서부터 추가)
	let rest = s % n;
	let lastIdx = n - 1;
	while (rest > 0) {
		answer[lastIdx] += 1;
		rest -= 1;
		lastIdx -= 1;
	}
	return answer;
}
