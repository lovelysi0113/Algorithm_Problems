/**
 * ABOUT
 *
 * DATE: 2025-05-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181885
 *
 * COMMENT:
 * filter() 함수를 사용하여 finished 배열의 값이 false인 인덱스에 해당하는 todo_list의 원소들만 남긴다
 **/

function solution(todo_list, finished) {
	return todo_list.filter((todo, idx) => !finished[idx]);
}
