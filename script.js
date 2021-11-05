function addUser(){
    player1_Name = document.getElementById("player-1").value;
    player2_Name = document.getElementById("player-2").value;

    localStorage.setItem("Player1-Name", player1_Name);
    localStorage.setItem("Player2-Name", player2_Name);

    window.location.replace("game_page.html");
}