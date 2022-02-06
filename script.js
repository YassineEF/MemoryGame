///////////////////////////////////
//       Declaration Variable    //
///////////////////////////////////

// get the id of the Start & timer div
let startDiv = document.getElementById("begin");
let startButton = document.getElementById("strBtn");
let centerDiv = document.getElementById("center");
let contentDiv = document.getElementById("content");
let score = document.getElementById("score");
let formDiv = document.getElementById("formulaire");
let buttonForm = document.getElementById("btnForm");

//object of arrays  with name and photo
let fruits = [
  {
    name: "fruit1",
    image: "./img/fruit01.png",
  },
  {
    name: "fruit1",
    image: "./img/fruit01.png",
  },
  {
    name: "fruit2",
    image: "./img/fruit02.png",
  },
  {
    name: "fruit2",
    image: "./img/fruit02.png",
  },
  {
    name: "fruit3",
    image: "./img/fruit03.png",
  },
  {
    name: "fruit3",
    image: "./img/fruit03.png",
  },
  {
    name: "fruit4",
    image: "./img/fruit04.png",
  },
  {
    name: "fruit4",
    image: "./img/fruit04.png",
  },
  {
    name: "fruit5",
    image: "./img/fruit05.png",
  },
  {
    name: "fruit5",
    image: "./img/fruit05.png",
  },
  {
    name: "fruit6",
    image: "./img/fruit06.png",
  },
  {
    name: "fruit6",
    image: "./img/fruit06.png",
  },
  {
    name: "fruit7",
    image: "./img/fruit07.png",
  },
  {
    name: "fruit7",
    image: "./img/fruit07.png",
  },
  {
    name: "fruit8",
    image: "./img/fruit08.png",
  },
  {
    name: "fruit8",
    image: "./img/fruit08.png",
  },
  {
    name: "fruit9",
    image: "./img/fruit09.png",
  },
  {
    name: "fruit9",
    image: "./img/fruit09.png",
  },
  {
    name: "fruit10",
    image: "./img/fruit10.png",
  },
  {
    name: "fruit10",
    image: "./img/fruit10.png",
  },
  {
    name: "fruit11",
    image: "./img/fruit11.png",
  },
  {
    name: "fruit11",
    image: "./img/fruit11.png",
  },
  {
    name: "fruit12",
    image: "./img/fruit12.png",
  },
  {
    name: "fruit12",
    image: "./img/fruit12.png",
  },
  {
    name: "fruit13",
    image: "./img/fruit13.png",
  },
  {
    name: "fruit13",
    image: "./img/fruit13.png",
  },
  {
    name: "fruit14",
    image: "./img/fruit14.png",
  },
  {
    name: "fruit14",
    image: "./img/fruit14.png",
  },
  {
    name: "fruit15",
    image: "./img/fruit15.png",
  },
  {
    name: "fruit15",
    image: "./img/fruit15.png",
  },
  {
    name: "fruit16",
    image: "./img/fruit16.png",
  },
  {
    name: "fruit16",
    image: "./img/fruit16.png",
  },
  {
    name: "fruit17",
    image: "./img/fruit17.png",
  },
  {
    name: "fruit17",
    image: "./img/fruit17.png",
  },
  {
    name: "fruit18",
    image: "./img/fruit18.png",
  },
  {
    name: "fruit18",
    image: "./img/fruit18.png",
  },
];
let match = []; //arrays for the match card
let counter = 0;
let j;
let w;
let longueur = fruits.length;
let divs = [];
let found = 0;
let timerText = document.querySelector("#timerText");
let timer = document.querySelector("#timer");
let secondLeft = 0;
let minuteLeft = 0;
let stopI;
let secs;
let mins;

formDiv.remove();
///////////////////////////////////
//       Declaration Function    //
///////////////////////////////////

//function to start the timer
function countDown() {
  stopI = setInterval(() => {
    secondLeft++;
    if (secondLeft === 59) {
      minuteLeft++;
      secondLeft = 0;
    }
    secondLeft < 10 ? (secs = `0${secondLeft}`) : (secs = `${secondLeft}`);
    minuteLeft < 10 ? (mins = `0${minuteLeft}`) : (mins = `${minuteLeft}`);
    timer.innerText = `${mins}:${secs}`;
  }, 1000);
}

// function to randomize
function randomizeArray(array) {
  let l = array.length;

  for (i = 0; i !== 100; i++) {
    let ud = Math.random() > 0.5 ? true : false;
    let hm = Math.ceil(Math.random() * l);
    let oi = Math.floor(Math.random() * l);
    let ni = ud ? oi + hm : oi - hm;

    if (ni <= l - oi - 1 && ni > -1) {
      v1 = array[oi];
      v2 = array[ni];
      array[ni] = v1;
      array[oi] = v2;
    }
  }
}
function creationDiv() {
  // Creation secton with photo in background
  for (j = 0; j !== longueur; j++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("value", fruits[j].name);
    divs.push(newDiv);
    newDiv.classList.add("card");
    randomizeArray(divs);
    newDiv.style.background = `center/cover no-repeat url(${fruits[j].image}) `;
  }

  //randomize array with divs
  //creation class of divs
  for (w = 0; w < longueur; w++) {
    document.getElementById("center").appendChild(divs[w]);
  }
  //   //put the timer visible
  //   timerDiv.style.setProperty("visibility", "visible");
}
//function to show the card
function showCard(sfc) {
  sfc.style.setProperty("--pseudo-index", "transparent");
}

//function to hide card
function hideCard(hfc) {
  hfc.style.setProperty("--pseudo-index", "#fff");
}
//function match cards
function checkDoubleClick() {
  if (match.length === 2) {
    if (match[0].getAttribute("value") === match[1].getAttribute("value")) {
      showCard(match[0]);
      showCard(match[1]);
      match[0].classList.add("nopointer");
      match[1].classList.add("nopointer");
      setTimeout(() => {
        match[0].style.setProperty("background", "rgba(9, 148, 33, 0.5)");
        match[1].style.setProperty("background", "rgba(9, 148, 33, 0.5)");
        match = [];
      }, 500);
      found++;
    } else {
      setTimeout(() => {
        hideCard(match[1]);
        hideCard(match[0]);
        match = [];
      }, 300);
    }
  }
}

function checkCard(card) {
  card.classList.add(showCard(card));
  match.push(card);
  checkDoubleClick();

  if (found === 18) {
    centerDiv.remove();
    startDiv.hidden = false;

    contentDiv.append(formDiv);
    clearInterval(stopI);
    timerText.style.setProperty("visibility", "hidden");
    document.getElementById("score").value = `${mins}:${secs}`;
  }
}

function avoidBug(card) {
  if (!match.indexOf(card)) {
    alert("You can't click that one mate");
  } else {
    checkCard(card);
  }
}

function startGame() {
  creationDiv();

  //put the class in a selector
  let sc = document.querySelectorAll(".card");

  //event onclick show and hide card
  sc.forEach((card) => {
    card.addEventListener("click", (e) => {
      avoidBug(card);
    });
  });
}

//remove the score time and show the game
startButton.addEventListener("click", (e) => {
  e.preventDefault();
  timerText.style.setProperty("visibility", "visible");
  countDown();
  startDiv.remove();
  startDiv.hidden = true;
  startGame();
});

buttonForm.addEventListener("click", (e) => {
  startDiv.add.appendChild("content");
  contentDiv.append(startDiv);
  score.innerText = `Your score is ${mins}:${secs}`;
  console.log("bop");
});
