function foo(myparam) {
    var_none = "I'm var_none"
    let var_let = "I'm var_let"
    const var_const = "I'm var_const"
    var var_var = "I'm var_var"

    console.log("Use variable here")
}

// var
// var은 let, const, class와 다르게 선언 전에 호출할 수 있다.
print(str) // -> undefined
var str = 'hello world'
print(str)
str = 'hello 1'
print(str)
str = 'hello 2'
print(str)

const arr = [1,2,3]
console.log(arr)
arr[1]++
console.log(arr)
arr[2]--
console.log(arr)

function print(str) {
    console.log(str)
}