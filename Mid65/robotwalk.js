let arr = [

    0 , 0 , 0 , 0 , 0 , 0 , 0 ,
    0 , 0 , 0 , 0 , 0 , 0 , 0 ,
    0 , 0 , 0 , 999 , 0 , 0 , 0 ,
    0 , 0 , 0 , 0 , 0 , 0 , 0 ,
    0 , 0 , 0 , 1 , 0 , 0 , 0 ,
    0 , 0 , 0 , 0 , 0 , 0 , 0 ,
];

let walk = 31;
let pattern = ["right" , "right" , "right" , "up" , "up" , "left" , "left", "left" ];

for (let action of pattern) {

    if (action == "right") walk += 1;
    else if (action == "up") walk -= 7;
    else if (action == "left") walk -= 1;
    else if (action == "down") walk += 7;
}

if (arr[walk] == 999) console.log("Win!!!")
else console.log("Lose!!!");
// win!!!