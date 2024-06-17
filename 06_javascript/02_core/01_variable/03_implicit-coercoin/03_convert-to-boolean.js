/* 03_convert-to-boolean (불리언 타입으로 변환) */
console.log('===== 논리 타입으로 변환 ======');

// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가 되는 값) 
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.
if(true) console.log("if(true)");       
if(false)console.log("if(false)");
if(undefined) console.log("if(undefined)");
if(null) console.log("if(null)");
if(0) console.log("if(0)");
if(NaN) console.log("if(NaN)");
if('') console.log("if('')");
if('JavaScript') console.log("if('JavaScript')");

// false, undefined, null, 0, NaN, ''(빈 문자열)은 Falsy 값이며
// 이 외의 모든 값은 Truthy 값이다.

//Truthy와 Falsy의 개념
//Truthy 값: 조건문에서 true로 평가되는 값입니다. 대부분의 값이 truthy입니다.
//Truthy 값의 예
// 1. true
// 2. 숫자 (0이 아닌 모든 숫자)
// 3. -1, 1.23, Infinity
// 4. 문자열 (빈 문자열이 아닌 모든 문자열)
// 5. 객체와 배열 (빈 객체와 배열 포함)
// 6. [], {}
// 7. 모든 함수


//Falsy 값: 조건문에서 false로 평가되는 값입니다. 자바스크립트에서는 6가지의 falsy 값이 있습니다.
// 1. Falsy 값
// 2. 0 (숫자 0)
// 3. -0 (음수 0, 음의 0)
// 4. 0n (BigInt 0)
// 5. "", '', `` (빈 문자열)
// 6. null
// 7. undefined
// 8. NaN (Not a Number)
