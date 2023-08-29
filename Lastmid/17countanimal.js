var animals = ["dog", "cat", "bat", "cock", "cow", "pig", 
  "fox", "ant", "bird", "lion", "wolf", "deer", "bear", 
  "frog", "hen", "mole", "duck", "goat"]

function countAnimals(txt){
  if(!txt.length)return 0;
  return animals.reduce((max,anml) => { 
      let rmv = remove(txt,anml);
      if(txt.length-rmv.length!=anml.length) return max;
      let next=1+countAnimals(rmv);
      return Math.max(max,next);
  }, 0)
}
const remove=(txt,a)=>{
    for(let c of a) txt=txt.replace(c,'');
    return txt;
}
console.log(countAnimals("goatcode")) //2 (dog, cat)
console.log(countAnimals("cockdogwdufrbir")) //4 (cow, duck, frog, bird)