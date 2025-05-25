/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181858
 *
 * COMMENT:
 * Set을 사용하여 중복된 값을 제거한 후, slice를 사용하여 k개만 구한다
 **/

function solution(arr, k) {
	const arrSet = new Set(arr);
	const answer = [...arrSet, ...new Array(k).fill(-1)];

	return answer.slice(0, k);
}
