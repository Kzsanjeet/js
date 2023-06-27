// let lapscompleted=0
// function count(){
//     lapscompleted=lapscompleted+1
// }
// count()
// count()
// count()

// console.log(lapscompleted)

let countEl= document.getElementById("count-el")
console.log(countEl)

let count=0

function increment(){
    count = count+1
    countEl.innerText = count
}
increment()
