/**
 * ABOUT
 *
 * DATE: 2025-05-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181888
 *
 * COMMENT:
 * filter() 함수를 사용하여 인덱스가 n의 배수인 원소들만 남긴다
 **/

function solution(num_list, n) {
	return num_list.filter((num, idx) => idx % n === 0);
}
