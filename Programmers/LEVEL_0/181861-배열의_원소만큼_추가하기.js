/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181861
 *
 * COMMENT:
 * 배열의 원소 수 만큼 원소를 채운 새로운 배열을 각각 만든 후 flat을 사용하여 하나의 배열로 합친다
 **/

function solution(arr) {
	return arr.map(num => new Array(num).fill(num)).flat();
}
