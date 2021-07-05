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
