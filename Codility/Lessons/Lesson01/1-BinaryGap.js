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

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(N) {
	// binary gap: 양의 정수 N을 2진수로 변환했을 때, 1과 1 사이에 있는 0의 갯수 중 가장 긴 길이
	// binary gap 찾는 문제

	// N을 2진수로 변환하면서 그때마다 숫자를 확인해준다
	// 1인 경우 -> binary gap 끝, 최댓값 찾기
	// 0인 경우 -> binary gap 길이 추가

	let maxGap = 0; // 가장 긴 binary gap의 길이

	let startOne = false;
	let cnt = 0; // binary gap이 나올 때마다 길이 체크하기
	while (N > 0) {
		let now = N % 2;
		if (now === 1) {
			startOne = true;
			maxGap = Math.max(maxGap, cnt);
			cnt = 0; // binary gap 초기화
		}
		if (startOne && now === 0) {
			cnt += 1;
		}
		N = Math.floor(N / 2);
	}

	return maxGap;
}
