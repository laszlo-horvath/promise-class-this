// 1. Object context
const user = {
   name: 'John',
   greet() {
       console.log('Object this:', this.name);
   }
};

user.greet();
