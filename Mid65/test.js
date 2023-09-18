function missingLetter(text) {
    let words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
'w', 'x', 'x', 'y', 'z'];
    let start_pos = 0;
    let result;
    for(let i = 0 ; i < words.length ; i++) {
        if(words[i] == text[0]) {
            start_pos = i;
        }
    }

    let run =  0;
    for(let i = start_pos ; i < words.length ; i++) {

        if(run < text.length){
            if(words[i] != text[run]){
                result = words[i];
                break;
            }
        }
        run++;
    }
    return (result)? result : "No Missing Letter";
}
console.log(missingLetter("abdefg"));
console.log(missingLetter("abcdefg"));
console.log(missingLetter("mnopqs"));