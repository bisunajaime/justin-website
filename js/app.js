var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("mainNav").style.top = "0";
    } else {
        var after = document.getElementById("mainNav");
        after.style.transition = "0.25s";
        after.style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
}