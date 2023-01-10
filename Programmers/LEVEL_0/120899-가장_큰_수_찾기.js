/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120899
 *
 * COMMENT:
 * array를 오름차순으로 정렬하여 가장 큰 수를 찾는다
 **/

function solution(array) {
	let sortArray = array.map((num, idx) => [num, idx]);
	sortArray.sort((a, b) => b[0] - a[0]);

	return sortArray[0];
}
