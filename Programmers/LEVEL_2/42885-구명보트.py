'''/**
 * ABOUT
 *
 * DATE: 2021-06-06
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42885
 *
 * COMMENT:
 * 사람들을 몸무게 내림차순으로 정렬한 뒤 앞 사람(몸무게 최댓값)과 뒷 사람(몸무게 최솟값)을 구명보트에 태운다
 * 만약 둘 무게의 합이 limit를 넘으면 앞 사람만 혼자 태운다
 * 이 과정을 반복하여 필요한 구명보트 개수의 최솟값을 구할 수 있다
 **/'''

def solution(people, limit):
    people.sort(reverse=True)
    
    boat = 0
    front = 0
    back = len(people) - 1
    
    while (front <= back):
        if people[front] + people[back] <= limit:
            front += 1
            back -= 1
        else:
            front += 1
        boat += 1
        
    return boat