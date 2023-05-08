const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.height = 800;
canvas.width = 800;

ctx.lineWidth = 2;
let isPainting = false;
function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting)

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
