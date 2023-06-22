let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0
};

updateScoreElement();

let winningMove = '';

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    } else if (computerMove === 'lizard') {
      result = 'You win';
    } else if (computerMove === 'spock') {
      result = 'You lose';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    } else if (computerMove === 'lizard') {
      result = 'You win';
    } else if (computerMove === 'spock') {
      result = 'You lose';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    } else if (computerMove === 'lizard') {
      result = 'You win';
    } else if (computerMove === 'spock') {
      result = 'You lose';
    }
  } else if (playerMove === 'lizard') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    } else if (computerMove === 'lizard') {
      result = 'Tie';
    } else if (computerMove === 'spock') {
      result = 'You win';
    }
  } else if (playerMove === 'spock') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    } else if (computerMove === 'lizard') {
      result = 'You lose';
    } else if (computerMove === 'spock') {
      result = 'Tie';
    }
  }

  if (result === 'You win') {
    score.wins += 1;
    winningMove = playerMove;
  } else if (result === 'You lose') {
    score.wins -= 1;
    winningMove = computerMove;
  }

  document.querySelector('.result-container').style.display = 'flex';
  document.querySelector('.main-container').style.display = 'none';

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.main-container').style.display = 'none';
  document.querySelector('.result-container').style.display = 'flex';

  function showFullResults() {
    document.querySelector('.container-for-result').style.display = 'none'; // Hide the result initially
  
    setTimeout(function () {
      document.querySelector('.container-for-result').style.display = 'flex'; // Show the result after the delay
    }, 3000); // Delay the display of full results by 3 seconds (3000 milliseconds)
  
    const winningMoveImage = document.querySelector(`.${playerMove}-image`);
    const losingMoveImage = document.querySelector(`.${computerMove}-image`);
    console.log(winningMoveImage);
  
    if (result === 'You win') {
      winningMoveImage.classList.add('ripple');
    } else if (result === 'You lose') {
      losingMoveImage.classList.add('ripple');
    }
  }
  

  const playerMoveImg = `<button class="${playerMove}-image"><img src="/images/icon-${playerMove}.svg" class="image-in-result"></button>`;

  const computerMoveImg = `<button class="${computerMove}-image"><img src="/images/icon-${computerMove}.svg" class="image-in-result"></button>`;
  if (window.matchMedia("(min-width:768px)").matches){
    document.querySelector('.js-result').innerHTML = `
    <div class="result-grid">
      <div class="result-display-left">
        ${playerMoveImg}
        YOU PICKED
      </div>
      <div class="container-for-result" style="display: none">
      <div class="result-display-middle">
        <h2>${result}</h2>
        <button class="play-again-button" onclick="showMoveSelection();">PLAY AGAIN</button>
      </div>
    </div>
      <div class="result-display-right">
        ${computerMoveImg}
        THE HOUSE PICKED
      </div>
    </div>`
  } else {
  document.querySelector('.js-result').innerHTML = `
    <div class="result-grid">
      <div class="result-display-left">
        ${playerMoveImg}
        YOU PICKED
      </div>
      <div class="result-display-right">
        ${computerMoveImg}
        THE HOUSE PICKED
      </div>
    </div>
    <div class="container-for-result" style="display: none">
      <div class="result-display-middle">
        <h2>${result}</h2>
        <button class="play-again-button" onclick="showMoveSelection();">PLAY AGAIN</button>
      </div>
    </div>`;}

    

  setTimeout(showFullResults, 3000); // Delay the display of full results
}

function showMoveSelection() {
  document.querySelector('.main-container').style.display = 'flex';
  document.querySelector('.result-container').style.display = 'none';
  document.body.classList.remove('result-displayed');
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `${score.wins}`;

  if (score.wins < 13) {
    setTimeout(() => {
     alert("Welcome back to base level!");
        window.location.href = "index.html";
    }, 3100); 
  }
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 5) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 5 && randomNumber < 2 / 5) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 5 && randomNumber < 3 / 5) {
    computerMove = 'scissors';
  } else if (randomNumber >= 3 / 5 && randomNumber < 4 / 5) {
    computerMove = 'lizard';
  } else if (randomNumber >= 4 / 5 && randomNumber < 1) {
    computerMove = 'spock';
  }

  return computerMove;
}

function showRules() {
  let myWindow = window.open('', 'Image Window', 'width=500,height=500');
  myWindow.document.write("<img src='/images/image-rules-bonus.svg'>");
}
