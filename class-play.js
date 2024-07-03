class Car {
    constructor(name) {
        this.name = name
    }
    go() {
        console.log("부릉부릉")
    }
    hasName() {
        return this.name != none
    }
    sayName() {
        console.log("I'm ", this.name)
    }
}

// 
car = new Car("마이카")
car.sayName()
car.go()
car.name = "새이름"
car.sayName()
console.log("abcd".substring(1))