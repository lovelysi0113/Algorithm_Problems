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

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(S) {
	// properly nested: S의 길이가 0이거나 괄호의 짝이 모두 맞음
	// properly nested를 만족하면 1, 아니면 0 리턴

	let N = S.length;
	// N = 0인 경우 1 리턴
	if (N === 0) return 1;
	// N = 홀수인 경우 무조건 하나가 남으므로 짝이 맞지 않음
	if (N % 2 !== 0) return 0;

	// 열린 괄호를 담는 stack
	let stack = [];

	// 문자열 S가 properly nested를 만족하는지 확인
	for (let idx = 0; idx < N; idx++) {
		if (S[idx] === '(') {
			// 열린 괄호인 경우
			stack.push(S[idx]);
		} else {
			// 닫힌 괄호인 경우
			// stack이 비어있으면 현재 닫힌 괄호와 짝 지어줄 열린 괄호가 없다는 의미 -> 0 리턴
			if (stack.length === 0) return 0;
			// 열린 괄호를 stack에서 꺼냄
			stack.pop();
		}
	}

	// stack에 남은 열린 괄호가 있다면 짝이 맞지 않는다는 의미 -> 0 리턴
	if (stack.length > 0) return 0;
	else return 1;
}
