# 함수형 프로그래밍

### 체크리스트

- [x] 함수형 프로그래밍 개념 정리
- [x] 비기능적 요구사항을 반영하여 설계

- [ ] LinkedList 구현하고 addLast, toArray, filter 기능에 대해 테스트 추가
- [ ] MovieRank 클래스 메서드 선언하고 각 메서드에 대한 테스트 추가
- [ ] MovieRank 기능 구현 후 테스트 통과하는지 확인
  - [ ] add(movie) : 영화 정보를 추가한다. 이미 같은 값이 있으면 추가하지 않는다.
  - [ ] update(tickets) : 특정 영화의 관람 인원을 업데이트한다. 값이 포함되어 있지 않으면 아무런 변화도 없다.
  - [ ] update(theaters) : 특정 영화의 상영관 개수를 업데이트한다. 값이 포함되어 있지 않으면 아무런 변화도 없다.
  - [ ] delete(title) : 특정 영화 정보를 지운다.
  - [ ] sortByDate() : 상영연도 순으로 전체 데이터 배열로 리턴한다.
  - [ ] top10Tickets() : 관람 인원을 기준으로 상위 10개 제목을 배열로 리턴한다.
  - [ ] findBy(director) : 감독 이름을 기준으로 연출한 영화 제목을 배열로 리턴한다
  - [ ] findBy(actor) : 주연 배우 이름을 기준으로 A, B 항목에 포함된 영화 제목을 배열로 리턴한다
  - [ ] totalTheaters() : 영화 전체 상영관 총합을 리턴한다.
  - [ ] map() : 매개변수로 람다 또는 익명함수를 전달해서 전체 영화정보를 다른 형태로 변환하는 함수
  - [ ] filter() : 매개변수로 람다 또는 익명함수를 전달해서 전체 영화정보 중에서 일부 영화만 포함하는 함수
  - [ ] display() : 매개변수로 콘솔 출력 코드를 포함하는 람다 또는 익명함수를 전달해서 전체 목록을 탐색하며 출력하는 함수

### 설계 과정

둘다 고차함수 표현식을 사용해본 적은 있지만, 순수함수와 불변성 등 개념에 대해 제대로 말할 수 있는 상태는 아니었다.
먼저 1시간 정도 필수 키워드에 대해 학습하는 시간을 가지고, 설계에 들어갔다.
나는 Monadic 개념, 짝은 Facebook의 [immutable-js](https://immutable-js.com/) 라이브러리에 대한 궁금증을 아직 풀지 못한 상태였으나 시간의 한계에 부딪혀 이에 대한 공부는 구현 뒤로 미뤘다...

- 요구사항 분석

![day8-요구사항분석](https://gist.github.com/user-attachments/assets/4f23085d-746e-429a-98cb-a8a393936d3b)

- 클래스 구성

![day8-설계](https://gist.github.com/user-attachments/assets/7dc57428-3a86-4bc0-b97d-9d5f307c32e5)

- 유즈케이스통한 설계 검증

![day8-유즈케이스](https://gist.github.com/user-attachments/assets/eb46651d-9398-4a10-882f-83cd78d41a04)


### 학습메모
- 분석 전 과정에 [Excalidraw](https://excalidraw.com/)를 활용했다.