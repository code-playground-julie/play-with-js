# JS의 모듈 관리

readline 라이브러리를 불러오려는데 구름 ide는 require을, mjs 모듈에서는 import를 사용하라고 한다.
대체 둘은 뭔 차이인가?

### 사용법 비교
require / exports 
```
// CommonJS, Ruby등 채택
const name = require('./module.js');
module.exports = name; // 복수
```

import / export
```
// ES6, Python등 채택
import name from './module.js'
export default name;
```
- 모듈 내에서만 사용할 수 있음.
- 하나의 모듈은 하나의 `export default`만 허용한다. 그리고 이는 다른 export와 다르게 모듈 자체를 반환하며, . 으로 소속된 것들을 호출해서 사용해야한다.
```
import { ACompo, BCompo } from "./components"; // ❗️ 이건 안됨
import Component from "./components"; // ✅ 이렇게 해서 Component.xx로 사용해야함
```

### export 활용 컨벤션과 제약 (MDN)
- export는 파일 맨 아래에 작성한다. (선언시에 export 해도되나, 이 방법이 권장됨)
- 최상위 항목인 functions, var, let, const, class만 내보낼 수 있다.


### import 활용 컨벤션과 제약 (MDN)
- import는 파일 맨 위에 작성한다.
- 모듈의 import 명은 유일해야한다. ex) import {draw} from "./module1.js"; import {draw} from "./module2.js"; 이러면 syntax error 직빵임
- 상대위치를 사용하는 것에 장점이 있다.
    - root부터 경로를 작성하는 것 보다 빠르다.
    - url이 단축되고, 사이트의 다른 게층으로 이동하기 쉽다.
- 일부 모듈 시스템은 . 없이도 상대경로를 인식한다.

### HTML에서 모듈 적용하기
- 

---
### 참고자료
- [JavaScript modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
- [MDN js-example](https://github.com/mdn/js-examples)
- []()

---
Memo

require / exports -> CommonJS, Ruby등 채택
```
const name = require('./module.js');
module.exports = name; // 복수
```

import / export -> ES6, Python등 채택
```
import name from './module.js'
export default name;
```
JS 기능은 브라우저의 지원이 중요한데, 최신 브라우저들은 이제 지원이 가능해짐

- ES6 버전부터 지원되기 시작했다.
- 

export의 