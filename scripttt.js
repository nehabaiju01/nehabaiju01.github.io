// question 1
var h1=document.getElementById('h1')
h1.addEventListener('mouseover',function(){
    h1.style.color='red'
})
h1.addEventListener('mouseout',function(){
    h1.style.color='black'
})
    
// question 2
var p1=document.getElementById('p1')
p1.addEventListener('click',function(){
    p1.style.background='gray'
})

//question 3
var p2=document.getElementById('p2')
p2.addEventListener('click',function(){
    var p=p2.textContent
    if(!p.includes('clicked')){
        p2.textContent=' clicked '+p
    }
})

//question 4
var c2= document.createTextNode(" double clicked");
var p3=document.getElementById('p3')
p3.addEventListener('dblclick',function(){
    p3.appendChild(c2); 
})

//question 5
var p4=document.getElementById('p4')
p4.addEventListener('dblclick',function(){
    p4.style.fontWeight='bold'
})

// question 6
var a=document.getElementById('anchor')
a.addEventListener('click',function(){
    a.style.border='5px solid black'
})

// question 7
var li=document.getElementsByTagName('li')
for(var i=0;i<li.length;i++){
    li[i].addEventListener('click',function(){
        //font style change to italics
        for(var i=0;i<li.length;i++)
        {
            li[i].style.fontStyle='italic'
        }
    })
}

// question 8
window.addEventListener('resize',function(){
    document.title='Resized'
})

// question 9
window.addEventListener('resize',function(){
    var img=document.createElement('img')
    img.src='https://www.w3schools.com/js/pic_bulbon.gif'
    document.body.appendChild(img)
})

// question 10
window.addEventListener('resize',function(){
    var p=document.getElementsByTagName('p')
    p[0].remove()
})

// question 11
var img=document.getElementsByTagName('img')
for(var i=0;i<img.length;i++){
    img[i].addEventListener('click',function(){
        this.style.filter='grayscale(100%)'
    })
}

// question 12
var img=document.getElementsByTagName('img')
for(var i=0;i<img.length;i++){
    img[i].addEventListener('dblclick',function(){
        this.style.filter='grayscale(100%)'
    })
}