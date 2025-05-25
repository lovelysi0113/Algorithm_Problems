/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181851
 *
 * COMMENT:
 * 순서와 출석 여부를 기반으로 상위 3명의 인덱스를 구한다
 **/

function solution(rank, attendance) {
	const [a, b, c] = rank
		.map((num, idx) => [num, idx])
		.filter((num, idx) => attendance[idx])
		.sort((a, b) => a[0] - b[0])
		.slice(0, 3)
		.map(([num, idx]) => idx);

	return 10000 * a + 100 * b + c;
}
