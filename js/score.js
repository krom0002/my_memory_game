let moves = 0;
const moves_Text = document.querySelector('.moves');
let star = 3;
let star_List = document.querySelectorAll('.stars li');
let win = 0;

// counts and writes moves
function move_count() {

    moves++;
    moves_Text.innerHTML = "Moves : " + moves;
    hide_Star();
}

// checks move count to keep star score
function hide_Star() {

    if (moves == 10) {
        star_List[2].style.display = 'none';
        star--;
    } else if (moves == 20) {
        star_List[1].style.display = 'none';
        star--;
    } else if (moves == 30) {
        star_List[0].style.display = 'none';
        star--;
    }
}

// shows game alert
function game_Alert() {
    const modal = document.querySelector('.game_Alet');
    modal.classList.toggle('hide');
}

//checks match count to win and endgame
function game_Over() {

    // can change match_count for happy testing
    if (match_count === 8) {
        win = 1;
        game_Alert();
        alert_close_x();
        add_stats();
    }
}

// write stats to game alert
// help form cranford walk through
function add_stats() {

    const alert_Time = document.querySelector('.alert_Time');
    const stat_time = document.querySelector('.timer_1').innerHTML;
    let alert_Stars = document.querySelector('.alert_Stars');
    let alert_Moves = document.querySelector('.alert_Moves');

    alert_Time.innerHTML = `Time = ${stat_time}`;
    alert_Stars.innerHTML = `Stars = ${star}`;
    alert_Moves.innerHTML = `Moves = ${moves}`;
}

// sets click event on alert close button
function alert_close_x() {

    // select alert close button element
    let alert_close = document.querySelector(".alert_Close");

    // add click event to alert close button
    alert_close.addEventListener("click", close_alert);
}

// closes alert with x button
function close_alert() {
    console.log('alert click');
    game_Alert();
}

// sets click event on alert reset button
function alert_reset_click() {
    // select alert reset button element
    let alert_reset_button = document.querySelector(".alert_Button");

    // add click event to reset button
    alert_reset_button.addEventListener("click", reset_game);
}
alert_reset_click();


