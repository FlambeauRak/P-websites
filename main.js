                                    // DISPLAY OF MENU OPTIONS


let menuButton = document.getElementById("menuButton");
let options = document.getElementById("options");
let closeButton = document.getElementById("close");

function hideOptions() {
    options.style.display = "none";
}

function listOptions() {
    options.style.display = "grid";
}


menuButton.onmouseover = listOptions;
menuButton.onclick = hideOptions;
closeButton.onclick = hideOptions;

                                    // SIGN UP AND LOGIN BUTTONS CONFIG


                                    // MAIN CONTENT

let section1 = document.getElementById("perciving");
let section2 = document.getElementById("reason");
let section3 = document.getElementById("decision");
let section4 = document.getElementById("act");

/*
function move() {
    section1.clientWidth += 30;
    section1.clientHeight -= 30;
}
*/
// MENU 


// NAV ICON 


                                    // LINE SEPARATOR 

const line = document.getElementById("separator");
const presentation = document.getElementById("presentation");

presentation.onmouseover = () => {
    line.style.width = "100%";
}

presentation.onmouseout = () => {
    line.style.width = "0";
}

//LOGIN REDIRECTING

