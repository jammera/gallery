const uploadImage = () => {
	alert("uploader...")
}

const viewSelector = () => {
	alert("select views...")
}

const makeCollage = () => {
	alert("make collage...")
}

// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = '';
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
const getId = (id) => {
	img = document.getElementById(id);
	modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    console.log(modal.style.display, modalImg, captionText.innerHTML)
	
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var myImage = document.getElementById("myImg10");
Tesseract.recognize(myImage)
.then(function(result){
    console.log(result)
})
