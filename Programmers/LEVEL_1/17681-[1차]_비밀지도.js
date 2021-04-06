/**
* ABOUT
*
* DATE: 2021-04-06
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/17681
*
* COMMENT:
* 문제에 나온대로 숫자를 2진법으로 변경한 후, arr1과 arr2의 값을 비교하여 새로운 지도를 만들면 된다
**/

function solution(n, arr1, arr2) {
    // 암호 해독 -> 숫자를 2진법으로 바꾸기
    let arr1Map = arr1.map(value => {
        let bin = value.toString(2);
        for (let cntZero = 0; cntZero < n-bin.length; cntZero) {
            bin = '0' + bin;
        }
        return bin.split('');
    });
    let arr2Map = arr2.map(value => {
        let bin = value.toString(2);
        for (let cntZero = 0; cntZero < n-bin.length; cntZero) {
            bin = '0' + bin;
        }
        return bin.split('');
    });
    //console.log(arr1Map, arr2Map);
    
    // 0 - 공백, 1 - 벽
    let answer = arr1Map.map((line, idx) => {
        return line.map((part, chk) => {
            if (Number(part) || Number(arr2Map[idx][chk])) {
                return '#';
            }
            else {
                return ' ';
            }
        }).join('');
    });
    return answer;
}