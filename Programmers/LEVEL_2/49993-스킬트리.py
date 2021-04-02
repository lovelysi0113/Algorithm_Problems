'''/**
* ABOUT
*
* DATE: 2021-04-02
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/49993
*
* COMMENT:
* for문으로 skill_tree 속 스킬들과 스킬 순서를 비교한다
* pop() 메서드로 스킬 순서의 첫번째 스킬을 꺼내 현재 스킬과 동일한지 확인한다
**/'''


def solution(skill, skill_trees):
    answer = 0

    for skill_tree in skill_trees:
        chk_skill = list(skill)
        for s in skill_tree:
            # 스킬 순서에 있는 스킬일때
            if s in skill:
                # 현재 스킬이 스킬 순서의 첫번째인지 확인
                if s != chk_skill.pop(0):
                    break
        else:
            answer += 1

    return answer
