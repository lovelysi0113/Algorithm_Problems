/**
* ABOUT
*
* DATE: 2021-03-29
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12969
*
* COMMENT:
* 가로 길이 n만큼 '*' 만드는 것을 세로 길이 m만큼 반복한다
**/

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(" ");
    const n = Number(input[0]), m = Number(input[1]);
    
    // 세로의 길이 m만큼 반복
    for (let height = 0; height < m; height++) {
        let result = '';
        // 가로의 길이 n만큼 '*' 만들기
        for (let width = 0; width  < n; width++) {
            result += '*';
        }
        // 한 줄 완성 -> 출력
        console.log(result);
    }
});