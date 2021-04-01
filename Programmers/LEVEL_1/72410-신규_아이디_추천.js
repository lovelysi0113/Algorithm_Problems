/**
* ABOUT
*
* DATE: 2021-04-01
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/72410
*
* COMMENT:
* 문제에 나온 순서대로 한단계씩 코드를 작성하면 된다
**/

function solution(new_id) {
    let newid = new_id.split('');
    //console.log('0', newid.join(''))
    
    // 1단계
    newid = newid.map(ch => ch.toLowerCase());
    //console.log('1', newid.join(''))
    
    // 2단계
    const canPassword = 'abcdefghijklmnopqrstuvwxyz0123456789-_.';
    let chk = 0;
    while (chk < newid.length) {
        if (!canPassword.includes(newid[chk])) {
            newid.splice(chk, 1);
        } else {
            chk++;
        }
    }
    //console.log('2', newid.join(''))
    
    // 3단계
    chk = 0;
    while (chk < newid.length) {
        if (newid[chk] === '.') {
            let isDot = true;
            let dotNum = 1;
            while (isDot) {
                if (newid[chk+dotNum] === '.') {
                    dotNum++;
                } else {
                    dotNum--;
                    isDot = false;
                }
            }
            newid.splice(chk+1, dotNum);
        }
        chk++;
    }
    //console.log('3', newid.join(''))
    
    // 4단계
    if (newid[0] === '.') {
        newid.shift();
    }
    if (newid[newid.length-1] === '.') {
        newid.pop();
    }
    //console.log('4', newid.join(''))
    
    // 5단계
    if (newid.length === 0) {
        newid.push('a');
    }
    //console.log('5', newid.join(''))
    
    // 6단계
    if (newid.length >= 16) {
        newid = newid.slice(0, 15);
        if (newid[newid.length-1] === '.') {
            newid.pop();
        }
    }
    //console.log('6', newid.join(''))
    
    // 7단계
    if (newid.length <= 2) {
        while (newid.length < 3) {
            newid.push(newid[newid.length-1]);
        }
    }
    //console.log('7', newid.join(''))
    
    return newid.join('');
}