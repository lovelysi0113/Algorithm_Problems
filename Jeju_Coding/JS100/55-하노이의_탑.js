/**
 * ABOUT
 *
 * DATE: 2021-07-03
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/55-105b77098f7e4b99a156280ee0550866
 *
 * COMMENT:
 * 다음 규칙을 만족하며 최소 원반 이동 횟수를 계산할 수 있다
 * 1. 처음에 모든 원판은 A 기둥에 꽂혀 있다
 * 2. 모든 원판의 지름은 다르다
 * 3. 이 원반은 세 개의 기둥 중 하나에 반드시 꽂혀야 한다
 * 4. 작은 원반 위에 큰 원반을 놓을 수 없다
 * 5. 한 번에 하나의 원판(가장 위에 있는 원판)만을 옮길 수 있다
 **/

const route = [];

function hanoi(num, start, end, temp) {
	//원판이 한 개일 때에는 바로 옮기면 됩니다.
	if (num === 1) {
		route.push([start, end]);
		return NaN;
	}

	//원반이 n-1개를 경유기둥으로 옮기고
	hanoi(num - 1, start, temp, end);
	//가장 큰 원반은 목표기둥으로
	route.push([start, end]);
	//경유기둥과 시작기둥을 바꿉니다.
	hanoi(num - 1, temp, end, start);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);
