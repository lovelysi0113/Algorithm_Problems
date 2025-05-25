/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181849
 *
 * COMMENT:
 * split을 사용하여 각 자릿수를 분리한 후 더해준다
 **/

function solution(num_str) {
	return num_str.split('').reduce((sum, num) => sum + Number(num), 0);
}
