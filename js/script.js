
let calcWidth = 15;
function changeWidth() {
if (calcWidth >= 100) {
alert("Загрузка завершена");}
	$("#my-progress-bar").width(calcWidth+"%");

}

function clickButton1() {
	calcWidth += 1;
	changeWidth();
}

function clickButton2() {
	calcWidth += 5;
changeWidth();
}

function clickButton3() {
	calcWidth += 7;
changeWidth();
}

function init() {$("#button1").click(clickButton1), $("#button2").click(clickButton2), $("#button3").click(clickButton3); }
$(document).ready(init);
