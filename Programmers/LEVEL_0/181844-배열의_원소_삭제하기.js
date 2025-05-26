/**
 * ABOUT
 *
 * DATE: 2025-05-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181844
 *
 * COMMENT:
 * Map을 사용하여 삭제할 숫자들을 빠르게 조회한다
 **/

function solution(arr, delete_list) {
	const deleteListMap = new Map(delete_list.map(num => [num, true]));

	return arr.filter(num => !deleteListMap.get(num));
}
