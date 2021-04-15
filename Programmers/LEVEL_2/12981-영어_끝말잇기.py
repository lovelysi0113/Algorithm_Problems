'''/**
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
* 이때, 사람 번호와 차례는 n을 사용하여 쉽게 구할 수 있다
**/'''


def solution(n, words):
    usedWords = []
    nowCh = words[0][0]

    for idx, word in enumerate(words):
        if word not in usedWords and word[0] == nowCh:
            usedWords.append(word)
            nowCh = word[-1]
        else:
            return [idx % n + 1, idx // n + 1]

    return [0, 0]
