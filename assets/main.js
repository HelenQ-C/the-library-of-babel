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

const character = document.getElementById("character");
const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol() {
  return symbols.charAt(Math.floor(Math.random() * symbols.length));
}

function animateText() {
  let originalText = character.innerHTML;
  let newText = "";
  for (let i = 0; i < originalText.length && newText.length < 127; i++) {
    if (originalText[i] === " ") {
      newText += " ";
    } else {
      newText += generateRandomSymbol();
    }
  }
  character.innerHTML = newText;
  setTimeout(animateText, 75);
}

animateText();

const character02 = document.getElementById("character02");
const symbols02 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol02() {
  return symbols02.charAt(Math.floor(Math.random() * symbols02.length));
}

function animateText02() {
  let originalText02 = character02.innerHTML;
  let newText02 = "";
  for (let i = 0; i < originalText02.length && newText02.length < 127; i++) {
    if (originalText02[i] === " ") {
      newText02 += " ";
    } else {
      newText02 += generateRandomSymbol();
    }
  }
  character02.innerHTML = newText02;
  setTimeout(animateText02, 75);
}

animateText02();

const character03 = document.getElementById("character03");
const symbols03 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol02() {
  return symbols03.charAt(Math.floor(Math.random() * symbols03.length));
}

function animateText03() {
  let originalText03 = character03.innerHTML;
  let newText03 = "";
  for (let i = 0; i < originalText03.length && newText03.length < 127; i++) {
    if (originalText03[i] === " ") {
      newText03 += " ";
    } else {
      newText03 += generateRandomSymbol();
    }
  }
  character03.innerHTML = newText03;
  setTimeout(animateText03, 75);
}

animateText03();

const character04 = document.getElementById("character04");
const symbols04 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol04() {
  return symbols04.charAt(Math.floor(Math.random() * symbols04.length));
}

function animateText04() {
  let originalText04 = character04.innerHTML;
  let newText04 = "";
  for (let i = 0; i < originalText04.length && newText04.length < 127; i++) {
    if (originalText04[i] === " ") {
      newText04 += " ";
    } else {
      newText04 += generateRandomSymbol();
    }
  }
  character04.innerHTML = newText04;
  setTimeout(animateText04, 75);
}

animateText04();

const character05 = document.getElementById("character05");
const symbols05 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol05() {
  return symbols05.charAt(Math.floor(Math.random() * symbols05.length));
}

function animateText05() {
  let originalText05 = character05.innerHTML;
  let newText05 = "";
  for (let i = 0; i < originalText05.length && newText05.length < 127; i++) {
    if (originalText05[i] === " ") {
      newText05 += " ";
    } else {
      newText05 += generateRandomSymbol();
    }
  }
  character05.innerHTML = newText05;
  setTimeout(animateText05, 75);
}

animateText05();

const character06 = document.getElementById("character06");
const symbols06 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol06() {
  return symbols06.charAt(Math.floor(Math.random() * symbols06.length));
}

function animateText06() {
  let originalText06 = character06.innerHTML;
  let newText06 = "";
  for (let i = 0; i < originalText06.length && newText06.length < 127; i++) {
    if (originalText06[i] === " ") {
      newText06 += " ";
    } else {
      newText06 += generateRandomSymbol();
    }
  }
  character06.innerHTML = newText06;
  setTimeout(animateText06, 75);
}

animateText06();

const character07 = document.getElementById("character07");
const symbols07 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol07() {
  return symbols07.charAt(Math.floor(Math.random() * symbols07.length));
}

function animateText07() {
  let originalText07 = character07.innerHTML;
  let newText07 = "";
  for (let i = 0; i < originalText07.length && newText07.length < 127; i++) {
    if (originalText07[i] === " ") {
      newText07 += " ";
    } else {
      newText07 += generateRandomSymbol();
    }
  }
  character07.innerHTML = newText07;
  setTimeout(animateText07, 75);
}

animateText07();

const character08 = document.getElementById("character08");
const symbols08 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol08() {
  return symbols08.charAt(Math.floor(Math.random() * symbols08.length));
}

function animateText08() {
  let originalText08 = character08.innerHTML;
  let newText08 = "";
  for (let i = 0; i < originalText08.length && newText08.length < 127; i++) {
    if (originalText08[i] === " ") {
      newText08 += " ";
    } else {
      newText08 += generateRandomSymbol();
    }
  }
  character08.innerHTML = newText08;
  setTimeout(animateText08, 75);
}

animateText08();

const character09 = document.getElementById("character09");
const symbols09 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol09() {
  return symbols09.charAt(Math.floor(Math.random() * symbols09.length));
}

function animateText09() {
  let originalText09 = character09.innerHTML;
  let newText09 = "";
  for (let i = 0; i < originalText09.length && newText09.length < 127; i++) {
    if (originalText09[i] === " ") {
      newText09 += " ";
    } else {
      newText09 += generateRandomSymbol();
    }
  }
  character09.innerHTML = newText09;
  setTimeout(animateText09, 75);
}

animateText09();

const character10 = document.getElementById("character10");
const symbols10 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol10() {
  return symbols10.charAt(Math.floor(Math.random() * symbols10.length));
}

function animateText10() {
  let originalText10 = character10.innerHTML;
  let newText10 = "";
  for (let i = 0; i < originalText10.length && newText10.length < 127; i++) {
    if (originalText10[i] === " ") {
      newText10 += " ";
    } else {
      newText10 += generateRandomSymbol();
    }
  }
  character10.innerHTML = newText10;
  setTimeout(animateText10, 75);
}

animateText10();

const character11 = document.getElementById("character11");
const symbols11 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol11() {
  return symbols11.charAt(Math.floor(Math.random() * symbols11.length));
}

function animateText11() {
  let originalText11 = character11.innerHTML;
  let newText11 = "";
  for (let i = 0; i < originalText11.length && newText11.length < 127; i++) {
    if (originalText11[i] === " ") {
      newText11 += " ";
    } else {
      newText11 += generateRandomSymbol();
    }
  }
  character11.innerHTML = newText11;
  setTimeout(animateText11, 75);
}

animateText11();

const character12 = document.getElementById("character12");
const symbols12 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol12() {
  return symbols12.charAt(Math.floor(Math.random() * symbols12.length));
}

function animateText12() {
  let originalText12 = character12.innerHTML;
  let newText12 = "";
  for (let i = 0; i < originalText12.length && newText12.length < 127; i++) {
    if (originalText12[i] === " ") {
      newText12 += " ";
    } else {
      newText12 += generateRandomSymbol();
    }
  }
  character12.innerHTML = newText12;
  setTimeout(animateText12, 75);
}

animateText12();

const character13 = document.getElementById("character13");
const symbols13 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol13() {
  return symbols13.charAt(Math.floor(Math.random() * symbols13.length));
}

function animateText13() {
  let originalText13 = character13.innerHTML;
  let newText13 = "";
  for (let i = 0; i < originalText13.length && newText13.length < 127; i++) {
    if (originalText13[i] === " ") {
      newText13 += " ";
    } else {
      newText13 += generateRandomSymbol();
    }
  }
  character13.innerHTML = newText13;
  setTimeout(animateText13, 75);
}

animateText13();

const character14 = document.getElementById("character14");
const symbols14 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol14() {
  return symbols14.charAt(Math.floor(Math.random() * symbols14.length));
}

function animateText14() {
  let originalText14 = character14.innerHTML;
  let newText14 = "";
  for (let i = 0; i < originalText14.length && newText14.length < 127; i++) {
    if (originalText14[i] === " ") {
      newText14 += " ";
    } else {
      newText14 += generateRandomSymbol();
    }
  }
  character14.innerHTML = newText14;
  setTimeout(animateText14, 75);
}

animateText14();

const character15 = document.getElementById("character15");
const symbols15 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol15() {
  return symbols15.charAt(Math.floor(Math.random() * symbols15.length));
}

function animateText15() {
  let originalText15 = character15.innerHTML;
  let newText15 = "";
  for (let i = 0; i < originalText15.length && newText15.length < 127; i++) {
    if (originalText15[i] === " ") {
      newText15 += " ";
    } else {
      newText15 += generateRandomSymbol();
    }
  }
  character15.innerHTML = newText15;
  setTimeout(animateText15, 75);
}

animateText15();

const character16 = document.getElementById("character16");
const symbols16 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol16() {
  return symbols16.charAt(Math.floor(Math.random() * symbols16.length));
}

function animateText16() {
  let originalText16 = character16.innerHTML;
  let newText16 = "";
  for (let i = 0; i < originalText16.length && newText16.length < 127; i++) {
    if (originalText16[i] === " ") {
      newText16 += " ";
    } else {
      newText16 += generateRandomSymbol();
    }
  }
  character16.innerHTML = newText16;
  setTimeout(animateText16, 75);
}

animateText16();

const character17 = document.getElementById("character17");
const symbols17 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol17() {
  return symbols17.charAt(Math.floor(Math.random() * symbols17.length));
}

function animateText17() {
  let originalText17 = character17.innerHTML;
  let newText17 = "";
  for (let i = 0; i < originalText17.length && newText17.length < 127; i++) {
    if (originalText17[i] === " ") {
      newText17 += " ";
    } else {
      newText17 += generateRandomSymbol();
    }
  }
  character17.innerHTML = newText17;
  setTimeout(animateText17, 75);
}

animateText17();

const character18 = document.getElementById("character18");
const symbols18 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol18() {
  return symbols18.charAt(Math.floor(Math.random() * symbols18.length));
}

function animateText18() {
  let originalText18 = character18.innerHTML;
  let newText18 = "";
  for (let i = 0; i < originalText18.length && newText18.length < 127; i++) {
    if (originalText18[i] === " ") {
      newText18 += " ";
    } else {
      newText18 += generateRandomSymbol();
    }
  }
  character18.innerHTML = newText18;
  setTimeout(animateText18, 75);
}

animateText18();

const character19 = document.getElementById("character19");
const symbols19 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol19() {
  return symbols19.charAt(Math.floor(Math.random() * symbols19.length));
}

function animateText19() {
  let originalText19 = character19.innerHTML;
  let newText19 = "";
  for (let i = 0; i < originalText19.length && newText19.length < 127; i++) {
    if (originalText19[i] === " ") {
      newText19 += " ";
    } else {
      newText19 += generateRandomSymbol();
    }
  }
  character19.innerHTML = newText19;
  setTimeout(animateText19, 75);
}

animateText19();

const character20 = document.getElementById("character20");
const symbols20 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generateRandomSymbol20() {
  return symbols20.charAt(Math.floor(Math.random() * symbols20.length));
}

function animateText20() {
  let originalText20 = character20.innerHTML;
  let newText20 = "";
  for (let i = 0; i < originalText20.length && newText20.length < 127; i++) {
    if (originalText20[i] === " ") {
      newText20 += " ";
    } else {
      newText20 += generateRandomSymbol();
    }
  }
  character20.innerHTML = newText20;
  setTimeout(animateText20, 75);
}

animateText20();

const titletext = document.getElementById("Button"); 
const book01 = document.getElementById("ToToggle");

book01.style.display = "none";

titletext.addEventListener("click", function(){
  if (book01.style.display === "none") {
    book01.style.display = "block";
  } else {
    book01.style.display = "none";
  }
});

