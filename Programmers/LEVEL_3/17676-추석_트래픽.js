/**
 * ABOUT
 *
 * DATE: 2021-07-01
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17676
 *
 * COMMENT:
 * 로그에서 시작시간, 끝시간을 계산하고 HH:MM:SS를 초 단위로 변경한다(계산하기 쉽게)
 * 각 로그의 시작시간, 끝시간을 담은 배열을 만든 후,
 * 요소마다 하나씩 계산을 한다
 * 1. 현재 계산하는 요소를 현재 시간이라고 가정한다
 * 2. 현재 시간에서 +1초 동안 겹치는 로그의 갯수를 세준다(time ~ time+1)
 * 3. 현재 시간에서 -1초 동안 겹치는 로그의 갯수를 세준다(time-1 ~ time)
 * 4. 2, 3 과정과 지금까지 나온 결과값에서 최댓값을 구해 결과값에 넣어준다
 **/

function solution(lines) {
	const times = [];

	// 로그에서 시작시간, 끝시간 계산하기
	lines = lines.map(line => {
		line = line.split(' ');
		let end = line[1].split(':').map(el => Number(el));
		let endtime = end[0] * 3600 + end[1] * 60 + end[2];
		let process = Number(line[2].slice(0, -1));
		let starttime = endtime - process + 0.001;
		times.push(starttime, endtime);
		return [starttime, endtime];
	});

	// 최대 처리량 찾기
	let maxCnt = 0;
	times.forEach(time => {
		let nowCnt1 = 0;
		let nowCnt2 = 0;
		lines.forEach(([start, end]) => {
			if (start < time + 1 && time <= end) {
				nowCnt1 += 1;
			}
			if (start <= time && time - 1 < end) {
				nowCnt2 += 1;
			}
		});
		maxCnt = Math.max(maxCnt, nowCnt1, nowCnt2);
	});
	return maxCnt;
}
