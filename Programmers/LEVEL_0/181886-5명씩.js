/**
 * ABOUT
 *
 * DATE: 2025-05-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181886
 *
 * COMMENT:
 * filter() 함수를 사용하여 인덱스가 5의 배수인 원소들만 남긴다
 **/

function solution(names) {
	return names.filter((name, idx) => idx % 5 === 0);
}
