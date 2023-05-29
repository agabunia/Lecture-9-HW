//Task 1
const modal = document.getElementById("modal-background")
const openBtn = document.getElementById("openBtn")
const closeBtn = document.getElementById("closeBtn")

openBtn.addEventListener("click", function(){
    modal.style.display = "block"
})

closeBtn.addEventListener("click", function(){
    modal.style.display = "none"
})


//Task 2
const submitBtn = document.getElementById("submitBtn")
const backgroundColor = document.getElementById("task2")

submitBtn.addEventListener("click", function(){
    const userInputColor = document.getElementById("userColor").value

    if(userInputColor === 'red' || userInputColor === "blue" || userInputColor === "green" || 
    userInputColor === "black" || userInputColor === "white"){
        backgroundColor.style.backgroundColor = userInputColor
    }else{
        alert("You entered color incorrectly")
    }
})


//Task 3
const avrBtn = document.getElementById("averageBtn")

avrBtn.addEventListener("click", function(){
    let userInput = document.getElementById("averageInput").value
    let numbers = userInput.split(":")
    let sum = 0

    for(let i = 0; i < numbers.length; i++){
        sum += Number(numbers[i])
    }

    let average = sum/numbers.length


    alert("the average of numbers is: " + average)
})