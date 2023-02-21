function getRandomLetters(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let randomLetters = '';
  
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ' || /^[,.?!:;]$/.test(text[i])) {
        randomLetters += text[i];
      } else {
        randomLetters += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }
    }
  
    return randomLetters;
  }

const randomLettersEl = document.querySelector('#randomLetters');
let originalText = randomLettersEl.innerHTML;
let intervalId;

window.addEventListener('load', function() {
  intervalId = setInterval(function() {
    const randomLetters = getRandomLetters(originalText);
    randomLettersEl.innerHTML = randomLetters;
  }, 75);
});

randomLettersEl.addEventListener('mouseout', function() {
  intervalId = setInterval(function() {
    const randomLetters = getRandomLetters(originalText);
    randomLettersEl.innerHTML = randomLetters;
  }, 75);
});

randomLettersEl.addEventListener('mouseover', function() {
  clearInterval(intervalId);
  randomLettersEl.innerHTML = originalText;
});

function getRandomLetters(text) {
    const alphabet02 = 'abcdefghijklmnopqrstuvwxyz';
    let randomLetters02 = '';
  
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ' || /^[,.?!:;]$/.test(text[i])) {
        randomLetters02 += text[i];
      } else {
        randomLetters02 += alphabet02.charAt(Math.floor(Math.random() * alphabet02.length));
      }
    }
  
    return randomLetters02;
  }

const randomLettersEl02 = document.querySelector('#randomLetters02');
let originalText02 = randomLettersEl02.innerHTML;
let intervalId02;

window.addEventListener('load', function() {
  intervalId02 = setInterval(function() {
    const randomLetters02 = getRandomLetters(originalText02);
    randomLettersEl02.innerHTML = randomLetters02;
  }, 75);
});

randomLettersEl02.addEventListener('mouseout', function() {
  intervalId02 = setInterval(function() {
    const randomLetters02 = getRandomLetters(originalText02);
    randomLettersEl02.innerHTML = randomLetters02;
  }, 75);
});

randomLettersEl02.addEventListener('mouseover', function() {
  clearInterval(intervalId02);
  randomLettersEl02.innerHTML = originalText02;
});

const bookpage = document.getElementById("Hover"); 
const page = document.getElementById("ToToggle");
let isHovered = false;

page.style.display = "none";

bookpage.addEventListener("mouseover", function(){
  if (page.style.display === "none") {
    page.style.display = "block";
  } else {
    page.style.display = "none";
  }

  if (!isHovered) {
    bookpage.removeEventListener("mouseover", arguments.callee);
    isHovered = true;
  }
});

