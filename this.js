const person = {
  name: "shubham",
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.greet();




function test1() {
  console.log(this);
}
test1();




const obj = {
  name: "Shubham",
  greet: function () {
    const arrowFun = () => {
      console.log(this.name);
    };
    arrowFun();
  },
};

obj.greet();
