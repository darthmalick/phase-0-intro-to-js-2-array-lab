// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 
function destructivelyAppendCat() {
     cats.push("Ralph") 
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
     cats.pop();
}
function destructivelyRemoveFirstCat() {
cats.shift();
}
function appendCat(){
    const allcats = [...cats]
    allcats.push("Broom")
    return allcats;
}
function prependCat(){
    const allcats = [...cats]
    allcats.unshift("Arnold")
    return allcats;
}
function removeLastCat(){
    return cats.slice(0, -1);
 }
 function removeFirstCat(){
     return cats.slice(-2)
 }