/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42884
 *
 * COMMENT:
 * [ 탐욕법(Greedy) ]
 * 자동차들을 진출 지점 순으로 오름차순 정렬한다
 * 하나씩 검사하면서 카메라가 진입 지점보다 전에 있으면 카메라를 만나지 못하므로
 * 해당 자동차의 진출 지점에 새로운 카메라를 설치해준다
 **/

function solution(routes) {
	// 진출 지점 순으로 오름차순 정렬
	routes.sort((a, b) => a[1] - b[1]);

	// 카메라 설치하기
	let lastCam = -30001;
	let camera = 0;
	routes.forEach(([enter, out]) => {
		// 카메라가 진입 지점보다 전에 있으면 진출 지점에 새로운 카메라 설치
		if (lastCam < enter) {
			camera += 1;
			lastCam = out;
		}
	});

	return camera;
}
