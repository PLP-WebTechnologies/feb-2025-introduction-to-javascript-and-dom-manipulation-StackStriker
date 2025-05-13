//Changing text content and color
function changeText() {
    const intro = document.getElementById("intro-text");
    intro.textContent = "Welcome to the JavaScript world!";
    intro.style.color = "blue";
    intro.style.fontWeight = "bold";
}
//Add a new paragraph
function addElement() {
    const newPara = document.getElementById("message-container");
    newPara.textContent = "This is a new paragraph added to the DOM.";
    newPara.id = "dynamic-message";
    document.appendChild(newPara);
}
//Remove the paragraph
function removeElement() {
    const newPara = document.getElementById("dynamic-message");
    if (newPara) {
        newPara.remove();
    }
}