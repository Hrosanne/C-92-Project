player_1 = localStorage.getItem("player_1");
player_2 = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player_1 + " : ";
document.getElementById("player_2").innerHTML = player_2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2;
console.log("Entered in JS")

function send(){
    number_1 = document.getElementById("number1").value;
    number_2 = document.getElementById("number2").value;
    actual_ans = parseInt(number_1) * parseInt(number_2);
    
    question_number = "<h4>" + number_1 + "x" + number_2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_ans){
        if(answer_turn == "player_1"){
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score; 
        }
        else{
            update_player2_score = player1_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score; 
        }


        if(question_turn == "player_1"){
            question_turn = "player_2";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player_2;
        }
        else{
            question_turn = "player_1";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player_1;
        }
    }
}
