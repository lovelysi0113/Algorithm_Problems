/**
* ABOUT
*
* DATE: 2021-04-02
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/49993
*
* COMMENT:
* for문으로 skill_tree 속 스킬들과 스킬 순서를 비교한다
* shift() 메서드로 스킬 순서의 첫번째 스킬을 꺼내 현재 스킬과 동일한지 확인한다
**/

function solution(skill, skill_trees) {
    var answer = 0;
    
    skill_trees.forEach(skillTree => {
        let canSkill = true;
        let chkSkill = skill.split("");
        for (let idx = 0; idx < skillTree.length; idx++) {
            // 스킬 순서에 있는 스킬일 때
            if (chkSkill.includes(skillTree[idx])) {
                // 스킬 순서의 첫번째가 맞는지 확인
                if (skillTree[idx] !== chkSkill.shift()) {
                    canSkill = false;
                    break;
                }
            }
        }
        if (canSkill) {
            answer += 1;
        }
    });
    
    return answer;
}