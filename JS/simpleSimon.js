$(document).ready(function(){

   let correctCounter = 1;
   let gameStarted = false;
   let ranAllTimes = false;
   let sequence = [];
   let guess = [];
   let colorGroup = $(".color");

   $("#start").on("click", function(){
       if(!gameStarted) {
           //=====THIS FUNCTION MAY CHANGE======//
           colorTimeOut();
           gameStarted = true;
       }
   });
   //=========APPLYING YOUR CLICKED GUESS TO YOUR GUESS SET===========//
    $(colorGroup).on("click", function (){
        guess.push($(this)[0].id.toString());
        console.log(guess);
    });
    //===========THESE THREE FUNCTIONS WILL PROBABLY STAY THE SAME OTHER THAN HOW THE LOOP AND INTERVAL IS SET UP======//
    function runGame(){
        for (let i = 0; i < correctCounter; i++) {
            let random = Math.floor(Math.random() * 4);
            cycle(random);
            console.log(sequence);
        }
        ranAllTimes = true;
    }
    function cycle(x){
        sequence.push(colorGroup[x].id);
        $(colorGroup[x]).css("opacity", "1");
    }
    function offCycle(){
        for(let i = 0; i < 4; i++){
            $(colorGroup[i]).css("opacity", ".5");
        }
    }



   function colorTimeOut() {
       for(let i = 0; i < correctCounter; i++) {
           var running = setInterval(runGame, 800);
       }
       if(ranAllTimes) {
           clearInterval(running);
           offCycle();
       }
   }







    function checkInputs(you, seq){
        let compare = 0;
        let requirement = you.length;
        for(let i = 0; i < you.length; i++){
            if(you[i] === seq[i]){
                compare++;
            }
        }
        return compare === requirement;
    }
});