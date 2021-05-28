/**
* ABOUT
*
* DATE: 2021-05-28
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/17256
*
* COMMENT:
* 케이크 연산(a 🍰 b = (a.z + b.x, a.y × b.y, a.x + b.z) =  c)을 나누어서 보면
* a.z + b.x = c.x, a.y * b.y = c.y, a.x + b.z = c.z 임을 알 수 있다
* 이를 토대로 케이크 수 a, c를 사용하여 케이크 수 b를 구할 수 있다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(el => parseInt(el)));
})
.on('close', function () {
    let [ ax, ay, az ] = input[0];
    let [ cx, cy, cz ] = input[1];
    
    // a 🍰 b = (a.z + b.x, a.y × b.y, a.x + b.z)
    let bx = cx - az; // a.z + b.x = c.x
    let by = cy / ay; // a.y * b.y = c.y
    let bz = cz - ax; // a.x + b.z = c.z
    
    console.log(bx, by, bz);
    
    process.exit();
});