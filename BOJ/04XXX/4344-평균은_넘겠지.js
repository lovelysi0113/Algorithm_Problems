/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/4344
*
* COMMENT:
* 문제에 나온대로 하나씩 차례대로 하면 실수할 일이 없다
* 우선 학생들의 평균점수를 구한다
* 그리고 평균점수가 넘는 학생들의 수를 구한다
* 전체 학생 중 평균점수가 넘는 학생들의 비율을 구한 후, 이를 반올림하여 소수점 3자리까지 출력해야 한다
* tofixed() 메소드를 사용하여 원하는 소수점 자리에서 반올림할 수 있다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
})
.on('close', function () {
    let testcase = parseInt(input[0]);
    
    for (let test = 1; test <= testcase; test++) {
        input[test] = input[test].split(' ').map(el => parseInt(el));
        let total = input[test][0];
        let students = input[test].slice(1);
        
        let avgScore = students.reduce((sum, student) => sum + student,0) / total;
        let avgStudent = students.reduce((sum, student) => {
            if (student > avgScore) {
                sum += 1;
            }
            return sum;
        }, 0);
        console.log(`${(avgStudent / total * 100).toFixed(3)}%`);
    }
    
    process.exit();
});