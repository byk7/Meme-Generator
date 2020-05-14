const memeForm = document.getElementById("meme-form");
const imgSource = document.getElementById("img-source");
const textTop = document.getElementById("text-top");
const textBottom = document.getElementById("text-bottom");
const memesGenerated = document.getElementById("memes-generated");


//User inputs --> create output
memeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (imgSource.value && (textTop.value || textBottom.value)) {

    const newMeme = memeGenerator(imgSource.value, textTop.value, textBottom.value);
    memesGenerated.prepend(newMeme); 

    imgSource.value = "";
    textTop.value = "";
    textBottom.value = "";

  } else {
    alert("Please provide an image AND at least one text either on top or bottom")
  }
})

//meme generator function 
const memeGenerator = (imgSource, textTop="", textBottom="") => {
  const newImage = document.createElement("div");
  newImage.classList.add("meme-output");
  newImage.style.backgroundImage = `url('${imgSource}')`;

  if (textTop) {
    const newTextTop = document.createElement("p");
    newTextTop.innerText = textTop;
    newTextTop.classList.add("meme-text");
    newTextTop.classList.add("text-top");
    newImage.appendChild(newTextTop);
  }

  if (textBottom) {
    const newTextBottom = document.createElement("p");
    newTextBottom.innerText = textBottom;
    newTextBottom.classList.add("meme-text");
    newTextBottom.classList.add("text-bottom");
    newImage.appendChild(newTextBottom);
  }

  //delete meme function
  const deleteButton = document.createElement("input");
  deleteButton.value = "X";
  deleteButton.classList.add("meme-remove");
  deleteButton.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  });

  newImage.appendChild(deleteButton);

  return newImage; 
}



//sample meme 
const displayMeme = (imgUrl, textTop, textBottom) => {
  const newMeme = memeGenerator(imgUrl, textTop, textBottom);
  memesGenerated.prepend(newMeme);
}

displayMeme("https://media.giphy.com/media/YWf50NNii3r4k/giphy.gif", "this is how you do", "you feel?");

displayMeme("https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", "Do or do not", "...but first, coffee.");
