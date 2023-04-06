var src = "https://1.bp.blogspot.com/-TDpxtRZjMWQ/W0zVAn3AHRI/AAAAAAAAAXc/u3ISkp0wOecMkhDFEh3acb9LSwQ972eqgCK4BGAYYCw/s1600/182443.jpg";
if(window.location.hash){
    src = window.location.hash.slice(1);
}
console.log(src);
fetch(src).then((r)=>r.blob()).then((b)=>{
    src = URL.createObjectURL(b);
    var img = new Image();
    img.src = src;
    canvas = document.getElementById("canvas");
    canvas.width = '300';
    canvas.height = '300';
    console.log(img.width,img.height)
    ctx = canvas.getContext("2d");
    img.onload = () => {
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        color();
    }
})


document.getElementById("brightness").oninput = (e) => {
    var percent = e.target.value;
    canvas = document.getElementById("canvas");
    canvas.style.filter = `brightness(${percent}%)`;
}


document.getElementById("contrast").oninput = (e) => {
    var percent = e.target.value;
    canvas = document.getElementById("canvas");
    canvas.style.filter = `contrast(${percent}%)`;
}

document.getElementById("blur").oninput = (e) => {
    var percent = e.target.value;
    canvas = document.getElementById("canvas");
    canvas.style.filter = `blur(${percent}px)`;
}

document.getElementById("grayscale").oninput = (e) => {
    var percent = e.target.value;
    canvas = document.getElementById("canvas");
    canvas.style.filter = `grayscale(${percent}%)`;
}

function color(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    data=ctx.getImageData(0,0,canvas.width,canvas.height).data;
    r=0;
    b=0;
    g=0;
    for (var i =0; i<data.length; i+=4)
    {
        if (data[i]>data[i+1]+ data[i+2]){
            r++;
        }
        if (data[i+1]>data[i]+ data[i+2]){
            g++;
        }
        if (data[i+2]>data[i]+ data[i+1]){
            b++;
        }        
    }
    var clr = document.getElementById("clr");
    if (r > data.length/8)
    {
        clr.innerHTML= "Image is reddish";
    }
    else if(b > data.length/8)
    {
        clr.innerHTML= "Image is blueish";

    }
    else if (g > data.length/8)
    {
        clr.innerHTML= "Image is greenish";
    }
    else {
        clr.innerHTML = " neither reddish blueish or greenish";
    }
}

