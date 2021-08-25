

function check(){
    get_answere=document.getElementById("input_check_box").value;
    answere=get_answere.toLowerCase();
console.log("answere in lower case = "+answere);
document.getElementById("update").innerHTML="<input>number; "=number;
if(answere==number){
    if(answere_turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}   
if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_question").innerHTML="question_turn-"+player2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="question_turn-"+player1_name;
}

if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_answere").innerHTML="answere_turn-"+player2_name;
}
else{
    answere_turn="player1";
    document.getElementById("player_answere").innerHTML="answere_turn-"+player1_name;
}
document.getElementById("output").innerHTML="";
}