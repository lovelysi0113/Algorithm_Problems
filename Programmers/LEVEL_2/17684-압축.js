/**
 * ABOUT
 *
 * DATE: 2021-07-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17684
 *
 * COMMENT:
 * 문자열 처음부터 하나씩 검사하며 사전에 해당 문자가 있는지 확인한다
 * 재귀를 사용하여 가장 긴 문자열 w를 찾고 w+c를 사전에 등록한다
 **/

function solution(msg) {
	// 1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
	const dictionary = {};
	const ALPHABET = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let idx = 1; idx < ALPHABET.length; idx++) {
		dictionary[ALPHABET[idx]] = idx;
	}
	let lastIdx = 27;

	// 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
	// 4. 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
	const findLongW = (idx, w, c, cnt) => {
		if (dictionary[w + c] === undefined) {
			dictionary[w + c] = lastIdx++;
			return w;
		}
		cnt += 1;
		let newW = w + c;
		let newC = msg[idx + 1 + cnt];
		return findLongW(idx, newW, newC, cnt);
	};

	let answer = [];
	for (let idx = 0; idx < msg.length; idx) {
		let w = msg[idx];
		let c = msg[idx + 1];
		let longW = findLongW(idx, w, c, 0);
		// 3. w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
		answer.push(dictionary[longW]);
		idx += longW.length;
	}

	return answer;
}
