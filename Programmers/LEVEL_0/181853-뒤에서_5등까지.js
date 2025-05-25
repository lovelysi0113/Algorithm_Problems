/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181853
 *
 * COMMENT:
 * 배열을 오름차순으로 정렬한 후 slice를 사용하여 5개 요소만 잘라낸다
 **/

function solution(num_list) {
	return num_list.sort((a, b) => a - b).slice(0, 5);
}
