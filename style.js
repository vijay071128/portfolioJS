var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


// function sendMail(){
//     let parms = {
        
//     }
// }



function randomName(){
    const names = ["Vijay", "Web Development", "Frontend Developer"];
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    document.getElementById("random-name").textContent = randomName;
}

setInterval(randomName, 2000);