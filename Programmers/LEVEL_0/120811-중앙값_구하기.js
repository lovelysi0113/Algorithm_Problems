/**
 * ABOUT
 *
 * DATE: 2023-01-09
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120811
 *
 * COMMENT:
 * 배열을 숫자 오름차순으로 정렬한 후, 중간 위치를 찾아 중앙값을 구한다
 **/

function solution(array) {
	// 숫자 오름차순으로 정렬
	array.sort((a, b) => a - b);

	// 중간 위치의 index 구하기
	let arrayLength = array.length;
	let midIndex = Math.floor(arrayLength / 2);

	return array[midIndex];
}
