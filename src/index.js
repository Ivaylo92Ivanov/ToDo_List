import "./styles.css"



console.log("linked?")

const body = document.querySelector("body")

const header = document.createElement("div");
header.className = "header";
header.innerHTML = "<h1>My To-Do List</h1>";
body.appendChild(header);


const main = document.createElement("div");
main.className = "main";

const nav = document.createElement("div"); 
nav.className = "nav"
nav.innerHTML ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, optio! Enim provident fugiat voluptates officia harum, molestias reprehenderit iste explicabo, earum ad id magnam corrupti quaerat. Mollitia ratione architecto quo?"

const display = document.createElement("div");
display.className = "display";
display.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, optio! Enim provident fugiat voluptates officia harum, molestias reprehenderit iste explicabo, earum ad id magnam corrupti quaerat. Mollitia ratione architecto quo?"

main.appendChild(nav);
main.appendChild(display);
body.appendChild(main);

// footer not implemented
const footer = document.createElement("div");
footer.innerHTML = 'Photo by <a href="https://unsplash.com/@andrewtneel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Neel</a> on <a href="https://unsplash.com/photos/cckf4TsHAuw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'

