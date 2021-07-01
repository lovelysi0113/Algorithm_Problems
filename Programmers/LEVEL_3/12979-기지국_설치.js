/**
 * ABOUT
 *
 * DATE: 2021-07-01
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12979
 *
 * COMMENT:
 * 이미 설치된 기지국들이 전달할 수 있는 아파트의 범위를 체크하면서
 * 전파를 받지 않는 범위에 최소한의 기지국을 설치한다(전파 받지못하는 범위 / 기지국의 범위)
 **/

function solution(n, stations, w) {
	let answer = 0;
	let now = 1;
	let range = 2 * w + 1;

	stations.forEach(station => {
		let start = station - w;
		let end = station + w;
		if (now < start) {
			answer += Math.ceil((start - now) / range);
		}
		now = end + 1;
	});
	answer += Math.ceil((n - now + 1) / range);

	return answer;
}
