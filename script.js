const CONTAINER1 = document.querySelector(".container1");
const CONTAINER2 = document.querySelector(".container2");
const CONTAINER3 = document.querySelector(".container3");
const CONTAINER4 = document.querySelector(".container4");
const CONTAINER5 = document.querySelector(".container5");
const CONTAINER6 = document.querySelector(".container6");
const CONTAINER7 = document.querySelector(".container7");
const CONTAINER8 = document.querySelector(".container8");
const CONTAINER9 = document.querySelector(".container9");
const CONTAINER10 = document.querySelector(".container10");
const CONTAINER11 = document.querySelector(".container11");
const CONTAINER12 = document.querySelector(".container12");

var inlineflex = document.getElementById("inlineflex");
var flex = document.getElementById("flex");
var flexdirrow = document.getElementById("flexdirrow");
var flexdirrowrev = document.getElementById("flexdirrowrev");
var flexdircol = document.getElementById("flexdircol");
var flexdircolrev = document.getElementById("flexdircolrev");
var flexwrapno = document.getElementById("flexwrapno");
var flexwrap = document.getElementById("flexwrap");
var flexwraprev = document.getElementById("flexwraprev");
var justifycontentstart = document.getElementById("justifycontentstart");
var justifycontentcenter = document.getElementById("justifycontentcenter");
var justifycontentend = document.getElementById("justifycontentend");
var justifycontentbetween = document.getElementById("justifycontentbetween");
var justifycontentaround = document.getElementById("justifycontentaround");
var alignitemsstretch = document.getElementById("alignitemsstretch");
var alignitemsstart = document.getElementById("alignitemsstart");
var alignitemscenter = document.getElementById("alignitemscenter");
var alignitemsend = document.getElementById("alignitemsend");
var alignitemsbase = document.getElementById("alignitemsbase");
var aligncontentstretch = document.getElementById("aligncontentstretch");
var aligncontentstart = document.getElementById("aligncontentstart");
var aligncontentcenter = document.getElementById("aligncontentcenter");
var aligncontentend = document.getElementById("aligncontentend");
var aligncontentbetween = document.getElementById("aligncontentbetween");
var aligncontentaround = document.getElementById("aligncontentaround");


/* Display Section */
inlineflex.addEventListener("click", function() {
    flex.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER1.style.width = "100px";
});

flex.addEventListener("click", function () {
    inlineflex.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER1.style.width = "100%";
});

/* Flex-Direction Section */

flexdirrow.addEventListener("click", function () {
    flexdirrowrev.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER2.style.flexDirection = "row";
});

flexdirrowrev.addEventListener("click", function () {
    flexdirrow.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER2.style.flexDirection = "row-reverse";
});

flexdircol.addEventListener("click", function () {
    flexdircolrev.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER3.style.flexDirection = "column";
});

flexdircolrev.addEventListener("click", function () {
    flexdircol.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER3.style.flexDirection = "column-reverse";
});

flexwrapno.addEventListener("click", function () {
    flexwrap.style.color = "#ffffff";
    flexwraprev.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER4.style.flexWrap = "nowrap";
});

flexwrap.addEventListener("click", function () {
    flexwrapno.style.color = "#ffffff";
    flexwraprev.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER4.style.flexWrap = "wrap";
});

flexwraprev.addEventListener("click", function () {
    flexwrapno.style.color = "#ffffff";
    flexwrap.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER4.style.flexWrap = "wrap-reverse";
});

justifycontentstart.addEventListener("click", function () {
    justifycontentcenter.style.color = "#ffffff";
    justifycontentend.style.color = "#ffffff";
    justifycontentbetween.style.color = "#ffffff";
    justifycontentaround.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER9.style.justifyContent = "flex-start";
});

justifycontentcenter.addEventListener("click", function () {
    justifycontentstart.style.color = "#ffffff";
    justifycontentend.style.color = "#ffffff";
    justifycontentbetween.style.color = "#ffffff";
    justifycontentaround.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER9.style.justifyContent = "center";
});

justifycontentend.addEventListener("click", function () {
    justifycontentstart.style.color = "#ffffff";
    justifycontentcenter.style.color = "#ffffff";
    justifycontentbetween.style.color = "#ffffff";
    justifycontentaround.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER9.style.justifyContent = "flex-end";
});

justifycontentbetween.addEventListener("click", function () {
    justifycontentstart.style.color = "#ffffff";
    justifycontentcenter.style.color = "#ffffff";
    justifycontentend.style.color = "#ffffff";
    justifycontentaround.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER9.style.justifyContent = "space-between";
});

justifycontentaround.addEventListener("click", function () {
    justifycontentstart.style.color = "#ffffff";
    justifycontentcenter.style.color = "#ffffff";
    justifycontentend.style.color = "#ffffff";
    justifycontentbetween.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER9.style.justifyContent = "space-around";
});

alignitemsstretch.addEventListener("click", function () {
    alignitemsstart.style.color = "#ffffff";
    alignitemscenter.style.color = "#ffffff";
    alignitemsend.style.color = "#ffffff";
    alignitemsbase.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER10.style.alignItems = "stretch";
});

alignitemsstart.addEventListener("click", function () {
    alignitemsstretch.style.color = "#ffffff";
    alignitemscenter.style.color = "#ffffff";
    alignitemsend.style.color = "#ffffff";
    alignitemsbase.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER10.style.alignItems = "flex-start";
});

alignitemscenter.addEventListener("click", function () {
    alignitemsstretch.style.color = "#ffffff";
    alignitemsstart.style.color = "#ffffff";
    alignitemsend.style.color = "#ffffff";
    alignitemsbase.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER10.style.alignItems = "center";
});

alignitemsend.addEventListener("click", function () {
    alignitemsstretch.style.color = "#ffffff";
    alignitemsstart.style.color = "#ffffff";
    alignitemscenter.style.color = "#ffffff";
    alignitemsbase.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER10.style.alignItems = "flex-end";
});

alignitemsbase.addEventListener("click", function () {
    alignitemsstretch.style.color = "#ffffff";
    alignitemsstart.style.color = "#ffffff";
    alignitemscenter.style.color = "#ffffff";
    alignitemsend.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER10.querySelector(".box1").style.fontSize = "100px";
    CONTAINER10.querySelector(".box2").style.fontSize = "80px";
    CONTAINER10.querySelector(".box4").style.fontSize = "120px";
    CONTAINER10.querySelector(".box6").style.fontSize = "110px";
    CONTAINER10.style.alignItems = "baseline";
});

aligncontentstretch.addEventListener("click", function () {
    aligncontentstart.style.color = "#ffffff";
    aligncontentcenter.style.color = "#ffffff";
    aligncontentend.style.color = "#ffffff";
    aligncontentbetween.style.color = "#ffffff";
    aligncontentaround.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER11.style.alignContent = "stretch";
});

aligncontentstart.addEventListener("click", function () {
    aligncontentstretch.style.color = "#ffffff";
    aligncontentcenter.style.color = "#ffffff";
    aligncontentend.style.color = "#ffffff";
    aligncontentbetween.style.color = "#ffffff";
    aligncontentaround.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER11.style.alignContent = "flex-start";
});

aligncontentcenter.addEventListener("click", function () {
    aligncontentstretch.style.color = "#ffffff";
    aligncontentstart.style.color = "#ffffff";
    aligncontentend.style.color = "#ffffff";
    aligncontentbetween.style.color = "#ffffff";
    aligncontentaround.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER11.style.alignContent = "center";
});

aligncontentend.addEventListener("click", function () {
    aligncontentstretch.style.color = "#ffffff";
    aligncontentstart.style.color = "#ffffff";
    aligncontentcenter.style.color = "#ffffff";
    aligncontentbetween.style.color = "#ffffff";
    aligncontentaround.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER11.style.alignContent = "flex-end";
});

aligncontentbetween.addEventListener("click", function () {
    aligncontentstretch.style.color = "#ffffff";
    aligncontentstart.style.color = "#ffffff";
    aligncontentcenter.style.color = "#ffffff";
    aligncontentend.style.color = "#ffffff";
    aligncontentaround.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER11.style.alignContent = "space-between";
});

aligncontentaround.addEventListener("click", function () {
    aligncontentstretch.style.color = "#ffffff";
    aligncontentstart.style.color = "#ffffff";
    aligncontentcenter.style.color = "#ffffff";
    aligncontentend.style.color = "#ffffff";
    aligncontentbetween.style.color = "#ffffff";
    this.style.color = "#ffd700";
    CONTAINER11.style.alignContent = "space-around";
});