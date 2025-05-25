/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181852
 *
 * COMMENT:
 * 배열을 오름차순으로 정렬한 후 slice를 사용하여 5개 요소 이후만 잘라낸다
 **/

function solution(num_list) {
	return num_list.sort((a, b) => a - b).slice(5);
}
