function main() {
  let n = 5;

  dataIncrement(n);

  console.log("main N =>", n);
}

const dataIncrement = (n) => {
  n++;
  console.log("inner N =>", n);
};

main();
