let imgBox = document.querySelector(".img-box");
let imgwrap = document.querySelector(".imgwrap");
let leftspace = imgBox.offsetleft;
let originalImg = document.getElementById("originalImg");
originalImg.style.width = imgBox.offsetwidth + "px";

imgBox.onmousemove = function (e) {
    e.pagex;
    let boxwidth = (e.pagex - leftspace) + "px";
    imgwrap.style.width = boxwidth;


}

