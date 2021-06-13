'''/**
 * ABOUT
 *
 * DATE: 2021-06-13
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1260
 *
 * COMMENT:
 * 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하면 된다
 * DFS: 인접한 정점을 발견한 후, 해당 정점을 방문하지 않은 상태라면 그 정점을 바로 방문한다
 *      이를 반복하다 방문하지 않은 인접 정점이 더이상 없다면 뒤로 돌아감(재귀)
 * BFS: 현재 정점과 인접한 정점 중, 방문하지 않은 정점을 방문할 정점 배열(queue)에 저장한다
 *      그 후 queue에서 정점을 하나씩 뽑아 방문함
 **/'''

N, M, V = map(int, input().split(' '))

graph = [[] for _ in range(N+1)]
for _ in range(M):
    a, b = map(int, input().split(' '))
    graph[a].append(b)
    graph[b].append(a)
for el in graph:
    el.sort();

def DFS(vertex, visited):
    visited += [vertex]
    for chk in graph[vertex]:
        if chk not in visited:
            DFS(chk, visited)
    return visited
def BFS(vertex):
    visited = [vertex]
    queue = [vertex]
    while queue:
        now = queue.pop(0)
        for chk in graph[now]:
            if chk not in visited:
                visited.append(chk)
                queue.append(chk)
    return visited

print(' '.join(map(str, DFS(V, []))))
print(' '.join(map(str, BFS(V))))