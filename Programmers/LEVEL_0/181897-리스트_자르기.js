/**
 * ABOUT
 *
 * DATE: 2025-05-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181897
 *
 * COMMENT:
 * 정수 n의 값에 따라 다른 방식으로 num_list를 잘라준다
 **/

function solution(n, slicer, num_list) {
	const [a, b, c] = slicer;

	switch (n) {
		case 1:
			return num_list.slice(0, b + 1);
		case 2:
			return num_list.slice(a);
		case 3:
			return num_list.slice(a, b + 1);
		case 4:
			return num_list.slice(a, b + 1).filter((num, idx) => idx % c === 0);
	}
}
