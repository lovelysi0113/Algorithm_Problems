'''/**
* ABOUT
*
* DATE: 2021-04-01
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/68644
*
* COMMENT:
* 두 개의 수를 선택하는 모든 경우의 수에서 겹치는 값을 제외해준다
* set()을 사용하여 두수의 합 중 겹치는 값이 있는지 확인해주었다
**/'''

def solution(numbers):
    answer = set()
    
    for one in range(0, len(numbers)):
        for two in range(one+1, len(numbers)):
            answer.add(numbers[one]+numbers[two])
            
    answer = list(answer)
    answer.sort()
    
    return answer