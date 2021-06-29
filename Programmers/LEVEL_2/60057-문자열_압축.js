/**
 * ABOUT
 *
 * DATE: 2021-04-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/60057
 *
 * COMMENT:
 * 1~s.length 갯수만큼 문자열을 압축해보고 그 중 가장 짧은 길이의 압축된 문자열을 구한다
 **/

function solution(s) {
	const MAX = s.length + 1;
	let answer = 10000;

	// 1 ~ MAX 갯수만큼 문자열을 압축해보기
	for (let rptNum = 1; rptNum < MAX; rptNum++) {
		let nowAnswer = '';
		let chkWord = '';
		let cntWord = 0;
		for (let idx = 0; idx < s.length + 1; idx += rptNum) {
			// 압축 시작하기
			if (chkWord === '') {
				chkWord = s.slice(idx, idx + rptNum);
				cntWord = 1;
			}
			// 겹치는 문자열 있는지 확인
			else if (chkWord === s.slice(idx, idx + rptNum)) {
				cntWord += 1;
			}
			// 반복되지 않을 때
			else {
				if (cntWord === 1) {
					nowAnswer += chkWord;
				} else {
					nowAnswer += cntWord + chkWord;
				}
				// 문자열이 끝나지 않았으면 계속 진행하기
				if (idx !== s.length) {
					chkWord = s.slice(idx, idx + rptNum);
					cntWord = 1;
				}
			}
		}
		// 남은 자투리 문자열도 추가해주기
		let last = s.length % rptNum;
		if (last !== 0) nowAnswer += s.slice(-last);

		// 현재 압축한 문자열 길이가 최소길이인지 비교
		answer = Math.min(answer, nowAnswer.length);
	}

	return answer;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/60057
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(s) {
	let MAX_LEN = s.length + 1;
	let answer = MAX_LEN;

	for (let cut = 1; cut < MAX_LEN; cut++) {
		let press = '';

		let cnt = 0;
		let word = '';
		for (let idx = 0; idx < MAX_LEN; idx += cut) {
			let chkword = s.slice(idx, idx + cut);
			if (word === '') {
				word = chkword;
				cnt = 1;
			} else if (word === chkword) {
				cnt += 1;
			} else {
				if (cnt === 1) {
					press += word;
				} else {
					press += cnt + word;
				}
				if (idx !== MAX_LEN) {
					word = chkword;
					cnt = 1;
				}
			}
		}

		let last = (MAX_LEN - 1) % cut;
		if (last !== 0) press += s.slice(-last);

		answer = Math.min(answer, press.length);
	}

	return answer;
}
