// let lapscompleted=0
// function count(){
//     lapscompleted=lapscompleted+1
// }
// count()
// count()
// count()

// console.log(lapscompleted)

// let countEl= document.getElementById("count-el")
// console.log(countEl)

// let count=0

// function increment(){
//     count = count+1
//     countEl.innerText = count
// }
// increment()

var count=0;
var countEl = document.getElementById("count-el")
console.log(countEl)
function increment(){

    count+=1
    countEl.textContent = count
}

increment()

// let name = "Sanjeet"
// let greetings = "Hi,my name is"
// let myGreetings= greetings+" "+name

// console.log(myGreetings)

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Sanjeet Kazi Thapa."
// let greetings = "Hi,welcome back"
// welcomeEl.innerText= greetings+" "+name
// welcomeEl.innerText+= 'hello'
// console.log(welcomeEl)

let saveEl = document.getElementById("save-el")
console.log(saveEl)

function save(){
    let countStr =count + " - "
    saveEl.textContent += countStr
    countEl.textContent=0
    count=0
    console.log(countStr)
}
save()


// mapfunction
// let a=[1,2,3,4,5,6]
// let b=a.map(myfun)
// function myfun(num){
//     num+1
//     return num
// }
// myfun()