/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
 *
 * COMMENT:
 * 문자열 S의 괄호를 하나씩 확인하며 짝을 맞추어 본다
 * 만약 문자가 열린 괄호면 stack에 넣어주고(push) 닫힌 괄호면 stack에서 꺼내서(pop) 둘이 짝이 맞는지 확인한다
 **/

function solution(S) {
	// Determine whether a given string of parentheses (multiple types) is properly nested
	// properly nested: S의 길이가 0이거나 괄호의 짝이 모두 맞는 경우
	// properly nested를 만족하면 1, 아니면 0을 반환

	if (S.length === 0) {
		return 1;
	} else if (S.length % 2 !== 0) {
		return 0;
	}

	let stack = [];
	for (let idx = 0; idx < S.length; idx++) {
		let now = S[idx];
		if (now === '(' || now === '[' || now === '{') {
			stack.push(now);
		} else {
			if (stack.length === 0) {
				return 0;
			} else {
				let chk = stack.pop() + now;
				if (chk !== '()' && chk !== '[]' && chk !== '{}') {
					return 0;
				}
			}
		}
	}
	if (stack.length > 0) {
		return 0;
	} else {
		return 1;
	}
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(S) {
	// properly nested: S의 길이가 0이거나 괄호의 짝이 맞는 경우
	// properly nested를 만족하면 1, 아니면 0 리턴

	let N = S.length;
	// N이 0이면 1 리턴
	if (N === 0) return 1;
	// N이 홀수이면 짝이 안맞는 것이므로 0 리턴
	if (N % 2 !== 0) return 0;

	// 열린 괄호를 저장하는 stack
	let stack = [];

	// S의 문자를 하나씩 검사하며 괄호의 짝이 맞는지 확인한다
	for (let idx = 0; idx < N; idx++) {
		let now = S[idx];
		// 현재 문자가 열린 괄호이다
		if (now === '(' || now === '{' || now === '[') {
			stack.push(now);
		}
		// 현재 문자가 닫힌 괄호이다
		else {
			// stack이 비어있다 -> 열린 괄호가 없다 -> 짝이 맞지 않다 -> 0 리턴
			if (stack.length === 0) return 0;
			// stack에서 꺼내서 짝이 맞는지 확인
			let chk = stack.pop() + now;
			if (chk !== '()' && chk !== '{}' && chk !== '[]') return 0;
		}
	}

	// stack에 남은 괄호가 있는지 확인
	if (stack.length > 0) return 0;
	else return 1;
}
