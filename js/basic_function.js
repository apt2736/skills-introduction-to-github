function redirectLinkLogo() {
    window.open("https://hsr.hoyoverse.com/en-en/home?utm_source=share&utm_medium=link&utm_campaign=web");
}

function changeColorNavBar() {
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.color = "white";
}

function changeMediaImage(address) {
    document.getElementById("media_show").src = address;
}

function getImageSource(event) {
    changeMediaImage(event.target.src);
    console.log(event.target.src); // You can replace this with any action you want to perform with the image source
}

// function showCombatTraces(){
//     if (document.getElementById("combat_traces_show").style.display === "none") {
//         document.getElementById("combat_traces_show").style.display = "table-row";
//     } else {
//         document.getElementById("combat_traces_show").style.display = "none";
//     }
// }

// function showMajorTraces(){
//     if (document.getElementById("major_traces_show").style.display === "none") {
//         document.getElementById("major_traces_show").style.display = "table-row";
//     } else {
//         document.getElementById("major_traces_show").style.display = "none";
//     }
// }

const images = document.querySelectorAll('.clickable-image');
images.forEach(image => { image.addEventListener('click', getImageSource); });
document.getElementById("combat_traces").addEventListener('click', showCombatTraces);
document.getElementById("major_traces").addEventListener('click', showMajorTraces);