/**
 * ABOUT
 * DATE: 2021-06-24
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17679
 *
 * COMMENT:
 * 우선 보드판을 split() 메서드를 사용하여 2차원 배열로 변경한다
 * 1. 보드를 처음부터 끝까지 돌면서 2 X 2를 찾는다
 * 2. 찾은 블록을 없앤다는 의미로 '0'으로 변경한다
 * 3. 위에 있는 블록을 내려 빈 공간을 채운다
 * 4. 1~3 과정을 반복하되 1번 과정에서 더이상 없앨 블록이 없으면 종료한다
 **/

function solution(m, n, board) {
	board = board.map(el => el.split(''));

	// 블록 지우기
	while (true) {
		// 지울 수 있는 4개 블록 찾기
		let deleteArr = [];
		for (let x = 0; x < m - 1; x++) {
			for (let y = 0; y < n - 1; y++) {
				if (
					board[x][y] !== 0 &&
					board[x][y] === board[x][y + 1] &&
					board[x][y] === board[x + 1][y] &&
					board[x][y] === board[x + 1][y + 1]
				) {
					deleteArr.push([x, y]);
				}
			}
		}
		if (deleteArr.length === 0) {
			return board.reduce((arr, el) => arr.concat(el), []).filter(el => el === 0).length;
		} else {
			// 없앤 블록 표시
			deleteArr.forEach(el => {
				let [x, y] = el;
				board[x][y] = 0;
				board[x][y + 1] = 0;
				board[x + 1][y] = 0;
				board[x + 1][y + 1] = 0;
			});
		}
		// 빈 공간 채우기
		for (let x = m - 1; x > 0; x--) {
			if (board[x].filter(el => el === 0).length === 0) {
				continue;
			}
			for (let y = 0; y < n; y++) {
				for (let move = x - 1; move >= 0; move--) {
					if (board[x][y] === 0 && board[move][y] !== 0) {
						[board[x][y], board[move][y]] = [board[move][y], board[x][y]];
						break;
					}
				}
			}
		}
	}
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-01
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17679
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(m, n, board) {
	board = board.map(el => el.split(''));

	while (true) {
		let canDelete = false;

		// 지워지는 블록 찾기
		let position = [];
		for (let x = 0; x < m - 1; x++) {
			for (let y = 0; y < n - 1; y++) {
				if (
					board[x][y] !== '0' &&
					board[x][y] === board[x + 1][y] &&
					board[x][y] === board[x][y + 1] &&
					board[x][y] === board[x + 1][y + 1]
				) {
					position.push([x, y]);
					canDelete = true;
				}
			}
		}

		// 지워지는 블록 없음 -> 종료
		if (!canDelete) {
			return board.reduce((sum, line) => sum + line.filter(block => block === '0').length, 0);
		}

		// 블록 지우기('0'으로 변경)
		while (position.length > 0) {
			let [x, y] = position.pop();
			board[x][y] = '0';
			board[x + 1][y] = '0';
			board[x][y + 1] = '0';
			board[x + 1][y + 1] = '0';
		}

		// 빈 공간 채우기
		for (let x = m - 1; x > 0; x--) {
			for (let y = 0; y < n; y++) {
				if (board[x][y] === '0') {
					for (let chk = x - 1; chk >= 0; chk--) {
						if (board[chk][y] !== '0') {
							[board[x][y], board[chk][y]] = [board[chk][y], board[x][y]];
							break;
						}
					}
				}
			}
		}
	}
}
