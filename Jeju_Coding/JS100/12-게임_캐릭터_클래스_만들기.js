/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/12-428b1f00ec8e4199a62e512afc83ab0b
 *
 * COMMENT:
 * 클래스(class)를 사용하면 객체 지향 프로그래밍에서 사용되는 다양한 기능을 자바스크립트에서도 사용할 수 있다
 **/

// <여기에 class를 작성하세요.>
class Wizard {
	constructor(health, mana, armor) {
		this.health = health;
		this.mana = mana;
		this.armor = armor;
	}
	attack() {
		console.log('파이어볼');
	}
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor); // 545 210 10
x.attack(); // 파이어볼
