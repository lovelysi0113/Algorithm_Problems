/**
 * ABOUT
 *
 * DATE: 2021-07-08
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/81301
 *
 * COMMENT:
 * 문자가 숫자인지 영단어인지 비교한 후 영단어이면 어떤 숫자의 영단어인지 비교하여 찾았다
 **/

function solution(s) {
	const cnt = { 3: ['one', 'two', 'six'], 4: ['zero', 'four', 'five', 'nine'], 5: ['three', 'seven', 'eight'] };
	const numbers = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };

	let answer = 0;

	let idx = 0;
	while (idx < s.length) {
		answer *= 10;

		if ('0123456789'.includes(s[idx])) {
			// 숫자인 경우
			answer += parseInt(s[idx]);
			idx++;
		} else {
			// 영단어인 경우
			let len = 3;
			let word = s.slice(idx, idx + len);
			while (len <= 5) {
				if (cnt[len].includes(word)) {
					break;
				} else {
					word += s[idx + len];
					len++;
				}
			}
			answer += numbers[word];
			idx += len;
		}
	}

	return answer;
}
