const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const modeBtn = document.querySelector("#mode-btn");
const resetBtn = document.querySelector("#reset-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const file = document.querySelector("#file");
const textInput = document.querySelector("#text");

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;
// 패스 그리기
function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
}
// 라인 두께 변경
function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}
// 컬러 스포이드 변경
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}
// 지정 컬러 변경
function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}
function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}
// fill 색상 채우기
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
// reset 지우기 버튼 생성
function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}
function onFileChange(event) {
  const files = event.target.files[0];
  const url = URL.createObjectURL(files);
  const img = new Image();
  img.src = url;
  img.onload = function () {
    ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  };
}
function onDoubleClick(event) {
  const text = textInput.value;
  ctx.lineWidth = 1;
  ctx.strokeText(text, event.offsetX, event.offsetY);
}
canvas.onmousemove = onMove;
canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
resetBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
file.addEventListener("change", onFileChange);

// *컬러 라인
// ctx.lineWidth = 2;
// const colors = [
//   "#ff3838",
//   "#ffb8b8",
//   "#c56cf0",
//   "#ff9f1a",
//   "#fff200",
//   "#32ff7e",
//   "#7efff5",
// ];
// function onclick(event) {
//   ctx.beginPath()
//   ctx.moveTo(0,0);
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }
// canvas.addEventListener("click", onclick);

// ctx.moveTo(50, 50); //좌표를 0,0에서 움직이게 해줌
// ctx.lineTo(150, 50); //해당 좌표에서 라인을 그려줌
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill();

// *사람만들기
// ctx.fillRect(215, 200, 15, 100);
// ctx.fillRect(350, 200, 15, 100);
// ctx.fillRect(260, 200, 60, 200);

// ctx.arc(290, 100, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath()
// ctx.fillStyle='red';
// ctx.arc(270, 80, 8, Math.PI, 2 * Math.PI);
// ctx.arc(300+10, 80, 8, Math.PI, 2 * Math.PI);
// ctx.fill()

// ctx.beginPath(); //경로를 나누다
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.strokeRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fillStyle="red"
// ctx.fill()

// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// ctx.rect(350, 350, 100, 100); //새 경로
// ctx.rect(450, 450, 100, 100); //새 경로
// ctx.fillStyle = "red";
// ctx.fill();
