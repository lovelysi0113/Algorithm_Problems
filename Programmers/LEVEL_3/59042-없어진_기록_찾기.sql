-- 입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물의 ID와 이름을 ID 순으로 조회

SELECT outs.ANIMAL_ID, outs.NAME
FROM ANIMAL_OUTS AS outs
LEFT JOIN ANIMAL_INS AS ins
ON outs.ANIMAL_ID = ins.ANIMAL_ID
WHERE ins.ANIMAL_ID IS NULL
ORDER BY ins.ANIMAL_ID ASC;