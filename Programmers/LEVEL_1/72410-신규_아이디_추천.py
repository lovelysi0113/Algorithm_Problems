'''/**
* ABOUT
*
* DATE: 2021-04-01
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/72410
*
* COMMENT:
* 문제에 나온 순서대로 한단계씩 코드를 작성하면 된다
**/'''

def solution(new_id):
    answer_id = ""
    check = ""
    
    for ch in new_id:
        # 1단계
        if ch.isupper():
            answer_id += ch.lower()
            
        # 2단계
        elif ch in "~!@#$%^&*()=+[{]}:?,<>/":
            continue
            
        # 3단계
        elif ch == '.' and ch == check:
            continue
        else:
            answer_id += ch
        check = answer_id[-1]
    
    # 4단계
    answer_id = answer_id.strip('.')
    
    # 5단계
    if len(answer_id) == 0:
        answer_id = "a"
        
    # 6단계
    if len(answer_id) > 15:
        answer_id = answer_id[:15]
        if answer_id[-1] == '.':
            answer_id = answer_id[:-1]
    
    # 7단계
    if len(answer_id) < 3:
        while len(answer_id) != 3:
            answer_id += answer_id[-1]
            
    return answer_id