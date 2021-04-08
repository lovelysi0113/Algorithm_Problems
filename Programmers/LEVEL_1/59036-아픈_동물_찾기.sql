-- 동물 보호소에 들어온 동물 중 아픈 동물1의 아이디와 이름을 조회

SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION = 'Sick';