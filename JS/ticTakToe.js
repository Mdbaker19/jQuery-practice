$(document).ready(function(){
    "use strict";

    let tL = $("#tL");
    let tM = $("#tM");
    let tR = $("#tR");
    let mL = $("#mL");
    let mM = $("#mM");
    let mR = $("#mR");
    let bL = $("#bL");
    let bM = $("#bM");
    let bR = $("#bR");

    let onePlayer = $("#onePlayer");
    let isOnePlayer = false;
    let isPlayerTurn = true;
    onePlayer.click(function(){
        $(this).css("color", "#59A96A");
        isOnePlayer = true;
        $(".spot").click(function () {
            if (!gameOver) {
                if(isPlayerTurn){
                    if ($(this).html().length < 1) {
                        $(this).text(change());
                        isPlayerTurn = false;
                        for (let i = 0; i < grid.length; i++) {
                            if ($(this).attr("id") === grid[i].location) {
                                grid[i].value = $(this).html();
                                grid[i].isOption = false;
                            }
                        }
                    }
                } else ai();
            }
            checkForWin();
        });
    });


    let twoPlayer = $("#twoPlayer");
    let isTwoPlayer = false;


    let newGame = $("#newGame");
    newGame.click(function (){
        window.location.reload();
    });



    let count = 0;
    let gameOver = false;

    let grid = [
        {
            isOption: true,
            value: "",
            location: tL.attr("id")
        },
        {
            isOption: true,
            value: "",
            location: tM.attr("id")
        },
        {
            isOption: true,
            value: "",
            location: tR.attr("id")
        },
        {
            isOption: true,
            value: "",
            location: mL.attr("id")
        },
        {
            isOption: true,
            value: "",
            location: mM.attr("id")
        },
        {
            isOption: true,
            value: "",
            location: mR.attr("id")
        },
        {
            isOption: true,
            value: "",
            location: bL.attr("id")
        },
        {
            isOption: true,
            value: "",
            location: bM.attr("id")
        },
        {
            isOption: true,
            value: "",
            location: bR.attr("id")
        }
    ];





    function ai(){
        if(!isPlayerTurn){

            for(let i = 0; i < grid.length; i++){
                if(grid[i].isOption){
                    grid[i].value = "X";
                    isPlayerTurn = true;
                }
            }

        }
    }


    function check2InARow(a, b, c){
        let playInThirdSpot = false;
        if(a.value === "O" && b.value === "O"){
            playInThirdSpot = c;
        }
        return playInThirdSpot
    }







    function change(){
        let char;
        count++;
        if(count % 2 !== 0){
            char = "O";
        } else char = "X";
        return char;
    }

    function allEqual(a, b, c){
        return ((a === b && b === c) && a.length > 0 && b.length > 0 && c.length > 0);
    }

    function checkForWin(){
        let tl = tL.html();
        let tm = tM.html();
        let tr = tR.html();
        let ml = mL.html();
        let mm = mM.html();
        let mr = mR.html();
        let bl = bL.html();
        let bm = bM.html();
        let br = bR.html();

        if(allEqual(tl, tm, tr)){
            colorChangeFirst(tL);
            colorChangeSecond(tM);
            colorChangeThird(tR);
            gameOver = true;
        } else if(allEqual(ml, mm, mr)){
            colorChangeFirst(mL);
            colorChangeSecond(mM);
            colorChangeThird(mR);
            gameOver = true;
        } else if(allEqual(bl, bm, br)){
            colorChangeFirst(bL);
            colorChangeSecond(bM);
            colorChangeThird(bR);
            gameOver = true;
        } else if(allEqual(tl, mm, br)){
            colorChangeFirst(tL);
            colorChangeSecond(mM);
            colorChangeThird(bR);
            gameOver = true;
        } else if(allEqual(tl, ml, bl)){
            colorChangeFirst(tL);
            colorChangeSecond(mL);
            colorChangeThird(bL);
            gameOver = true;
        } else if(allEqual(tm, mm, bm)){
            colorChangeFirst(tM);
            colorChangeSecond(mM);
            colorChangeThird(bM);
            gameOver = true;
        } else if(allEqual(tr, mr, br)){
            colorChangeFirst(tR);
            colorChangeSecond(mR);
            colorChangeThird(bR);
            gameOver = true;
        } else if(allEqual(bl, mm, tr)){
            colorChangeFirst(bL);
            colorChangeSecond(mM);
            colorChangeThird(tR);
            gameOver = true;
        }
    }

    function colorChangeFirst(a){
        a = a.css({
            color: "#59A96A",
            backgroundColor: "#60435F"
        });
        return a;
    }
    function colorChangeSecond(a){
        a = a.css({
            color: "#59A96A",
            backgroundColor: "#60435F"
        });
        return a;
    }
    function colorChangeThird(a){
        a = a.css({
            color: "#59A96A",
            backgroundColor: "#60435F"
        });
        return a;
    }
});