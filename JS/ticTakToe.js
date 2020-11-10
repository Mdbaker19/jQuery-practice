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

    let count = 0;

    function change(){
        let char;
        count++;
        if(count % 2 !== 0){
            char = "O";
        } else char = "X";
        return char;
    }

    // let allowMove = [true, true, true, true, true, true, true, true, true];
    $(".spot").click(function(){
        $(this).text(change()).css("fontSize", "10em");
        // forFindingValue(this);
        // checkForWin();
        // logAll()
    });

    // function forFindingValue(x){
    //     console.log($(x).text());
    // }


    // function logAll(){
    //     console.log($("#tL").text().length);
    //     console.log(tM);
    //     console.log(tR);
    //     console.log(mL);
    //     console.log(mM);
    //     console.log(mR);
    //     console.log(bL);
    //     console.log(bM);
    //     console.log(bR);
    // }

    function allEqual(a, b, c){
        return ((a === b && b === c) && a.length > 0 && b.length > 0 && c.length > 0);
    }

    function checkForWin(){
        let won = false;

        if(allEqual(tL, tM, tR)){
            won = true;
        } else if(allEqual(mL, mM, mR)){
            won = true;
        } else if(allEqual(bL, bM, bR)){
            won = true;
        } else if(allEqual(tL, mM, bR)){
            won = true;
        } else if(allEqual(tR, mM, bL)){
            won = true;
        } else if(allEqual(tL, mL, bL)){
            won = true;
        } else if(allEqual(tM, mM, bM)){
            won = true;
        } else if(allEqual(tR, mR, bR)){
            won = true;
        }
        if(won){
            alert("winner")
        }
    }



});