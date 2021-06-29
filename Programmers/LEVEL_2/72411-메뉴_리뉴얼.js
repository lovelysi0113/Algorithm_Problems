/**
 * ABOUT
 *
 * DATE: 2021-04-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/72411
 *
 * COMMENT:
 * course에 나온 갯수별로 각각 주문이 가장 많은 메뉴 조합을 찾는다
 * 손님이 시킨 메뉴에서 나올 수 있는 모든 조합을 구한 후 해당 조합이 몇번 나오는지 센다
 **/

function solution(orders, course) {
	let answer = [];

	// course의 단품메뉴들의 갯수별로 계산하기
	course.forEach(num => {
		let menuComb = [];
		orders.forEach(order => {
			menuComb = menuComb.concat(getComb(order.split(''), num));
		});

		// 메뉴 조합 중 최대갯수 구하기
		let menuCount = {};
		let maxNum = 1;
		menuComb.forEach(menu => {
			if (menuCount[menu] === undefined) {
				menuCount[menu] = 1;
			} else {
				menuCount[menu] += 1;
				if (menuCount[menu] > maxNum) {
					maxNum = menuCount[menu];
				}
			}
		});

		// 최대갯수인 조합을 answer에 넣기
		answer = answer.concat(
			Object.keys(menuCount).filter(key => {
				if (menuCount[key] === maxNum && maxNum > 1) return true;
			}),
		);
	});

	// 오름차순 정렬
	return answer.sort((a, b) => order(a, b));
}

// 조합 구하는 함수
function getComb(arr, num) {
	let result = [];
	if (num === 1) return arr;
	arr.forEach((select, idx, origin) => {
		// select+1 ~ 마지막 부분에서 나머지 조합 선택
		let rest = origin.slice(idx + 1);
		let restComb = getComb(rest, num - 1);
		// select와 합치기
		let add = restComb.map(comb => {
			return [select, ...comb].sort((a, b) => order(a, b)).join('');
		});
		// result에 현재 나온 조합 추가
		result.push(...add);
	});
	return result;
}

// 문자열 오름차순 정렬
function order(a, b) {
	if (a > b) return 1;
	if (a === b) return 0;
	if (a < b) return -1;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/72411
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(orders, course) {
	let answer = [];

	course.forEach(num => {
		let menus = orders.reduce((arr, order) => {
			order = order.split('').sort((a, b) => {
				if (a > b) return 1;
				else if (a < b) return -1;
				else return 0;
			});
			return [...arr, ...combination(order, num)];
		}, []);
		let cntMenu = {};
		let maxCnt = 2;
		let maxMenu = [];
		menus.forEach(menu => {
			if (cntMenu[menu] === undefined) {
				cntMenu[menu] = 0;
			}
			cntMenu[menu] += 1;
			if (maxCnt < cntMenu[menu]) {
				maxCnt = cntMenu[menu];
				maxMenu = [menu];
			} else if (maxCnt === cntMenu[menu]) {
				maxMenu.push(menu);
			}
		});
		answer = [...answer, ...maxMenu];
	});

	return answer.sort((a, b) => {
		if (a > b) return 1;
		else if (a < b) return -1;
		else return 0;
	});
}

function combination(foods, select) {
	if (select === 1) {
		return foods;
	}
	let result = [];
	for (let idx = 0; idx < foods.length; idx++) {
		let now = foods[idx];
		let rest = combination(foods.slice(idx + 1), select - 1);
		let addrest = rest.map(el => now + el);
		result = [...result, ...addrest];
	}
	return result;
}
