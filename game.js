function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
//button for games and RPS
let btnRock, btnPaper, btnScissors, btnGame, btn3Game, btn5Game;

// variable for text
let txtWelcome, txtInst, txtResult

//button end the game and replay
let btnReplay, btnEndGame

//variable for computerChoice
let compOpt;

function setup() 
  {
  createCanvas(400, 400);
    txtWelcome = "Welcome to my Game"
    txtInst = "please choose the game format"
    txtResult = ""
    
 // buttons for 1 3 5 games 
   btnGame = createButton('Single Game');
   btnGame.position(25, 150);
   btnGame.style ('width', '100px')
   btnGame.mousePressed(showRPS)
   
  btn3Game = createButton('Best of Three');
  btn3Game.position(150, 150);
  btn3Game.style ('width', '100px')
  
  btn5Game = createButton('Best of Five');
  btn5Game.position(275, 150); 
  btn5Game.style ('width', '100px')
    
  //buttons for R P S  
  btnRock = createButton('Rock');
  btnRock.position(25, 180);
  btnRock.style ('width', '100px')
  btnRock.hide()
  btnRock.mousePressed(compareRock)
    
  btnPaper = createButton('Paper');
  btnPaper.position(150, 180);
  btnPaper.style ('width', '100px')
  btnPaper.hide()
  btnPaper.mousePressed(comparePaper)
    
  btnScissors = createButton('Scissors');
  btnScissors.position(275, 180);
  btnScissors.style ('width', '100px')
  btnScissors.hide()
  btnScissors.mousePressed(compareScissors)
    
  //button for replay or end game
  btnReplay = createButton('Replay');
  btnReplay.position(100, 180);
  btnReplay.style ('width', '100px')
  btnReplay.hide()
  btnReplay.mousePressed(NewGame)
    
  btnEndGame = createButton('EndGame');
  btnEndGame.position(220, 180);
  btnEndGame.style ('width', '100px')
  btnEndGame.hide()
    
  //reset random number compOpt
    
 }

function draw() {
  background(220);
  
  text(txtWelcome, 120, 60 )
  textSize(19)
  text(txtInst, 80, 90 )
  text(txtResult, 120, 300) 
}

function showRPS()
{
  txtInst = "choose amoung rock, paper, scissors"
  txtWelcome = ""
  txtResult = ""
  
  //hide game options
  btnGame.hide()
  btn3Game.hide()
  btn5Game.hide()
  
  // show Rock Paper Scissors buttons
  btnRock.show()
  btnPaper.show()
  btnScissors.show()
}

function compareRock()
{
  if (compOpt == 1)
    {
      txtResult = "It's Draw"
    }
  else if (compOpt == 2)
    {
     txtResult = "Computer Wins !"
    }
  else
    {
     txtResult = "You Won !" 
    }
  ShowResult()
}

function comparePaper()
{
 if (compOpt == 1)
    {
      txtResult = "You Won!"
    }
  else if (compOpt == 2)
    {
     txtResult = "It's Draw !"
    }
  else
    {
     txtResult = "Computer Wins !" 
    } 
  ShowResult()
}

function compareScissors()
{
 if (compOpt == 1)
    {
      txtResult = "Computer Wins !"
    }
  else if (compOpt == 2)
    {
     txtResult = "You Won !"
    }
  else
    {
     txtResult = "It's Draw" 
    } 
  ShowResult()
}

function NewGame()
{
  compOpt = round(random (0.5, 3.5))
  showRPS();
  btnEndGame.hide()
  btnReplay.hide()
}

function ShowResult()
{
  btnRock.hide()
  btnPaper.hide()
  btnScissors.hide()
  
  txtInst = ""
  
  btnReplay.show()
  btnEndGame.show()
}