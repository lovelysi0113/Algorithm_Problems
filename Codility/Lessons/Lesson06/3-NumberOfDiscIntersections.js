/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
 *
 * COMMENT:
 * 좌표에서 각 원이 차지하는 시작점, 끝점을 구한 다음 그 사이에 겹치는 게 몇개인지 세어준다
 * 그런데 timeout error가 나왔다 어떻게 풀어야할지 좀 더 고민해봐야 할 것 같다...ㅠㅠ
 **/

// TIMEOUT ERROR
// time complexity: O(N**2)
function solution(A) {
	// Compute the number of intersections in a sequence of discs
	// A[J] = R: (J, 0)에 그려진 원의 반지름 길이가 R이다
	// 두 개가 교차하는 원들의 집합의 갯수 구하기

	let circles = A.map((r, idx) => [idx - r, idx + r]);
	circles.sort((a, b) => a[0] - b[0]);

	let len = circles.length;
	let answer = 0;
	for (let left = 0; left < len - 1; left++) {
		for (let right = left + 1; right < len; right++) {
			if (circles[left][0] <= circles[right][0] && circles[right][0] <= circles[left][1]) {
				answer += 1;
			}
		}
	}
	return answer > 10000000 ? -1 : answer;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 * 참고한 풀이: https://darkstart.tistory.com/195
 **/

// 시간 복잡도: O(N*log(N)) or O(N)

function solution(A) {
	// 평면에 N개의 원을 그림
	// A[J] = K : (J, 0) 위치에 반지름이 K인 원을 그림
	// 서로 교차/포함하는 pair의 갯수 구하기

	// N = 0, 1이면 답은 0이다
	let N = A.length;
	if (N <= 1) return 0;

	// lower[J]: J 위치에 그려진 원의 최솟값
	// upper[J]: J 위치에 그려진 원의 최댓값
	let lower = [];
	let upper = [];
	A.forEach((K, J) => {
		lower.push(J - K);
		upper.push(J + K);
	});

	// lower, upper 정렬
	lower.sort((a, b) => a - b);
	upper.sort((a, b) => a - b);

	// upper와 lower가 겹치는 횟수 구하기
	let pair = 0;
	let lowerIdx = 0;
	for (let upperIdx = 0; upperIdx < N; upperIdx++) {
		while (lowerIdx < N && lower[lowerIdx] <= upper[upperIdx]) {
			pair += lowerIdx; // 겹치는 갯수 더하기
			pair -= upperIdx; // 전에 계산했던 것과 중복 값 빼기
			lowerIdx += 1;
		}
	}

	// 일정 수 넘으면 -1 리턴
	if (pair > 10000000) return -1;
	else return pair;
}
