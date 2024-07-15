document.addEventListener("DOMContentLoaded",function(){
    let guessInput=document.getElementById("userInput");
    let result=document.getElementById("result");
    let resetButton=document.getElementById("retry");
    let guessButton=document.getElementById("guess");
    let choiceleft=document.getElementById("choiceleft");
    let leftchoice=20;
    let userScore=document.getElementById("score");
    let highScore=200;

    let randomNumm=Math.floor(Math.random()*20);
    guessButton.addEventListener("click",function(){
      const userGuess=parseInt(guessInput.value);
      if((userGuess<1||userGuess>20))
      {
         result.textContent="PLEASE ENTER NUMBER BETWEEN 1 TO 20";
      }
      else if(userGuess==randomNumm)
      {
         result.textContent="CONGRATULATION🙌🎉 YOU GUESSED MY NUMBER";
         userScore.textContent="🏆YOUR SCORE: "+highScore;
         
         

      }
      else if(userGuess<randomNumm)
      {
         result.textContent="~TO LOW😓~"
         leftchoice--;
         highScore=highScore-10;

      }
      else if(userGuess>randomNumm){
         result.textContent="~TO HIGH😲~";
         leftchoice--
         highScore=highScore-10;
      }
      else{
         result.textContent="PLEASE ENTER THE NUMBER ";
         highScore=0;
      }
      choiceleft.textContent="⏱GUESSES LEFT :"+leftchoice;
      
      

    });
    resetButton.addEventListener("click",function(){
      randomNumm=Math.floor(Math.random()*20);
      guessInput.value="";
      result.textContent="";    
      leftchoice=20;
      highScore=200;
      // userScore=0;
      userScore.textContent="🏆 YOUR SCORE: 0";
      choiceleft.textContent="⏱ GUESSES LEFT : 0";
      

      });
    
 });


  
    


