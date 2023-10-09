    // Function to get computer's choice
    function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }

    // Function to play a single round
    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "It's a tie!";
      } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
      ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
      } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
      }
    }

    // Function to update result in the HTML
    function updateResult(result) {
      document.getElementById('result').innerText = result;
    }

    // Event listener for each button
    document.getElementById('rock').addEventListener('click', function() {
      const playerSelection = 'rock';
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      updateResult(result);
    });

    document.getElementById('paper').addEventListener('click', function() {
      const playerSelection = 'paper';
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      updateResult(result);
    });

    document.getElementById('scissors').addEventListener('click', function() {
      const playerSelection = 'scissors';
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      updateResult(result);
    });
  