/**
 * ABOUT
 *
 * DATE: 2021-07-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17686
 *
 * COMMENT:
 * 정규표현식을 사용하여(/[0-9]/g) 파일명에서 처음으로 숫자가 시작되는 인덱스를 찾는다
 * 해당 인덱스를 기준으로 HEAD, NUMBER로 나누어서 비교해서 파일명을 정렬한다
 **/

function solution(files) {
	files.sort((a, b) => {
		// NUMBER가 시작되는 idx 찾기
		let aIdx = a.indexOf(a.match(/[0-9]/g)[0]);
		let bIdx = b.indexOf(b.match(/[0-9]/g)[0]);

		// HEAD 분리하기
		let aHead = a.slice(0, aIdx).toLowerCase();
		let bHead = b.slice(0, bIdx).toLowerCase();

		if (aHead !== bHead) {
			// HEAD 비교
			if (aHead > bHead) return 1;
			if (aHead < bHead) return -1;
		} else {
			// NUMBER 분리하기
			let aNum = parseInt(a.substring(aIdx));
			let bNum = parseInt(b.substring(bIdx));

			// NUMBER 비교
			return aNum - bNum;
		}
	});

	return files;
}
