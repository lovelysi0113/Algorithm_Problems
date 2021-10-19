/**
 * ABOUT
 *
 * DATE: 2021-10-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/86491
 *
 * COMMENT:
 * 가로 길이 <= 세로 길이가 되도록 명함들을 정리 한 후 모든 명함을 수납할 수 있는 가장 큰 길이를 구한다
 **/

function solution(sizes) {
	// 가로 길이 <= 세로 길이가 되도록 명함 정리
	sizes = sizes.map(el => el.sort((a, b) => a - b));

	// 가장 긴 길이 찾기
	let maxLen = [0, 0];
	for (let num = 0; num <= 1; num++) {
		for (let idx = 0; idx < sizes.length; idx++) {
			maxLen[num] = Math.max(maxLen[num], sizes[idx][num]);
		}
	}

	return maxLen[0] * maxLen[1];
}
