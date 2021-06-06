/**
 * ABOUT
 *
 * DATE: 2021-06-06
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42885
 *
 * COMMENT:
 * 사람들을 몸무게 내림차순으로 정렬한 뒤 앞 사람(몸무게 최댓값)과 뒷 사람(몸무게 최솟값)을 구명보트에 태운다
 * 만약 둘 무게의 합이 limit를 넘으면 앞 사람만 혼자 태운다
 * 이 과정을 반복하여 필요한 구명보트 개수의 최솟값을 구할 수 있다
 **/

function solution(people, limit) {
	people.sort((a, b) => b - a);

	let boat = 0;
	let front = 0;
	let back = people.length - 1;

	while (front <= back) {
		if (people[front] + people[back] <= limit) {
			front += 1;
			back -= 1;
		} else {
			front += 1;
		}
		boat += 1;
	}

	return boat;
}

/*
// 효율성 실패(시간 초과)
function solution(people, limit) {
	let boatCount = 0;
	while (people.length > 0) {
		let nowPerson = people.shift();
		let maxPair = 0;
		let pairIdx = 0;
		for (let idx = 0; idx < people.length; idx++) {
			// 앞에서부터 차례대로 사람을 구명보트에 태운 후
			// 남은 사람들 중에서 구명보트의 무게 제한을 초과하지 않는 가장 큰 몸무게를 가진 사람을 찾는다
			if (people[idx] <= limit - nowPerson && maxPair < people[idx]) {
				maxPair = people[idx];
				pairIdx = idx;
			}
		}
		if (maxPair > 0) {
			people.splice(pairIdx, 1);
		}
		boatCount++;
	}
	return boatCount;
}
*/
