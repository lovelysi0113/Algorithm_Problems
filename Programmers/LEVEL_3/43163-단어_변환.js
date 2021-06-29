/**
 * ABOUT
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/43163
 *
 * COMMENT:
 * [ 깊이/너비 우선 탐색(DFS/BFS) ]
 * target으로 변환하기 위해 begin부터 DFS 탐색을 진행하였다
 **/

function solution(begin, target, words) {
	// 사용한 단어 표시하는 배열
	let used = Array(words.length).fill(false);

	// 변환 횟수
	let answer = 0;

	// 다음으로 변환해볼 단어 저장
	let stack = [[begin, 0]];

	while (stack.length > 0) {
		let [now, cnt] = stack.pop();
		if (now === target) {
			// target찾음 -> 변환 종료
			answer = cnt;
			break;
		}
		words.forEach((word, idx) => {
			if (!used[idx]) {
				// 두 개의 단어가 알파벳 하나만 다른지 확인
				let differ = 0;
				for (let chk = 0; chk < word.length; chk++) {
					if (now[chk] !== word[chk]) {
						differ += 1;
					}
				}
				if (differ === 1) {
					// 다음 단어로 변환하기
					used[idx] = true;
					stack.push([word, cnt + 1]);
				}
			}
		});
	}

	return answer;
}
