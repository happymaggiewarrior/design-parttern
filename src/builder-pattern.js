class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

/*
classic way of builder pattern
*/
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class UserBuilder {
//   constructor(name) {
//     this.user = new User(name);
//   }

//   setAge(age) {
//     this.user.age = age;
//     return this;
//   }

//   setPhone(phone) {
//     this.user.phone = phone;
//     return this;
//   }
//   setAddress(address) {
//     this.user.address = address;
//     return this;
//   }
//   build() {
//     return this.user;
//   }
// }
// let builder = new UserBuilder("bob").setAge("35").setPhone("11111").build();
// console.log(builder);

/*
Javascript way of builder pattern
Only create User class is enough
No need to create UserBuilder 
*/
class User {
  constructor(name, { age, phone = "12345", address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}
let user = new User("Bob", {
  age: 10,
  address: new Address("95111", "1st main st")
});

console.log(user);
