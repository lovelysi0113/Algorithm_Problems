/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181862
 *
 * COMMENT:
 * 주어진 문자열에서 'a', 'b', 'c'를 제외한 부분 문자열을 분리한다
 **/

function solution(myStr) {
	const answer = [];
	let subStr = '';

	for (let i = 0; i < myStr.length; i++) {
		const ch = myStr[i];

		if (ch === 'a' || ch === 'b' || ch === 'c') {
			if (subStr !== '') {
				answer.push(subStr);
				subStr = '';
			}
		} else {
			subStr += ch;
		}
	}

	if (subStr !== '') {
		answer.push(subStr);
	}

	return answer.length === 0 ? ['EMPTY'] : answer;
}
