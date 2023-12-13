/**
 *
 * @param a number
 * @param b number
 * @returns number
 *
 * @description
 *
 * add 함수는 당연히 숫자를 받는 사칙연산 함수처럼 보이지만, 
 * 해당 함수는 문자열을 앞뒤로 합치는 기능도 수행한다.
 * 유틸리티 함수가 목적이 아니기도하고, 함수명도 add라는 명칭이 아니기 때문에
 * 이러한 함수는 예기치 못한 에러를 만들어낸다.
 * 작성법도 틀리지 않았기 때문에 수천줄의 코드라고 가정했을 때, 원인을 찾는것이
 * 매우 어려워진다.
 * 코드는 짧지만, 이 코드는 불완전하다. 
 */
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
