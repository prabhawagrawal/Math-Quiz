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
    document.getElementById("num2").value = "";
}