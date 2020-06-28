window.onscroll = function () { myFunction(), myFunction2() };

var imgs = document.getElementsByTagName("img")


function myFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        imgs[0].className = "test";
        imgs[1].className = "test";
        imgs[2].className = "test";
        imgs[3].className = "test";
        imgs[4].className = "test";
        imgs[5].className = "test";
        imgs[6].className = "test";
        imgs[7].className = "test";
        imgs[8].className = "test";


    } else {
        imgs[0].className = "remove-test";
        imgs[1].className = "remove-test";
        imgs[2].className = "remove-test";
        imgs[3].className = "remove-test";
        imgs[4].className = "remove-test";
        imgs[5].className = "remove-test";
        imgs[6].className = "remove-test";
        imgs[7].className = "remove-test";
        imgs[8].className = "remove-test";

    }
}


var title = document.getElementById("myTitle");
var sticky = title.offsetTop;

function myFunction2() {
    if (window.pageYOffset > sticky) {
        title.classList.add("sticky");
    } else {
        title.classList.remove("sticky");
    }
}


// function myFunction3() {
//     if (window.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         imgs.className = "testt";
//     } else if (window.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         imgs.className.remove = "testt";
//     }
// }