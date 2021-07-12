/**
 * ABOUT
 *
 * DATE: 2021-06-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42583
 *
 * COMMENT:
 * [ 스택/큐 ]
 * 처음에 다리 길이만큼의 배열(bridge)을 만들어 트럭이 다리를 지나는 것을 구현한다
 * bridge에서 맨 앞을 제거한 후(1초 흐름, 앞으로 트럭이 한칸 앞으로 전진한 것을 의미)
 * 다음 트럭이 다리 위에 올라갈 수 있는지 확인한다(현재 다리 위 트럭의 총 무게 + 올라갈 트럭 무게 <= 다리가 견딜 수 있는 무게)
 * 모든 트럭이 다리를 지나갈 때까지 이 과정을 반복하여 총 걸린 시간을 구한다
 **/

function solution(bridge_length, weight, truck_weights) {
	let bridge = Array(bridge_length).fill(0);
	let sumWeight = 0;

	let time = 0;
	while (truck_weights.length > 0) {
		// 한 칸 앞으로 전진(1초 경과)
		time += 1;
		let truck = bridge.shift();
		if (truck !== 0) {
			sumWeight -= truck;
		}
		// 다음 트럭이 다리로 올라갈 수 있는지 확인
		if (sumWeight + truck_weights[0] <= weight) {
			let newTruck = truck_weights.shift();
			sumWeight += newTruck;
			bridge.push(newTruck);
		} else {
			bridge.push(0);
		}
	}
	while (sumWeight > 0) {
		// 한 칸 앞으로 전진(1초 경과)
		time += 1;
		let truck = bridge.shift();
		if (truck !== 0) {
			sumWeight -= truck;
		}
	}

	return time;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42583
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(bridge_length, weight, truck_weights) {
	let bridge = Array(bridge_length).fill(0);

	let sumWeight = 0;
	let time = 0;

	while (truck_weights.length > 0) {
		// 1초 지남
		time += 1;
		let now = bridge.shift();
		sumWeight -= now;

		// 새로운 트럭이 다리에 올라갈 수 있는지 확인
		if (sumWeight + truck_weights[0] <= weight) {
			// 트럭이 다리 위로 올라갈 수 있음
			let truck = truck_weights.shift();
			sumWeight += truck;
			bridge.push(truck);
		} else {
			// 트럭이 올라갈 수 없음
			bridge.push(0);
		}
	}

	// 지금까지 나온 시간 + 마지막 트럭이 다리를 지나가는 시간
	return time + bridge_length;
}
