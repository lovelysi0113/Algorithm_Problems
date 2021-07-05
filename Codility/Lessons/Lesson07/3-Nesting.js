/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/
 *
 * COMMENT:
 * 문자열 S의 괄호를 하나씩 확인하며 짝을 맞추어 본다
 * 만약 문자가 열린 괄호면 stack에 넣어주고(push) 닫힌 괄호면 stack에서 꺼내서(pop) 둘이 짝이 맞는지 확인한다
 **/

function solution(S) {
	// Determine whether a given string of parentheses (single type) is properly nested
	// properly nested: S의 길이가 0이거나 괄호의 짝이 모두 맞는 경우
	// properly nested를 만족하면 1, 아니면 0을 반환

	if (S.length === 0) {
		return 1;
	} else if (S.length % 2 !== 0) {
		return 0;
	}

	let stack = [];
	for (let idx = 0; idx < S.length; idx++) {
		if (S[idx] === '(') {
			stack.push(S[idx]);
		} else {
			if (stack.length === 0) {
				return 0;
			} else {
				stack.pop();
			}
		}
	}
	if (stack.length > 0) {
		return 0;
	} else {
		return 1;
	}
}
