var ImgBox = document.querySelector(".img-box");
var Imgwrap = document.querySelector(".imgwrap");

var leftspace = ImgBox.offsetleft;
var originalImg = document.getElementById("originalImg");
originalImg.style.width = imgBox.offsetwidth + "px";

imgBox.onmousemove = function (e) {
    e.pageX;
    var boxwidth = (e.pageX - leftspace) + "px";
    Imgwrap.style.width = boxwidth;
}

