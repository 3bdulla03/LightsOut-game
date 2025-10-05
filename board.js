let board
let win = false
let moves = 0
let dark = false

// importing elements from html
let squareEls = document.querySelectorAll(".sqr")
const resetBtn = document.getElementById("reset")
const homeBtn = document.getElementById("home")
const modeBtn = document.getElementById("mode")
let movesMsg = document.getElementById("moves")

// initial board
let arrBoard = [ false, false, false, false, false,
                 false, false, false, false, false, 
                 false, false, false, false, false, 
                 false, false, false, false, false, 
                 false, false, false, false, false]

// function to check if win is true to alert player, otherwise shows the increased moves
const updateMessage = () => {
    if (win === true)
        alert("You win!")
    else
        movesMsg.innerText=(`Moves: `+ moves)
}

// function to check for clicks on which box and update its status
const setupEventListener = () => {
    for (let i = 0; i < squareEls.length; i++){
        if (win === true)
            return
        
        squareEls[i].addEventListener("click", function(){
            placePiece(i)

        })
    }
}

// function for reseting the board button
const setupResetBtn = () => {
    resetBtn.addEventListener("click", function(){
        init()
    })
}

// function for the button that takes the user to the home page
const setupHometBtn = () => {
    homeBtn.addEventListener("click", function(){
        window.location.href = "home.html"
    })
}

// function for the button to change between dark and light mode
const setupModeBtn = () => {
    modeBtn.addEventListener("click", function(){
        dark =! dark
        checkForMode()
    })
}

// function to change dark/light mode
const checkForMode = () => {
    if (dark === true){
        darkMode()
    }
    else if (dark === false)
        lightMode()
}

// dark mode function
const darkMode = () => {
    for (let i = 0; i < arrBoard.length; i++){
        if (arrBoard[i] === true){
            squareEls[i].style.backgroundColor = "#D3DAD9"
        }
        else if (arrBoard[i] === false){
            squareEls[i].style.backgroundColor = "#44444E"
        }
    }
    document.body.classList.add('dark')
    document.body.classList.remove('light')
    modeBtn.innerText = ("Light Mode")
}

// light mode function
const lightMode = () => {
    for (let i = 0; i < arrBoard.length; i++){
        if (arrBoard[i] === true){
            squareEls[i].style.backgroundColor = "#F8FAFC"
        }
        else if (arrBoard[i] === false){
            squareEls[i].style.backgroundColor = "#9AA6B2"
        }
    }
    document.body.classList.add('light')
    document.body.classList.remove('dark')
    modeBtn.innerText = ("Dark Mode")
}


const placePiece = (index) => {
    if (arrBoard[index] === true){
        arrBoard[index] = false
        moves++
        render()
        placeNeighbors(index)}


    else if (arrBoard[index] === false){
        arrBoard[index] = true
        moves++
        render()
        placeNeighbors(index)}

}

const checkForWin = () => {
    for (let i = 0; i < arrBoard.length; i++){
        if (arrBoard[i] === true){
            win = false
            return}
        else
            win = true
    }
}

const placeNeighbors = (squareIndex) => {
    index = squareIndex

    if (index === 0){
        arrBoard[1] = !arrBoard[1]
        arrBoard[5] = !arrBoard[5]
    }
    else if (index === 1){
        arrBoard[0] = !arrBoard[0]
        arrBoard[2] = !arrBoard[2]
        arrBoard[6] = !arrBoard[6]
    }
    else if (index === 2){
        arrBoard[1] = !arrBoard[1]
        arrBoard[7] = !arrBoard[7]
        arrBoard[3] = !arrBoard[3]
    }
    else if (index === 3){
        arrBoard[2] = !arrBoard[2]
        arrBoard[8] = !arrBoard[8]
        arrBoard[4] = !arrBoard[4]
    }
    else if (index === 4){
        arrBoard[3] = !arrBoard[3]
        arrBoard[9] = !arrBoard[9]
    }
    else if (index === 5){
        arrBoard[0] = !arrBoard[0]
        arrBoard[6] = !arrBoard[6]
        arrBoard[10] = !arrBoard[10]
    }
    else if (index === 6){
        arrBoard[1] = !arrBoard[1]
        arrBoard[5] = !arrBoard[5]
        arrBoard[7] = !arrBoard[7]
        arrBoard[11] = !arrBoard[11]
    }
    else if (index === 7){
        arrBoard[2] = !arrBoard[2]
        arrBoard[6] = !arrBoard[6]
        arrBoard[8] = !arrBoard[8]
        arrBoard[12] = !arrBoard[12]
    }
    else if (index === 8){
        arrBoard[3] = !arrBoard[3]
        arrBoard[7] = !arrBoard[7]
        arrBoard[9] = !arrBoard[9]
        arrBoard[13] = !arrBoard[13]
    }
    else if (index === 9){
        arrBoard[4] = !arrBoard[4]
        arrBoard[8] = !arrBoard[8]
        arrBoard[14] = !arrBoard[14]
    }
    else if (index === 10){
        arrBoard[5] = !arrBoard[5]
        arrBoard[11] = !arrBoard[11]
        arrBoard[15] = !arrBoard[15]
    }
    else if (index === 11){
        arrBoard[6] = !arrBoard[6]
        arrBoard[10] = !arrBoard[10]
        arrBoard[12] = !arrBoard[12]
        arrBoard[16] = !arrBoard[16]
    }
    else if (index === 12){
        arrBoard[7] = !arrBoard[7]
        arrBoard[11] = !arrBoard[11]
        arrBoard[13] = !arrBoard[13]
        arrBoard[17] = !arrBoard[17]
    }
    else if (index === 13){
        arrBoard[8] = !arrBoard[8]
        arrBoard[12] = !arrBoard[12]
        arrBoard[14] = !arrBoard[14]
        arrBoard[18] = !arrBoard[18]
    }
    else if (index === 14){
        arrBoard[9] = !arrBoard[9]
        arrBoard[13] = !arrBoard[13]
        arrBoard[19] = !arrBoard[19]
    }
    else if (index === 15){
        arrBoard[10] = !arrBoard[10]
        arrBoard[16] = !arrBoard[16]
        arrBoard[20] = !arrBoard[20]
    }
    else if (index === 16){
        arrBoard[11] = !arrBoard[11]
        arrBoard[15] = !arrBoard[15]
        arrBoard[17] = !arrBoard[17]
        arrBoard[21] = !arrBoard[21]
    }
    else if (index === 17){
        arrBoard[12] = !arrBoard[12]
        arrBoard[16] = !arrBoard[16]
        arrBoard[18] = !arrBoard[18]
        arrBoard[22] = !arrBoard[22]
    }
    else if (index === 18){
        arrBoard[13] = !arrBoard[13]
        arrBoard[17] = !arrBoard[17]
        arrBoard[19] = !arrBoard[19]
        arrBoard[23] = !arrBoard[23]
    }
    else if (index === 19){
        arrBoard[14] = !arrBoard[14]
        arrBoard[18] = !arrBoard[18]
        arrBoard[24] = !arrBoard[24]
    }
    else if (index === 20){
        arrBoard[15] = !arrBoard[15]
        arrBoard[21] = !arrBoard[21]
    }
    else if (index === 21){
        arrBoard[16] = !arrBoard[16]
        arrBoard[20] = !arrBoard[20]
        arrBoard[22] = !arrBoard[22]
    }
    else if (index === 22){
        arrBoard[17] = !arrBoard[17]
        arrBoard[21] = !arrBoard[21]
        arrBoard[23] = !arrBoard[23]
    }
    else if (index === 23){
        arrBoard[18] = !arrBoard[18]
        arrBoard[22] = !arrBoard[22]
        arrBoard[24] = !arrBoard[24]
    }
    else if (index === 24){
        arrBoard[19] = !arrBoard[19]
        arrBoard[23] = !arrBoard[23]
    }

    render()
}

const init = () => {
    for (let i = 0; i < 10; i++){
        let random = Math.floor(Math.random() * 25)
        placePiece(random)
    }
    win = false
    moves = 0
    render()
}

const render = () => {
    checkForWin()
    checkForMode()
    updateMessage()
}


init()
setupEventListener()
setupResetBtn()
setupHometBtn()
setupModeBtn()
