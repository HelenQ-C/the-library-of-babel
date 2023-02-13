function getRandomLetters(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let randomLetters = '';
  
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        randomLetters += ' ';
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