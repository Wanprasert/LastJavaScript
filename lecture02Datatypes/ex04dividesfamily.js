function dividesEvenly(num, divi) {
    return num % divi == 0;
  }
  
  console.log(dividesEvenly(98, 7)); //true
  console.log(dividesEvenly(85, 4)); //false
  

/*dividesEvenly(98,7) true
// 98/7 = 14
dividesEvenly(85,4) false
// 85/4 = 21.25*/