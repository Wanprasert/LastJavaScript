
let str = "Hello World";
let char = [

    "q" , "w" , "e" , "r" , "t" , "y" ,
    "u" , "i" , "o" , "p" , "a" , "s" ,
    "d" , "f" , "g" , "h" , "j" , "k" ,
    "l" , "z" , "x" , "c" , "v" , "b" , "n" , "m" ,
    
    "Q" , "W" , "E" , "R" , "T" , "Y" ,
    "U" , "I" , "O" , "P" , "A" , "S" ,
    "D" , "F" , "G" , "H" , "J" , "K" ,
    "L" , "Z" , "X" , "C" , "V" , "B" , "N" , "M"
]

for (let item of str) {

    for (let dup of char) {

        if (item === dup) char.splice(char.indexOf(item) , 1);
    }

}

console.log("Missing Char is : " + char);
//Missing Char is : q,w,t,y,u,i,p,a,s,f,g,h,j,k,z,x,c,v,b,n,m,Q,E,R,T,Y,U,I,O,P,A,S,D,F,G,J,K,L,Z,X,C,V,B,N,M