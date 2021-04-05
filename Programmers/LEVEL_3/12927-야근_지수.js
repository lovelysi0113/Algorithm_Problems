/**
* ABOUT
*
* DATE: 2021-04-05
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12927
*
* COMMENT:
* 일할 때 가장 많이 남은 작업을 먼저 해준다
* sort를 사용하여 첫번째 위치의 수(작업량 * -1을 해줌으로써 가장 많이 남은 작업이 맨 위에 오게 된다)를 작업해주면 된다
* 야근 시간을 다 쓰기 전에 일이 모두 끝나는 경우도 고려해봐야 한다
* sort를 사용하니 효율성 테스트에서 실패가 떠서 binary search로 새로 작업하고 남은 양의 일을 넣을 수 있는 위치를 찾았다
**/

function solution(n, works) {
    works.sort((a,b) => b-a);
    
    while (n > 0) {
        if (works[0] === 0) {
            return 0;
        }
        let nowWork = works.shift() - 1;
        //works.push(nowWork);
        //works.sort((a,b) => b-a);
        works.splice(findIdx(nowWork, works), 0, nowWork);
        n -= 1;
    }
    return works.reduce((sum, num) => sum + num * num, 0);
}

const findIdx = (ele, arr) => {
    let left = 0;
    let right = arr.length -1;
    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (arr[mid] === ele) {
            return mid;
        }
        else {
            if (arr[mid] < ele) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return left;
}