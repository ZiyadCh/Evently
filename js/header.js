const menuClosed = document.getElementById("navbar");
const menuBtn = document.getElementById("menu");
let change = false;
let openMenu = () => {
  change = !change;
  if (change == true) {
    menuClosed.id = "dropdown";
    menuBtn.style.transform = "rotate(90deg)";
  } else {
    menuClosed.id = "navbar";
    menuBtn.style.transform = "rotate(0)";
  }
};



// =================================
//       partie js for home paig
// =================================

let mate = new Date(2025 , 9 , 28, 23 , 59 ,59).getTime() ;

let counter = setInterval(() => {

    let dateNow = new Date().getTime() ;
    let datDiif = mate - dateNow ;

    let days = Math.floor(datDiif / (1000 * 60 * 60 * 24)) ;
    document.querySelector(".jour").innerHTML = days ;

    let hours = Math.floor(datDiif % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    document.querySelector(".hour").innerHTML = hours ;

    let minits = Math.floor(datDiif % (1000 * 60 * 60) / (1000 * 60));
    document.querySelector(".min").innerHTML = minits ;
    
    let sec = Math.floor( datDiif % (1000 * 60) / 1000 );
    document.querySelector(".sec").innerHTML = sec  ;

    if (datDiif < 0) {
      clearInterval(counter);
    }

},1000 );

