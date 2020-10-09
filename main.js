const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});

// ******************* Project Gallery 1 *******************************

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}

// ************************************ Project Gallery 2 ****************************

function openModal1() {
  document.getElementById("myModal-1").style.display = "block";
}

// Close the Modal
function closeModal1() {
  document.getElementById("myModal-1").style.display = "none";
}

var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex1-1].style.display = "flex";
}

// **************************** Project Gallery 3 ********************************

function openModal2() {
  document.getElementById("myModal-2").style.display = "block";
}

// Close the Modal
function closeModal2() {
  document.getElementById("myModal-2").style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex2-1].style.display = "flex";
}

// *************************** Project Gallery 4 **********************************

function openModal3() {
  document.getElementById("myModal-3").style.display = "block";
}

// Close the Modal
function closeModal3() {
  document.getElementById("myModal-3").style.display = "none";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-3");
  if (n > slides.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex3-1].style.display = "flex";
}

// *************************** Project Gallery 5 **********************************

function openModal4() {
  document.getElementById("myModal-4").style.display = "block";
}

// Close the Modal
function closeModal4() {
  document.getElementById("myModal-4").style.display = "none";
}

var slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

// Thumbnail image controls
function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-4");
  if (n > slides.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex4-1].style.display = "flex";
}

// ****************************** Ongoing Project Gallery 1 **************************

function openModal5() {
  document.getElementById("myModal-5").style.display = "block";
}

// Close the Modal
function closeModal5() {
  document.getElementById("myModal-5").style.display = "none";
}

var slideIndex5 = 1;
showSlides5(slideIndex5);

// Next/previous controls
function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

// Thumbnail image controls
function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-5");
  if (n > slides.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex5-1].style.display = "flex";
}

// ************************** Ongoing Project Gallery 2 *****************************

function openModal6() {
  document.getElementById("myModal-6").style.display = "block";
}

// Close the Modal
function closeModal6() {
  document.getElementById("myModal-6").style.display = "none";
}

var slideIndex6 = 1;
showSlides6(slideIndex6);

// Next/previous controls
function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

// Thumbnail image controls
function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-6");
  if (n > slides.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex6-1].style.display = "flex";
}
