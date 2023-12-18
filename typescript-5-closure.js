// 클로저를 사용하는 함수
/**
 * 멤버 데이터에 접근하는 함수를 반환하는 클로저를 생성합니다.
 * @param id - 멤버의 ID입니다.
 * @param password - 멤버의 비밀번호입니다.
 * @param address - 멤버의 주소입니다.
 * @param cart - 멤버의 쇼핑 카트입니다.
 * @returns 멤버 데이터를 반환하는 함수입니다.
 */
function memberDataWithClosure(id, password, address, cart) {
    return function () {
        return { id: id, password: password, address: address, cart: cart };
    };
}
// 클로저를 사용하지 않는 객체
var memberDataWithoutClosure = {
    id: 'user2',
    password: 'pass2',
    address: 'address2',
    cart: ['item3', 'item4']
};
/**
 * 위의 객체는 클로저를 사용하지 않았기 때문에, memberDataWithoutClosure.id, memberDataWithoutClosure.password 등으로 직접 접근할 수 있습니다.
 * 개발할 때는 접근하는 것이 편리하지만, 이후에 유지보수를 할 때는 위험한 방법입니다.
 * 객체지향 프로그래밍에서는 은닉화 작업을 통해 직접 접근을 막습니다.
 * 하지만 함수형 프로그래밍에서는 일반적인 방식으로는 은닉화를 할 수 없기 때문에
 * 클로저 패턴, 위 예제에서 memberDataWithClosure 함수를 통해 은닉화를 구현합니다.
 */
// 클로저를 사용하는 예제 
var member1WithClosure = memberDataWithClosure('user1', 'pass1', 'address1', ['item1', 'item2']);
console.log(member1WithClosure()); // 클로저를 통한 데이터 접근
// 위 예제에서는 memberDataWithClosure 함수를 통해 은닉화를 구현했기 때문에, member1WithClosure() 함수를 통해서만 데이터에 접근할 수 있습니다. 
// 출력 값
// {
//   id: 'user1',
//   password: 'pass1',
//   address: 'address1',
//   cart: [ 'item1', 'item2' ]
// }
// 클로저를 사용하지 않는 예제 
console.log(memberDataWithoutClosure); // 직접 데이터 접근
// 그간 개발할때 매우 자주 사용하였지만, '보안' 상의 치명적인 문제가 있었습니다.
// 위 예제에서는 직접 데이터에 접근하였기 때문에, 위험한 방법입니다. 
// 출력 값
// {
//   id: 'user2',
//   password: 'pass2',
//   address: 'address2',
//   cart: [ 'item3', 'item4' ]
// }
