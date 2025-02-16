const array = [1,2,3,4,5,6];

const doubled = array.map(num => {
    return num * 2;
});

console.log(doubled);

const greaterThan2 = array.filter(num => {
    if(num > 2)
    {
        return num;
    }
})

console.log(greaterThan2);

const sumOfAll = array.reduce((acc,num) => {
    return acc+=num;
},0);

console.log(sumOfAll);
