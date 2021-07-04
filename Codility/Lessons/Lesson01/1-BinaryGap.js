/**
 * ABOUT
 *
 * DATE: 2021-07-04
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
 *
 * COMMENT:
 * 가장 긴 binary gap를 찾기 위해 2진수로 변환할 때 현재 수가 0인지 1인지 확인하여 1과 1 사이에 있는 0의 갯수를 센 후 결과값을 비교하였다
 **/

function solution(N) {
	// binary gap: 1과 1 사이에 있는 0의 갯수
	// 양의 정수가 주어졌을 때, 가장 긴 binary gap을 찾기

	let answer = 0; // 가장 긴 binary gap
	let temp = 0; // 현재 binary gap 저장
	let isOne = false;

	// N을 2진수로 변환하기
	while (N > 0) {
		let num = N % 2;
		if (!isOne && num === 1) {
			// binary gap 가능
			isOne = true;
		} else if (isOne && num === 0) {
			// binary gap 유지
			temp += 1;
		} else if (isOne && num === 1) {
			// binary gap 종료
			answer = Math.max(answer, temp);
			temp = 0;
		}
		N = parseInt(N / 2);
	}
	return answer;
}
