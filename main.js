const parallax = document.querySelector('.header');
let thresholdSets = [];
for (var i = 0; i < 1.0; i+= 0.005) {
    thresholdSets.push(i);
}
let callback = function (entries, observer){
    const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
    setPartalaxStyle(scrollTopProcent);
}
const observer = new IntersectionObserver(callback,{
    threshold:thresholdSets
})
observer.observe(document.querySelector('.content'));
function setPartalaxStyle(scrollTopProcent){
    document.querySelector('.header__images_sun').style.cssText = `transform : translate(-50%, ${scrollTopProcent /1}%);`;
    document.querySelector('.header__label').style.cssText = `transform : translate(${scrollTopProcent *3.5}%, 0%);`;
}

// let scrollerId;
// let paused=true;
// let speed=1;
// let interval=speed*5;

// function startScroll(){
//     let id=setInterval(function(){
//         window.scrollBy(0,2);
//         if(window.innerHeight+window.scrollY==document.body.offsetHeight){
//             stopScroll();
//         }
//     },interval);
//     return id;
// }

// function stopScroll(){
//     clearInterval(scrollerId);
// }

// document.body.addEventListener("keypress",function(event){
//     if(event.which==13 || event.keyCode==13){
//         if(paused==true){
//             scrollerId=startScroll;
//             paused=false;
//         }else{
//             stopScroll;
//             paused=true;
//         }
//     }
// });
// let scrollInterval;
// document.addEventListener("keydown", function(event) {
//     if (event.code === "Enter") {
//       // stop scrolling
//       clearInterval(scrollInterval);
//     }
//   });
  
//   function autoScroll() {
//     window.scrollBy(0,2);
//     scrollInterval=setTimeout(autoScroll, 30);
//   }
  
//   window.onload = function() {
//     autoScroll();
//   };


// let isScrolling = true;
// let scrollInterval;

// document.addEventListener("keydown", function(event) {
//   if (event.code === "Enter" || event.code === "onclick") {
//     isScrolling = !isScrolling;
//     if (!isScrolling) {
//       clearInterval(scrollInterval);
//     } else {
//       scrollInterval = setInterval(autoScroll, 60);
//     }
//   }
// });

// function autoScroll() {
//   window.scrollBy(0, 4);
// }

// window.onload = function() {
//   scrollInterval = setInterval(autoScroll, 60);
// };

let isScrolling = true;
let scrollInterval;

document.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    isScrolling = !isScrolling;
    if (!isScrolling) {
      clearInterval(scrollInterval);
    } else {
      scrollInterval = setInterval(autoScroll, 70);
    }
  }
});

function autoScroll() {
  let currentScrollPos = window.pageYOffset;
  window.scrollTo(0, currentScrollPos + 6);
}

window.onload = function() {
  scrollInterval = setInterval(autoScroll, 70);
};
function smoothScroll(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const scroll = easeInOut(elapsedTime, startPosition, distance, duration);
    window.scrollTo(0, scroll);
    if (elapsedTime < duration) requestAnimationFrame(animation);
  }

  function easeInOut(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
