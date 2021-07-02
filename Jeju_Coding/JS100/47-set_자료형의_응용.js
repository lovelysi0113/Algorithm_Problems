/**
 * ABOUT
 *
 * DATE: 2021-07-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/47-set-8b73fa6b52114d128bba7bc6c6da83c6
 *
 * COMMENT:
 * Set을 사용하여 데이터들로부터 중복을 제거할 수 있다
 **/

const people = {
	이호준: '01050442903',
	이호상: '01051442904',
	이준호: '01050342904',
	이호준: '01050442903',
	이준: '01050412904',
	이호: '01050443904',
	이호준: '01050442903',
};

let result = new Set();
Object.keys(people).forEach(person => result.add(person));
console.log(result.size);
