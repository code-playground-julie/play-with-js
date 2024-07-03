import {hello as kohello} from './korean-hello.js'
import {hello as enghello} from './eng-hello.js'

console.log(kohello)
kohello()
console.log(enghello)
enghello()

/**
 * default export 한 모듈을 가져오려면 중괄호가 아니라 모듈을 직접 가져와야한다.
 * import { ACompo, BCompo } from "./components"; // ❗️ 이건 안됨
 * import Component from "./components"; // ✅ 이렇게 해서 Component.xx로 사용해야함
 */