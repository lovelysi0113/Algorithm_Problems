/**
 * ABOUT
 *
 * DATE: 2023-01-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120829
 *
 * COMMENT:
 * 주어진 각도에 대해 0, 90, 180도와 비교하여 예각/직각/둔각/평각인지 확인한다
 **/

function solution(angle) {
	// 예각(1) : 0 < angle < 90
	if (0 < angle && angle < 90) {
		return 1;
	}

	// 직각(2) : angle = 90
	if (angle === 90) {
		return 2;
	}

	// 둔각(3) : 90 < angle < 180
	if (90 < angle && angle < 180) {
		return 3;
	}

	// 평각(4) : angle = 180
	if (angle === 180) {
		return 4;
	}
}
