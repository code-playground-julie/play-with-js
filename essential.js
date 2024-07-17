// Array 생성에 람다를 넣고싶을 때는 static 메서드를 사용한다.
Array.from({length: 5}, () => 
  Math.floor(Math.random())
)
