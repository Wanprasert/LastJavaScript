
let commonElements = [];

for (let i = 0; i < values1.length; i++) {
  let element = values1[i];

  if (values2.includes(element) && values3.includes(element)) {
    commonElements.push(element);
  }
}

console.log(commonElements);
