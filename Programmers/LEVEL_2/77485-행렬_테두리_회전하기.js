/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/77485
 *
 * COMMENT:
 * 1 ~ n까지 채운 행렬에서 주어진 query를 사용하여 테두리를 시계방향으로 회전시키면 된다
 * 한 요소씩 회전시키면서 여기서 가장 최솟값을 찾아준다
 **/

function solution(rows, columns, queries) {
	const MAX_NUM = rows * columns;
	// rows x columns 행렬 초기화
	let matrix = Array.from(Array(rows), () => new Array());
	for (let num = 1; num <= MAX_NUM; num++) {
		let pos = parseInt((num - 1) / columns);
		matrix[pos].push(num);
	}

	// 회전하기
	let answer = [];
	queries.forEach(query => {
		let [x1, y1, x2, y2] = query.map(el => el - 1);
		let temp = matrix[x1 + 1][y1];
		let minNum = temp;
		// 오른쪽
		for (let y = y1; y < y2; y++) {
			[matrix[x1][y], temp] = [temp, matrix[x1][y]];
			minNum = Math.min(minNum, temp);
		}
		// 아래쪽
		for (let x = x1; x < x2; x++) {
			[matrix[x][y2], temp] = [temp, matrix[x][y2]];
			minNum = Math.min(minNum, temp);
		}
		// 왼쪽
		for (let y = y2; y > y1; y--) {
			[matrix[x2][y], temp] = [temp, matrix[x2][y]];
			minNum = Math.min(minNum, temp);
		}
		// 윗쪽
		for (let x = x2; x > x1; x--) {
			[matrix[x][y1], temp] = [temp, matrix[x][y1]];
			minNum = Math.min(minNum, temp);
		}
		// 이동한 숫자 중 최솟값 구하기
		answer.push(minNum);
	});

	return answer;
}
