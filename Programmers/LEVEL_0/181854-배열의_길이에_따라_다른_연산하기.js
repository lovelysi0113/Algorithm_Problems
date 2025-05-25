/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181854
 *
 * COMMENT:
 * 배열의 길이가 홀수인지 짝수인지에 따라 짝수 또는 홀수 인덱스에만 n을 더해준다
 **/

function solution(arr, n) {
	const check = arr.length % 2;

	return arr.map((num, idx) => {
		if (idx % 2 !== check) return num + n;
		else return num;
	});
}
