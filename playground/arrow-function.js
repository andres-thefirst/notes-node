var square = x => x * x;

console.log(square(9));

var user = {
  name: 'Andres',
  hi: () => {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  },
  hiAlt () {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};

user.hi(1, 2, 3);
user.hiAlt(1, 2, 3);
