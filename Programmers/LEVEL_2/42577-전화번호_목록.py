'''/**
* ABOUT
*
* DATE: 2021-06-01
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42577
*
* COMMENT:
* [ 해시 ] 
* 전화번호를 정렬한 후, zip() 함수를 사용하여 양 옆의 전화번호와 비교해본다
* startswitch() 함수를 사용하여 어떤 번호가 다른 번호의 접두어인지 확인한다
* // 참고
* zip(): 여러 개의 순회 가능한 객체를 인자로 받아 각 객체가 담고 있는 원소를 터플의 형태로 차례로 접근할 수 있는 iterator를 반환
* startswitch(): 주어진 문자열의 시작을 판단하여 조건을 만족하면 True, 만족하지 않으면 False를 반환
**/'''

def solution(phone_book):
    phone_book.sort()

    for prev, now in zip(phone_book, phone_book[1:]):
        if now.startswith(prev):
            return False
    return True