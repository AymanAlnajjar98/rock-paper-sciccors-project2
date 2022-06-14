const computerChoiceDisplay = document.getElementById('computerChoice')
const playerChoiceDisplay = document.getElementById('playerChoice')
const resultDisplay = document.getElementById('result')
const playAgain = document.getElementById("again")
let playerChoice
let computerChoice
let array = ["Rock","Paper","Scissors"];

playAgain.style.display = "none";

array.forEach(element => {
    var button = document.createElement("button"); 
    button.id = element;
    var text = document.createTextNode(element);
    button.appendChild(text);
    choices.appendChild(button);
    button.addEventListener('click', (e) => {
      playAgain.style.display = "block";
      document.getElementById("choices").style.display = "none";
      playerChoice = e.target.id
      playerChoiceDisplay.innerHTML = playerChoice
      randomChoice()
      winner(playerChoice,computerChoice)
    })
});

function randomChoice(){
  computerChoice = array[Math.floor(Math.random()*array.length)];
  computerChoiceDisplay.innerHTML = computerChoice
}

function winner(pc,cc){
  let result = null;

  if (pc === cc) {
    result = 'its a draw!'
  }
  else if(pc == 'Rock'){
  if(cc=='Scissors'){
    result="Winner Winner Chicken dinner"
  }
    else{
      result="looooser !!"
    }
  }
  else if(pc == 'Paper'){
    if(cc=='Rock'){
      result="You Win !"
    }
      else{
        result="lost !!!!"
      }
    }
    else if(pc == 'Scissors'){
      if(cc=='Paper'){
        result="you are the winnner :D"
      }
        else{
          result="sorry you lose !!"
        }
      }
  resultDisplay.innerHTML = result
}
