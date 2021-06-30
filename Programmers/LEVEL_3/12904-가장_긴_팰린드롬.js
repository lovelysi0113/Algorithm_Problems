/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12904
 *
 * COMMENT:
 * 문자열 처음부터 부분문자열을 만들어서 팰린트롬인지 확인해본다
 * 때로는 내장 메서드를 사용하는 것보다 일일이 비교해보는 것이 빠를 때도 있다
 **/

function solution(s) {
	let LEN = s.length;
	let maxLen = 1;
	// 문자 처음부터 직접 비교해보기
	for (let idx = 0; idx < LEN; idx++) {
		for (let num = maxLen; num <= LEN - idx; num++) {
			// 부분문자열이 팰린드롬인지 확인하기
			let substr = s.slice(idx, idx + num);
			let isRight = true;
			for (let chk = 0; chk <= parseInt(num / 2); chk++) {
				if (substr[chk] !== substr[num - chk - 1]) {
					isRight = false;
					break;
				}
			}
			if (isRight) {
				maxLen = Math.max(maxLen, num);
			}
		}
	}

	return maxLen;
}

/*
// 효율성에서 실패(시간초과)
function solution(s) {
	let LEN = s.length;
	let maxLen = 0;
	// 문자 처음부터 직접 비교해보기
	for (let idx = 0; idx < LEN; idx++) {
		for (let num = 1; num <= LEN - idx; num++) {
			// front = 부분문자열, back = 부분문자열 뒤집기
			let front = s.slice(idx, idx + num);
			let back = front.split('').reverse().join('');
			if (front === back) {
				maxLen = Math.max(maxLen, num);
				if (maxLen === LEN) {
					return maxLen;
				}
			}
		}
	}

	return maxLen;
}
*/
