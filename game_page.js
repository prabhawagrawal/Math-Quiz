player1_Name = localStorage.getItem("Player1-Name");
player2_Name = localStorage.getItem("Player2-Name");

updated_player1_score = 0;
updated_player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_Name + " : ";
document.getElementById("player2_name").innerHTML = player2_Name + " : ";

document.getElementById("player2_score").innerHTML = updated_player2_score;
document.getElementById("player1_score").innerHTML = updated_player1_score;

document.getElementById("player_q-turn").innerHTML = player1_Name;
document.getElementById("player_a-turn").innerHTML = player2_Name;

function send(){
    number1 = document.getElementById('num_1').value;
    number2 = document.getElementById('num_2').value;
    actual_answer = number1 * number2;

    question_number = "<h4>" + number1 + " * " + number2 + "</h4>";
    input_box = "<br>Answer: <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("num_1").value = "";
    document.getElementById("num_2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;

    if(get_answer == actual_answer){
        if(answer_turn == "player1"){
            updated_player1_score = updated_player1_score + 1;
            document.getElementById("player1_score").innerHTML = updated_player1_score;
            document.getElementById("player1_name").innerHTML = player1_Name;
        }
        else{
            updated_player2_score = updated_player2_score + 1;
            document.getElementById("player2_score").innerHTML = updated_player2_score;
            document.getElementById("player2_name").innerHTML = player2_Name;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_q-turn").innerHTML = player2_Name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_q-turn").innerHTML = player1_Name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_a-turn").innerHTML = player2_Name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_a-turn").innerHTML = player1_Name;
    }
}