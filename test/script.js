// КНОПКА ПРОКРУТКИ ВВЕРХ

let scrollPosition;
let scrollTimer;
let btn = document.getElementById("scrollTop");

window.onscroll = function () {
    showScrollBtn();
}   

function showScrollBtn () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.bottom = "15px";
    } else {
        btn.style.bottom = "-1000px";
    }

}

window.onload = function () { 
    document.getElementById("scrollTop").onclick = function (){
        scrollPosition = window.pageYOffset;
        scrollToTop();
    }

    function scrollToTop() {
        if (scrollPosition > 0) {
            window.scrollTo(0, scrollPosition);
            scrollPosition = scrollPosition - 100;
            scrollTimer = setTimeout(scrollToTop, 20);
        } else {
            clearTimeout(scrollTimer);
            window.scrollTo(0, 0);
        }
    }
}

// ВСПЛЫВАЮЩИЕ ПОПАПЫ

let call = getElementById("callMeBack");
let acc = getElementById("callMeBack");

