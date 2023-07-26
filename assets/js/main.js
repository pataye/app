//Top Nav Hidden

/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("myTopnav").style.top = "0";
    } else {
        document.getElementById("myTopnav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 50) {
        document.getElementById("myTopnav").classList.remove("no-bg");
        document.getElementById("myBtnnav").classList.remove("transparent");
    } else {
        document.getElementById("myTopnav").classList.add("no-bg");
    }
}
