let words=["apple","banana","grapes","kiwi","watermelon"];
let result=words.filter(function(word){
    return word.length>5;
});
console.log(result);