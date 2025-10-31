//function gessGame() {
    //var gessNumber = 20;
    //var number = prompt("Введи число");
    //if (number>gessNumber) {
        //alert("Ваше число больше"); 
        //return gessGame()}
    //else if (number<gessNumber) {
        //alert("Ваше число меньше или равно"); 
        //return gessGame()}
    //else {
        //return alert("Угадали!");
    //}
//}
//gessGame();
//function reminder(){
    //alert("Ты здесь слишком долго!");
    //window.location.href("");
    //window.close();
//}
//setTimeout(reminder,5000); 
function validFrom() {
    var name = document.getElementById("name").value;
    console.log(name);
     var passwod = document.getElementById("passwod").value;
    console.log(passwod);
    var reg_name = /^[а-яёA-Z]+$/i;
    var reg_pas = /^[0-9A-Z]{5,100}/i;
    if (reg_name.test(name)==false){
        alert("Ошибся в ФИО");
    }
    if (reg_pas.test(passwod)==false){
        alert("Ошибся в пароле");
    }
}
document.querySelector(".button").addEventListener("click",validFrom);
    
    