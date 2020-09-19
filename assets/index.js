const canvas = document.getElementById("align");
const ctx = canvas.getContext("2d");

window.addEventListener("resize",resizecanvas)

function resizecanvas(){
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);
}
resizecanvas();


//canvas
// Add behind elements.
ctx.fillStyle = '#f7f7f7';
ctx.fillRect(0,0,canvas.width, canvas.height);

ctx.fillStyle = "black";

let brushColor = "black";
let brushThick = 3;

function drawing(){

    document.getElementById("colors").addEventListener("change",function(){
        brushColor = this.value;
    })
    
    document.getElementById("thick").addEventListener("change",function(){
        brushThick = this.value;
    })
    
    let painting = false;
    
    function paintingStart(e){
        painting = true;
        draw(e)
    }
    function paintingEnd(e){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(painting == false) return;
        let x = e.clientX;
        let y = e.clientY - canvas.offsetTop;
    
        ctx.lineWidth = brushThick;
        ctx.lineCap = "round";
        ctx.lineTo(x, y);
        ctx.strokeStyle = brushColor;
        ctx.stroke();
    }
    canvas.addEventListener("mousedown",paintingStart);
    canvas.addEventListener("mouseup",paintingEnd);
    canvas.addEventListener("mousemove",draw); 
}




//eraser canvas


function eraserss(){
    // document.getElementById("era").addEventListener("change",function(){
    //     eraserThick = this.value;
    // })
    let eraserThick = 13;

    let erasing = false;
    
    function erasingStart(e){
        erasing = true;
        erase(e)
    }
    function erasingEnd(e){
        erasing = false;
        ctx.beginPath();
    }
    function erase(e){
        if(erasing == false && eraserThick === 13) return;
        let x = e.clientX;
        let y = e.clientY - canvas.offsetTop;
    
        ctx.lineWidth = eraserThick;
        ctx.lineCap = "round";
        ctx.lineTo(x, y);
        ctx.strokeStyle = "#f7f7f7";
        ctx.stroke();
    }
    canvas.addEventListener("mousedown",erasingStart);
    canvas.addEventListener("mouseup",erasingEnd);
    canvas.addEventListener("mousemove",erase);
}

//clear canvas
// bind event handler to clear button
document.getElementById('clear').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, false);



  //this app is designed and developed by mohamed shibin
