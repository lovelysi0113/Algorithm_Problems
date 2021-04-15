/**
* ABOUT
*
* DATE: 2021-04-15
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12981
*
* COMMENT:
* 실제로 끝말잇기를 하는 것처럼 하나씩 차례로 단어를 확인한다
* 전 단어의 끝글자와 현재 단어의 첫글자가 다르거나 현재 단어가 이미 사용한 단어라면
* 현재 단어를 말한 사람 번호와 차례를 리턴한다
**/

function solution(n, words) {
    let usedWords = [];
    let person = -1;
    let stage = 0;
    let nowCh = words[0][0];

    for (let idx = 0; idx < words.length; idx++) {
        person = (person + 1) % n;
        if (person === 0) {
            stage += 1;
        }
        let word = words[idx];
        if (!usedWords.includes(word) && word[0] === nowCh) {
            usedWords.push(word);
            nowCh = word[word.length-1];
        } else {
            return [ person+1, stage ];
        }
    }

    return [ 0, 0 ];
}