const rocks = [

    { name: "Led Zeppelin", age: 50 },
    { name: "Dwayne Johson", age: 47 },
    { name: "Neptune", age: 70 }
];

// loop methods: map, filter, find, reduce, sort, forEach

// assignment make all the rocks one year older and save the value to rocksAgedOneYear

const rockAgePlusOneYear = rocks.map(rock => {
    return { ...rock, age: rock.age+1 };
})
console.log("This is the rocks plus they have aged 1 year")
console.log(rockAgePlusOneYear)

// assignment give me the 2 rocks that even ages

const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0);
console.log("This is the even aged rocks")
console.log(evenAgedRocks);