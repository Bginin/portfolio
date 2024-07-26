//  const name = prompt(`What is your name?`)
//  alert(`Welcome ${name}!!! I hope you are having a wonderful day!`)
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// document.title = "Title";

// document.body.innerHTML = "<h1>Hello, world</h1>";
// const treeHouse = document.querySelector("h5");
// body.addEventListener("click", () => {
//   treeHouse.insertAdjacentElement("afterbegin", `<h5>This is cool</h5>`);

// if (treeHouse.document === "front-end-web-dev") {
//   body.innerHTML = `<img src="img/css-3.svg">`;
// } else {
//   body.innerHTML = `none`;
// }
// });
// body.removeEventListener("mouseout");

// let frontEnd = document.getElementById("front-end-web-dev");

// frontEnd.addEventListener("mouseover", () => {
//   frontEnd = `<h1>Hello</h1>`;
// });

// document.getElementById(
//   "front-end-web-dev"
// ).innerHTML = `<img height="20px" width="20px" src="img/css-3.svg">`;

// const treeHouse = document.querySelector("h2"); //This will remove the content from the HTML.
// body.addEventListener("mouseover", () => {
//   treeHouse.remove();
// });
// *** Show hide Function ****
// function showhide() {
//   var div = document.getElementById("about-me");
//   if (div.style.display !== "block") {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
// }

// function showhideTwo() {
//   var div = document.getElementById("projects-hide");
//   if (div.style.display !== "block") {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
// }

// const canvas = document.getElementById("cw");
// const context = canvas.getContext("2d");
// context.globalAlpha = 0.5;

// const cursor = {
//   x: innerWidth / 2,
//   y: innerHeight / 2,
// };

// let particlesArray = [];

// generateParticles(101);
// setSize();
// anim();

// addEventListener("mousemove", (e) => {
//   cursor.x = e.clientX;
//   cursor.y = e.clientY;
// });

// addEventListener(
//   "touchmove",
//   (e) => {
//     e.preventDefault();
//     cursor.x = e.touches[0].clientX;
//     cursor.y = e.touches[0].clientY;
//   },
//   { passive: false }
// );

// addEventListener("resize", () => setSize());

// function generateParticles(amount) {
//   for (let i = 0; i < amount; i++) {
//     particlesArray[i] = new Particle(
//       innerWidth / 2,
//       innerHeight / 2,
//       4,
//       generateColor(),
//       0.02
//     );
//   }
// }

// function generateColor() {
//   let hexSet = "0123456789ABCDEF";
//   let finalHexString = "#";
//   for (let i = 0; i < 6; i++) {
//     finalHexString += hexSet[Math.ceil(Math.random() * 15)];
//   }
//   return finalHexString;
// }

// function setSize() {
//   canvas.height = innerHeight;
//   canvas.width = innerWidth;
// }

// function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
//   this.x = x;
//   this.y = y;
//   this.particleTrailWidth = particleTrailWidth;
//   this.strokeColor = strokeColor;
//   this.theta = Math.random() * Math.PI * 2;
//   this.rotateSpeed = rotateSpeed;
//   this.t = Math.random() * 150;

//   this.rotate = () => {
//     const ls = {
//       x: this.x,
//       y: this.y,
//     };
//     this.theta += this.rotateSpeed;
//     this.x = cursor.x + Math.cos(this.theta) * this.t;
//     this.y = cursor.y + Math.sin(this.theta) * this.t;
//     context.beginPath();
//     context.lineWidth = this.particleTrailWidth;
//     context.strokeStyle = this.strokeColor;
//     context.moveTo(ls.x, ls.y);
//     context.lineTo(this.x, this.y);
//     context.stroke();
//   };
// }

// function anim() {
//   requestAnimationFrame(anim);

//   context.fillStyle = "rgb(0 0 0 / 5%)";
//   context.fillRect(0, 0, canvas.width, canvas.height);

//   particlesArray.forEach((particle) => particle.rotate());
// }
