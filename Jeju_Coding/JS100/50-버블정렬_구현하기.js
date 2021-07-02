/**
 * ABOUT
 *
 * DATE: 2021-07-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/50-bb22106895db4766b2517b0f61a8cc2d
 *
 * COMMENT:
 * 버블정렬을 구현할 수 있다
 * 버블정렬: 두 인접한 원소를 검사하여 정렬하는 방법, 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됨
 **/

function bubble(arr) {
	let result = arr.slice();

	for (let i = 0; i < result.length - 1; i++) {
		for (let j = i; j < result.length - 1; j++) {
			if (result[j] > result[j + 1]) {
				[result[j], result[j + 1]] = [result[j + 1], result[j]];
			}
		}
	}
	return result;
}

const items = prompt('입력해주세요.')
	.split(' ')
	.map(n => {
		return parseInt(n, 10);
	});

console.log(bubble(items));
