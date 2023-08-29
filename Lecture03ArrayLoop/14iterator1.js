let str = "Hello";

// does the same as
//for (let char of str) console.log(chat);

let iterator = str[Symbol.iterator] ();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // outputs characters one by one
}
// H
// e
// l
// l
// o