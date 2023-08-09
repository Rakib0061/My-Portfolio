// ################### STICKY NAVBAR ###################

const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", () => {
  let Y = window.scrollY;
  navbar.classList.toggle("sticky", Y > 0);
});

// ################### STICKY NAVBAR ###################

// ################### BUTTON SOUND ###################

const a_tag = document.querySelectorAll("a");
const button_tag = document.querySelectorAll("button");
const sound_track = new Audio();
sound_track.src = "./photos/a_click.wav";

for (let i = 0; i < a_tag.length; i++) {
  a_tag[i].addEventListener("click", () => {
    sound_track.play();
  });
}

for (let i = 0; i < button_tag.length; i++) {
  button_tag[i].addEventListener("click", () => {
    sound_track.play();
  });
}

// ################### BUTTON SOUND ###################

// ################### Blinking Text ###################

//  @@@@@@ declear @@@@@@ 
const words = ["Web Developer", "HTML Developer"];
let wordCount = 0;
let latterCount = 0;
let currentWord = "";
let currentletter = "";
let timeOut = 400;
let isDeleting = false;

function type() {
  //  @@@@@@ 1. when the array complet it make them start from 0  @@@@@@ 
  if (wordCount === words.length) {
    wordCount = 0;
  }

  currentWord = words[wordCount];

  //  @@@@@@ 2. it show the first latter then next loop it show the second @@@@@@ 
  if (isDeleting) {
    currentletter = currentWord.slice(0, --latterCount);
  } else {
    currentletter = currentWord.slice(0, ++latterCount);
  }

  document.getElementById("blinking_text").innerHTML = currentletter;

  //  @@@@@@ 3. printing time & wipeing time  @@@@@@ 
  timeOut = isDeleting ? 100 : 300;

  //  @@@@@@ 4. when the word will commplete it will make no 2. unlock @@@@@@ 
  if (!isDeleting && currentletter.length === currentWord.length) {
    timeOut = 2000;
    isDeleting = true;
  }
  else if (isDeleting && currentletter.length === 0) {
    timeOut = 1000;
    isDeleting = false;
    wordCount++;
  }
  setTimeout(type, timeOut);
}

type ();

// ################### Blinking Text ###################

// ################### DASHBORD NUM ANIMATION ###################

const num_anim = document.querySelectorAll(".num_anim");
let count = false;
let second_count = false;
let stop = [];


//  @@@@@@ beginning value @@@@@@ 
num_anim.forEach((vlu) => {
  vlu.getAttribute("data-num").split("").map(() => {
    vlu.innerHTML += 0;
  });
});

function counting() {
  if (!second_count && count) {
    num_anim.forEach((vlu,indx) => {

      //  @@@@@@ declear @@@@@@ 
      let init = 0.0;
      let data_num = parseFloat(vlu.getAttribute("data-num"));
      let decimal = 0;
      //  ##### count fraction num length #####
      if (data_num.toString().indexOf(".") > 0) {
        decimal = data_num.toString().split(".")[1].length;
      }
      let duration = 60;
      let increment = (data_num - init) / duration;
      let counter = init;
    
      //  @@@@@@ Looping @@@@@@
      let interval = setInterval(() => {
        counter += increment;
        if (counter >= data_num) {
          counter = data_num;
          clearInterval(interval);
        }
        vlu.innerHTML = counter.toFixed(decimal);
      }, duration);

      // let interval = function () {
      //   counter += increment;
      //   if (counter >= data_num) {
      //     counter = data_num;
      //     console.log("rakib");
      //     requestAnimationFrame(stop[indx]);
      //   }
      //   vlu.innerHTML = counter.toFixed(decimal);
      //   //           stop[indx] = requestAnimationFrame(interval);
      // }
      // stop[indx] = requestAnimationFrame(interval);
      // cancelAnimationFrame(stop[indx]);
    });
    second_count = true;
  }
}

//  @@@@@@ excute this function when you want @@@@@@ 
window.addEventListener("scroll", () => {
  let Y = window.scrollY;
  if (Y > 80) {
    count = true;
    // counting();
  }
});

// ################### DASHBORD NUM ANIMATION ###################
