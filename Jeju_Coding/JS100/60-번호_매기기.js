/**
 * ABOUT
 *
 * DATE: 2021-07-03
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/60-8b2e85dd50e84cd0bc77d1e67dbace70
 *
 * COMMENT:
 * 이름을 가나다 순서대로 배정하고 번호를 매기기 위해 sort() 함수를 사용하여 오름차순 정렬했다
 **/

const students = [
	'강은지',
	'김유정',
	'박현서',
	'최성훈',
	'홍유진',
	'박지호',
	'권윤일',
	'김채리',
	'한지호',
	'김진이',
	'김민호',
	'강채연',
];

students.sort();

for (let idx = 0; idx < students.length; idx++) {
	console.log(`번호: ${idx + 1}, 이름: ${students[idx]}`);
}
