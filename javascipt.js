const game = () => {
    let moves = 0;
    let pscore = 0;
    let cscore = 0;


    //to randomize computer choice

    let getcomputerchoice = () => {
        let output = (Math.floor((Math.random() * 3)))
        if (output == 0) {
            return 'ROCK'
        }
        else if (output == 1) {
            return 'PAPER'
        }
        else if (output == 2) {
            return 'SCISSOR'
        }
    }

    getcomputerchoice();



    //naming button
    const rockBtn = document.querySelector('.rock')
    const paperBtn = document.querySelector('.paper')
    const scissorBtn = document.querySelector('.scissor')
    const userChoice = [rockBtn, paperBtn, scissorBtn]
    const result = document.querySelector('.result')

    //To select option for player
    userChoice.forEach(option => {

        option.addEventListener('click', (e) => {
            // return option.classList.value


            //to count moves
            const movesLeft = document.querySelector('.movesLeft')
            moves++;
            movesLeft.innerText = `Moves left: ${5 - moves}`

            const computerChoice = getcomputerchoice()
            console.log(computerChoice)

            if (moves >= 5) {
                gameOver()
            }

            //function to check who wins
            winner(option.innerText, computerChoice, pscore, cscore)




        })
    })
}

const winner = (player, computer, pscore, cscore) => {
    const result = document.querySelector('.result')
    const urScore = document.querySelector('.urScore')
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
        // console.log('Tie')
        result.textContent = 'Tie'
    }

    else if (player == 'rock') {
        if (computer == 'paper') {
            result.textContent = 'Computer Won';
            urScore.textContent = `Your Score: ${pscore}`



        } else {
            result.textContent = 'Player Won'
            pscore++;
            urScore.textContent = `Your Score: ${pscore}`
        }
    }
    else if (player == 'scissors') {
        if (computer == 'rock') {
            cscore++;
            result.textContent = 'Computer Won';
            urScore.textContent = `Your Score: ${pscore}`

        } else {
            result.textContent = 'Player Won';
            pscore++;
            urScore.textContent = `Your Score: ${pscore}`
        }
    }
    else if (player == 'paper') {
        if (computer == 'scissors') {
            cscore++
            result.textContent = 'Computer Won';
            urScore.textContent = `Your Score: ${pscore}`

        } else {
            result.textContent = 'Player Won';
            pscore++;
            urScore.textContent = `Your Score: ${pscore}`
        }


    }



}

const gameOver = (pscore, cscore) => {
    const result = document.querySelector('.result')
    const urScore = document.querySelector('.urScore')
    const movesLeft = document.querySelector('.movesLeft')

    movesLeft.innerText = `GAME OVER          `
    urScore.style.display = 'none'
    result.style.display = "none"
}








game();
