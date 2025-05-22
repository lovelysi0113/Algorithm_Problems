/**
 * ABOUT
 *
 * DATE: 2025-05-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181887
 *
 * COMMENT:
 * 배열을 순회하며 인덱스가 짝수인 경우는 even 변수에 더하고, 홀수인 경우는 odd 변수에 더한다
 **/

function solution(num_list) {
	let even = 0;
	let odd = 0;

	num_list.forEach((num, idx) => {
		if (idx % 2 === 0) even += num;
		else odd += num;
	});

	return Math.max(even, odd);
}
