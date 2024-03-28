function navCel(){
    let navCel = document.querySelector(".nav-cel");
    navCel.classList.toggle("active");
}
function activeProyMa(){
    let btn1 = document.querySelector(".proy-opc-btn1");
    let btn2 = document.querySelector(".proy-opc-btn2");
    let btn3 = document.querySelector(".proy-opc-btn3");
    let ma = document.querySelector(".proy-fila-ma");
    let lp = document.querySelector(".proy-fila-lp");
    let ot = document.querySelector(".proy-fila-ot");
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    ma.classList.remove("disabled");
    ma.classList.add("active")
    lp.classList.remove("active");
    lp.classList.add("disabled");
    ot.classList.remove("active");
    ot.classList.add("disabled");
}
function activeProyLg(){
    let btn1 = document.querySelector(".proy-opc-btn1");
    let btn2 = document.querySelector(".proy-opc-btn2");
    let btn3 = document.querySelector(".proy-opc-btn3");
    let ma = document.querySelector(".proy-fila-ma");
    let lp = document.querySelector(".proy-fila-lp");
    let ot = document.querySelector(".proy-fila-ot");
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
    ma.classList.remove("active");
    ma.classList.add("disabled");
    lp.classList.remove("disabled");
    lp.classList.add("active");
    ot.classList.remove("active");
    ot.classList.add("disabled");
}
function activeProyOt(){
    let btn1 = document.querySelector(".proy-opc-btn1");
    let btn2 = document.querySelector(".proy-opc-btn2");
    let btn3 = document.querySelector(".proy-opc-btn3");
    let ma = document.querySelector(".proy-fila-ma");
    let lp = document.querySelector(".proy-fila-lp");
    let ot = document.querySelector(".proy-fila-ot");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
    ma.classList.remove("active");
    ma.classList.add("disabled");
    lp.classList.remove("active");
    lp.classList.add("disabled");
    ot.classList.remove("disabled");
    ot.classList.add("active");
}
function move(){
    let heroImg = document.querySelector(".hero-img");
    let heroTxt = document.querySelector(".hero-txt");
    heroImg.classList.toggle("active");
    heroTxt.classList.toggle("active");
}
function moveProy1(){
    let cel1 = document.querySelector(".proy-opc-cel1");
    let cel2 = document.querySelector(".proy-opc-cel2");
    cel1.classList.toggle("active");
    cel2.classList.toggle("active");
}
function moveProy2(){
    let cel2 = document.querySelector(".proy-opc-cel2");
    let cel3 = document.querySelector(".proy-opc-cel3");
    cel2.classList.toggle("active2");
    cel3.classList.toggle("active");
}
function moveProy3(){
    let cel2 = document.querySelector(".proy-opc-cel2");
    let cel3 = document.querySelector(".proy-opc-cel3");
    cel2.classList.remove("active2");
    cel3.classList.remove("active");
}