const colors = ["#d1a0a0", "#d1a1a0", "#d1a2a0", "#d1a3a0", "#d1a4a0", "#d1a5a0", "#d1a6a0", "#d1a7a0", "#d1a8a0", "#d1a9a0", "#d1aaa0", "#d1aba0", "d1aca0", "d1ada0", "#d1aea0", "#d1afa0", "#d1b0a0", "#d1b1a0", "#d1b2a0", "#d1b3a0", "#d1b4a0", "#d1b5a0", "#d1b6a0", "#d1b7a0", "#d1b8a0", "#d1b9a0", "#d1baa0", "#d1bba0", "#d1bca0", "#d1bda0", "#d1bea0", "#d1bfa0", "#d1c0a0", "#d1c1a0", "#d1c2a0", "#d1c3a0", "#d1c4a0", "#d1c5a0", "#d1c6a0", "#d1c7a0", "#d1c8a0", "#d1c9a0", "#d1caa0", "#d1cba0", "#d1cca0", "#d1cda0", "#d1cea0", "#d1cfa0", "#d1d0a0", "#d1d1a0", "#cfd1a0", "#ced1a0", "#cdd1a0", "#ccd1a0", "#cbd1a0", "#cad1a0", "#c9d1a0", "#c8d1a0", "#c7d1a0", "#c6d1a0", "#c5d1a0", "#c4d1a0", "#c3d1a0", "#c2d1a0", "#c1d1a0", "#c0d1a0", "#bfd1a0", "#bed1a0", "#bdd1a0", "#bcd1a0", "#bbd1a0", "#bad1a0", "#b9d1a0", "#b8d1a0", "#b7d1a0", "#b6d1a0", "#b5d1a0", "#b4d1a0", "#b3d1a0", "#b2d1a0", "#b1d1a0", "#b0d1a0", "#afd1a0", "#aed1a0", "#add1a0", "#acd1a0", "#abd1a0", "#aad1a0", "#a9d1a0", "#a8d1a0", "#a7d1a0", "#a6d1a0", "#a5d1a0", "#a4d1a0", "#a3d1a0", "#a2d1a0", "#a1d1a0", "#a0d1a0", "#a0d1a1", "#a0d1a2", "#a0d1a3", "#a0d1a4", "#a0d1a5", "#a0d1a6", "#a0d1a7", "#a0d1a8", "#a0d1a9", "#a0d1aa", "#a0d1ab", "#a0d1ac", "#a0d1ad", "#a0d1ae", "#a0d1af", "#a0d1b0", "#a0d1b1", "#a0d1b2", "#a0d1b3", "#a0d1b4", "#a0d1b5", "#a0d1b6", "#a0d1b7", "#a0d1b8", "#a0d1b9", "#a0d1ba", "#a0d1bb", "#a0d1bc", "#a0d1bd", "#a0d1be", "#a0d1bf", "#a0d1c0", "#a0d1c1", "#a0d1c2", "#a0d1c3", "#a0d1c4", "#a0d1c5", "#a0d1c6", "#a0d1c7", "#a0d1c8", "#a0d1c9", "#a0d1ca", "#a0d1cb", "#a0d1cc", "#a0d1cd", "#a0d1ce", "#a0d1cf", "#a0d1d0", "#a0d1d1", "#a0d0d1", "#a0cfd1", "#a0ced1", "#a0cdd1", "#a0ccd1", "#a0cbd1", "#a0cad1", "#a0c9d1", "#a0c8d1", "#a0c7d1", "#a0c6d1", "#a0c5d1", "#a0c4d1", "#a0c3d1", "#a0c2d1", "#a0c1d1", "#a0c0d1", "#a0bfd1", "#a0bed1", "#a0bdd1", "#a0bcd1", "#a0bbd1", "#a0bad1", "#a0b9d1", "#a0b8d1", "#a0b7d1", "#a0b6d1", "#a0b5d1", "#a0b4d1", "#a0b3d1", "#a0b2d1", "#a0b1d1", "#a0b0d1", "#a0afd1", "#a0aed1", "#a0add1", "#a0acd1", "#a0abd1", "#a0aad1", "#a0a9d1", "#a0a8d1", "#a0a7d1", "#a0a6d1", "#a0a5d1", "#a0a4d1", "#a0a3d1", "#a0a2d1", "#a0a1d1", "#a0a0d1", "#a1a0d1", "#a2a0d1", "#a3a0d1", "#a4a0d1", "#a5a0d1", "#a6a0d1", "#a7a0d1", "#a8a0d1", "#a9a0d1", "#aaa0d1", "#aba0d1", "#aca0d1", "#ada0d1", "#aea0d1", "#afa0d1", "#b0a0d1", "#b1a0d1", "#b2a0d1", "#b3a0d1", "#b4a0d1", "#b5a0d1", "#b6a0d1", "#b7a0d1", "#b8a0d1", "#b9a0d1", "#baa0d1", "#bba0d1", "#bca0d1", "#bda0d1", "#bea0d1", "#bfa0d1", "#c0a0d1", "#c1a0d1", "#c2a0d1", "#c3a0d1", "#c4a0d1", "#c5a0d1", "#c6a0d1", "#c7a0d1", "#c8a0d1", "#c9a0d1", "#caa0d1", "#cba0d1", "#cca0d1", "#cda0d1", "#cea0d1", "#cfa0d1", "#d0a0d1", "#d1a0d0", "#d1a0cf", "#d1a0ce", "#d1a0cd", "#d1a0cc", "#d1a0cb", "#d1a0ca", "#d1a0c9", "#d1a0c8", "#d1a0c7", "#d1a0c6", "#d1a0c5", "#d1a0c4", "#d1a0c3", "#d1a0c2", "#d1a0c1", "#d1a0c0", "#d1a0bf", "#d1a0bf", "#d1a0be", "#d1a0bd", "#d1a0bc", "#d1a0bb", "#d1a0ba", "#d1a0b9", "#d1a0b8", "#d1a0b7", "#d1a0b6", "#d1a0b5", "#d1a0b4", "#d1a0b3", "#d1a0b2", "#d1a0b1", "#d1a0b0", "#d1a0af", "#d1a0ae", "#d1a0ad", "#d1a0ac", "#d1a0ab", "#d1a0aa", "#d1a0a9", "#d1a0a8", "#d1a0a7", "#d1a0a6", "#d1a0a5", "#d1a0a4", "#d1a0a3", "#d1a0a2", "#d1a0a1", "#d1a0a0"];
const circles = [];
const stillCircles = [];
const tinyCircles = [];

function addCircleOnClick(){
    createCircle(randomNumber(0, window.innerWidth-200), randomNumber(0, (window.innerHeight * .66)));
}

function bounce(){
    for (let i = 0; i < circles.length; i++){ //circles Array
        let circle = circles[i];
        direction(circle);
        circle.x += circle.velocityX;
        circle.style.left = circle.x + "px";
        circle.velocityY += circle.gravity;
        circle.y += circle.velocityY;
        circle.style.top = circle.y + "px";
        if (circle.y >= window.innerHeight - circle.width && (Math.abs(circle.velocityY) < circle.gravity)){ //stops ball from bouncing
            circle.gravity = 0;
            circle.velocityY = 0;
        }
        if ((circle.velocityX > 0) && (circle.gravity == 0)) {//slows ball going right
            circle.velocityX -= circle.friction;
        } 
        if ((circle.velocityX < 0) && (circle.gravity == 0)) {//slows ball going left
            circle.velocityX += circle.friction; 
        }
        if (Math.floor((Math.abs(circle.velocityX) < circle.friction)) && (circle.gravity == 0)){
            notMoving(i); //moves ball to different array when movement reaches zero
        }
    }
    for (let i = 0; i < tinyCircles.length; i++){ //tinyCircles Array
        let circle = tinyCircles[i];
        direction(circle);
        circle.x += circle.velocityX;
        circle.style.left = circle.x + "px";
        circle.velocityY += circle.gravity;
        circle.y += circle.velocityY;
        circle.style.top = circle.y + "px";
        circle.width --;
        circle.style.width = circle.width + 'px';
        circle.style.height = circle.width + 'px';
        if (circle.y >= window.innerHeight - circle.width && (Math.abs(circle.velocityY) < circle.gravity)){ //stops ball from bouncing
            circle.gravity = 0;
            circle.velocityY = 0;
        }
        if ((circle.velocityX > 0) && (circle.gravity == 0)) {//slows ball going right
            circle.velocityX -= circle.friction;
        } 
        if ((circle.velocityX < 0) && (circle.gravity == 0)) {//slows ball going left
            circle.velocityX += circle.friction; 
        }
        if (circle.width <= 0){
            circle.remove(); 
            tinyCircles.splice(i, 1);
        }
    }
}

function colorChange(){
    for (let i = 0; i < circles.length; i++){
    let circle = circles[i];
    circle.colorIndex ++; //updates the color postion in the array
    if (circle.colorIndex > colors.length-1){
        circle.colorIndex = 0; //cycles the array back to the start
    }
    circle.style.backgroundColor = colors[circle.colorIndex]; //changes the color in the style.
    }
}

function createCircle(x, y,) {
    let circle = document.createElement("div");
    circle.className = "circle";
    circle.colorIndex = randomNumber(0, colors.length-1);
    circle.style.backgroundColor = colors[circle.colorIndex];
    circle.style.top = y + 'px';
    circle.style.left = x + 'px';
    circle.x = x;
    circle.y = y;
    circle.velocityX = randomNumber(-10, 10);
    circle.velocityY = randomNumber(1, 10);
    circle.width =  randomNumber(20, 200);
    circle.style.width = circle.width + 'px';
    circle.style.height = circle.style.width;
    circle.gravity = randomNumber(1, 5);
    circle.friction = 0.1 * randomNumber(1, 5);
    circles.push(circle);
    document.body.appendChild(circle);
    circle.addEventListener('click', popOnClick, 'true');
}

function direction(circle){
    if (circle.x + circle.width >= window.innerWidth || circle.x <= 0){
            circle.velocityX *= -1;
        }
    if (circle.y + circle.width >= window.innerHeight || circle.y <= 0){
            circle.velocityY *= -1;
        }
    if (circle.y + circle.width >= window.innerHeight){
            circle.y = window.innerHeight - circle.width;
        }
}
function notMoving(i){ //moves static circles to stillCircles array
    stillCircles.push(circles.splice(i, 1));

}
function popOnClick(event){
    event.stopImmediatePropagation();
    console.log(event);
    let halfCircle = Math.floor((event.srcElement.width/2) + 1);
    let eventX = event.srcElement.x + halfCircle/2;
    let eventY = event.srcElement.y + halfCircle/2;
    for (let i = 0;  i < (halfCircle/2); i++){
        let tinyCircle = document.createElement("div");
        tinyCircle.className = "circle"; 
        tinyCircle.style.top = eventY + 'px';
        tinyCircle.style.left = eventX + 'px';
        tinyCircle.style.backgroundColor = event.srcElement.style.backgroundColor;
        tinyCircle.x = eventX + halfCircle;
        tinyCircle.y = eventY;
        tinyCircle.velocityX = randomNumber(-10, 10);
        tinyCircle.velocityY = randomNumber(-40, -10);
        tinyCircle.width =  15;
        tinyCircle.style.width = tinyCircle.width + 'px';
        tinyCircle.style.height = tinyCircle.style.width;
        tinyCircle.gravity = randomNumber(1, 5);
        tinyCircles.push(tinyCircle);
        document.body.appendChild(tinyCircle);
    }
    event.srcElement.remove(); //removes the div
    if (stillCircles.includes(event.srcElement)){ //removes from stillCircle array
        var indexOf = stillCircles.indexOf(event.srcElement);
        stillCircles.splice(indexOf, 1);
    }
    if (circles.includes(event.srcElement)){ //removes from the circles array
        var index = circles.indexOf(event.srcElement);
        circles.splice(index, 1);
    }
}
function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

createCircle(randomNumber(0, window.innerWidth-200), randomNumber(0, (window.innerHeight * .66)));
setInterval(colorChange, 20);
setInterval(bounce, 20);

document.body.addEventListener('click', addCircleOnClick, true); //adds circles to the page when body is clicked