/**
 * ABOUT
 *
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/5-for-638d3381b00f4e1d89d4350b089d491a
 *
 * COMMENT:
 * for문을 사용하여 구한 a의 값은 10 + 1 + 3 = 14이다
 * 그래서 a + b는 16이 된다
 **/

var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
	a += i;
}

console.log(a + b); // 16
