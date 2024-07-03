// DataType
{
  const num = 1;
  print(num);

  const str = 'hello';
  print(str);

  const arr = [1, 2, '3'];
  print(arr); // type is object!!

  const arr2D = [
    ['id', 'name'],
    ['myid', 'Susan'],
  ];
  print(arr2D);
}

{
  const set = new Set(); // size, has(), keys()를 가지는 set-like obejct와 연산이 가능하다.
  set.add(1);
  set.add(2);
  set.add([3]); // === 으로 비교가 안되서 꺼내올수가 없다.
  print(set);
  console.log(set.has(1)); // === 으로 존재 여부를 판단한다.
  console.log(set.has([3]));

  const emptyMap = new Map();
  emptyMap.set(1, 'a'); // emptyMap[1] = 'a'는 권장되지 않는다.
  emptyMap.set(2, 'b');
  emptyMap.set(3, 'c');
  print(emptyMap);
  console.log(`emptyMap.has(1) : ${emptyMap.has(1)}`);

  const presetMap = new Map([
    [1, '가'],
    [2, '나'],
  ]);
  console.log(`presetMap.has(1) : ${presetMap.has(1)}`);
  presetMap.set(1, '다');
  console.log(`presetMap.get(1) : ${presetMap.get(1)}`);
}

// Loop (https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Loops_and_iteration)
// for
for (var step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}

let arr = [3, 5, 7, 7];
arr.foo = 'hello';

// in, of 둘다 배열을 읽는데에는 추천되지 않는다. 전통적인 for loop를 쓰자.
for (let i in arr) {
  // 객체의 속성을 읽는다.
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  // 객체의 값을 읽는다.
  console.log(i); // logs "3", "5", "7"
}

// while
{
  do {
    process.stdout.write('잉');
  } while (false);

  var anger = 10;
  while (anger > 0) {
    process.stdout.write('잉');
    anger--;
  }
  process.stdout.write('\n');
}

// Equality check
{
  const t1 = 'hello';
  const t2 = 'hello';
  const t3 = new String('hello'); // 기존에 hello라는 문자열이 있대도 heap 영역 할당
  console.log(`0=='0' ${0 == '0'}`);
  console.log(`0==='0' ${0 === '0'}`);
  console.log(`t1==t2 ${t1 == t2}`);
  console.log(`t1===t2 ${t1 === t2}`);
  console.log(`t1==t3 (t3는 new 사용) ${t1 == t3}`); // true
  console.log(`t1===t3 (t3는 new 사용) ${t1 === t3}`); // false
  console.log(`NaN==NaN ${NaN == NaN} NaN===NaN ${NaN === NaN}`);
  console.log(`null==null ${null == null} null===null ${null === null}`);
  console.log(
    `undefined==undefined ${undefined == undefined} undefined===undefined ${
      undefined === undefined
    }`
  );

  console.log(
    `null==undefined ${null == undefined} null===undefined ${
      null === undefined
    }`
  );
  // ^ 얘가 웃기다. == 비교 결과는 true, strict operator에서는 false

  console.log(`[1,2,3] == [1,2,3] ${[1, 2, 3] == [1, 2, 3]}`);
  console.log(`[1,2,3] === [1,2,3] ${[1, 2, 3] == [1, 2, 3]}`);
}

// Libs
function print(x) {
  // hoisting 되었나보다
  console.log(typeof x, x);
}
