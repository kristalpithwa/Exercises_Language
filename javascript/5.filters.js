const users = [
  { id: 1, name: "John", age: 25, active: true },
  { id: 2, name: "Sarah", age: 30, active: false },
  { id: 3, name: "Mike", age: 22, active: true },
];

// Names =====================
const names = users.map((item) => {
  return item.name;
});
console.log("names =>", names);

// Ages ======================
const ages = users.filter((item) => {
  return item.age >= 30;
});
console.log("ages =>", ages);

// Active Users ==============
const activeUser = users.filter((item) => {
  return item.active;
});
console.log("activeUser =>", activeUser);

// UnActive Users ============
const unActiveUser = users.filter((item) => {
  return !item.active;
});
console.log("UnActiveUser =>", unActiveUser);

// Find user =================
const findUser = users.find((item) => {
  return item.id === 1;
});
console.log("findUser =>", findUser);

a = 10;
var a;
console.log(a);
