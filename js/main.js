// Night Mode
function nightMode(){
    let body = document.querySelector(".body");
    body.classList.toggle("night");
}
// Obtenemos el elemento
var pHtml = document.querySelector(".portj-html");
var pCss = document.querySelector(".portj-css");
var pJs = document.querySelector(".portj-js");
var pMysql = document.querySelector(".portj-Mysql");
var pPhp = document.querySelector(".portj-php");
var pPy = document.querySelector(".portj-py");
var pJava = document.querySelector(".portj-java");

// Inicializamos el contador
var counter1 = 40;
var counter2 = 40;
var counter3 = 40;
var counter4 = 40;
var counter5 = 40;
var counter6 = 30;
var counter7 = 20;

// Creamos el observer
var observer = new IntersectionObserver(function(entries){
    // Si el elemento está en la pantalla
    if (entries[0].isIntersecting === true){
        // Creamos un intervalo que se ejecuta cada 50 milisegundos
        var interval1 = setInterval(function(){
            // Incrementamos el contador
            counter1++;

            // Actualizamos el contenido del elemento p
            pHtml.innerHTML = counter1 + "%";

            // Si el contador llega a 90, detemos el intervalo
            if (counter1 === 90){
                clearInterval(interval1);
            }
        }, 30);

        var interval2 = setInterval(function(){
            counter2++;

            pCss.innerHTML = counter2 + "%";

            if (counter2 === 80){
                clearInterval(interval2);
            }
        }, 40);

        var interval3 = setInterval(function(){
            counter3++;

            pJs.innerHTML = counter3 + "%";

            if (counter3 === 70){
                clearInterval(interval3);
            }
        }, 50);

        var interval4 = setInterval(function(){
            counter4++;

            pMysql.innerHTML = counter4 + "%";

            if (counter4 === 65){
                clearInterval(interval4);
            }
        }, 50);

        var interval5 = setInterval(function(){
            counter5++;

            pPhp.innerHTML = counter5 + "%";

            if (counter5 === 55){
                clearInterval(interval5);
            }
        }, 50);

        var interval6 = setInterval(function(){
            counter6++;

            pPy.innerHTML = counter6 + "%";

            if (counter6 === 50){
                clearInterval(interval6);
            }
        }, 50);

        var interval7 = setInterval(function(){
            counter7++;

            pJava.innerHTML = counter7 + "%";

            if (counter7 === 45){
                clearInterval(interval7);
            }
        }, 50);

        // Desconectamos el observer
        observer.disconnect();
    }
}, {threshold: [0]});

// Observamos el elemento p
observer.observe(pHtml);
observer.observe(pCss);
observer.observe(pJs);
observer.observe(pMysql);
observer.observe(pPhp);
observer.observe(pPy);
observer.observe(pJava);

function navCel(){
    let navCel = document.querySelector(".nav-cel");
    navCel.classList.toggle("active");
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