//object for score
        /*const score = {
            wins: 0,
            losses: 0,
            ties: 0
        };*/

        //after saved in localStorage get it using parse to display in front
        let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };
        updateScoreElement();
        /*if (score === null){
            score = {
            wins: 0,
            losses: 0,
            ties: 0
        };
        }*/
    
        const playRound = (playerSelection) => {
            const choice = ["rock", "paper", "scissors"];

            const computerSelection = choice[Math.floor(Math.random() * 3)];

            let result = '';

            if (playerSelection === computerSelection){
                result = "It's a tie";
            }else if (
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")
            ) {
                result = "You win!";
            } else {
                result = "You lose!";
            }

            //scorer with object container
            if (result === "You win!"){
                score.wins += 1;
            } else if (result === "You lose!"){
                score.losses += 1;
            }else if (result === "It's a tie"){
                score.ties += 1;
            }
            

            document.querySelector('.jsResult').innerHTML = `${result}`;

            document.querySelector('.jsMoves').innerHTML 
            = `You <img src="/assets/${playerSelection}-emoji.png" class="move-icon"> 
            <img src="/assets/${computerSelection}-emoji.png" class="move-icon">Computer`;

            updateScoreElement();
            //convert the object into json to become local storage(storedata) and permanently saved.
            localStorage.setItem('score', JSON.stringify(score));
        }

        function updateScoreElement () {
            document.querySelector('.jsScore').innerHTML = 
        `Wins: ${score.wins} 
        Losses: ${score.losses}
        Ties: ${score.ties}`;
        }

        
        const resetScore = () => {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;

            updateScoreElement()
            //clear
            localStorage.removeItem('score');
        }