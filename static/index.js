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
        imgs[9].className = "test";
        imgs[10].className = "test";
        imgs[11].className = "test";
        imgs[22].className = "test";
        imgs[13].className = "test";
        imgs[14].className = "test";
        imgs[15].className = "test";
        imgs[16].className = "test";
        imgs[17].className = "test";
        imgs[18].className = "test";
        imgs[19].className = "test";
        imgs[20].className = "test";
        imgs[21].className = "test";
        imgs[22].className = "test";
        imgs[23].className = "test";
        imgs[24].className = "test";
        imgs[25].className = "test";
        imgs[26].className = "test";
        imgs[27].className = "test";
        imgs[28].className = "test";
        imgs[29].className = "test";
        imgs[30].className = "test";


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
        imgs[9].className = "remove-test";
        imgs[10].className = "remove-test";
        imgs[11].className = "remove-test";
        imgs[12].className = "remove-test";
        imgs[13].className = "remove-test";
        imgs[14].className = "remove-test";
        imgs[15].className = "remove-test";
        imgs[16].className = "remove-test";
        imgs[17].className = "remove-test";
        imgs[18].className = "remove-test";
        imgs[19].className = "remove-test";
        imgs[20].className = "remove-test";
        imgs[21].className = "remove-test";
        imgs[22].className = "remove-test";
        imgs[23].className = "remove-test";
        imgs[24].className = "remove-test";
        imgs[25].className = "remove-test";
        imgs[26].className = "remove-test";
        imgs[27].className = "remove-test";
        imgs[28].className = "remove-test";
        imgs[29].className = "remove-test";
        imgs[30].className = "remove-test";

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