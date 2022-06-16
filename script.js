let num
let text
let decision

function computerPlay(){
num = Math.floor(Math.random() * 9)//Returns a number from 0 to 9
if( num <= 2){
    decision = "Rock!"
    console.log(num)
    text=  console.log("Rock!")
} else if(num <= 5 && num >2){
    decision = "Paper!"
    console.log(num)
    text =  console.log("Paper!")
} else if (num <= 8 && num >5){
    decision = "Scissor!"
    console.log(num)
    text = console.log("Scissors!")
}
}

