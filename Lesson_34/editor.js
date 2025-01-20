const textDisplay = document.getElementById("textDisplay");
const textEdit = document.getElementById("textEdit");

//bold, italic and link buttons
let buttons = document.getElementsByClassName("tool-btn");
for (let btn of buttons) {
    btn.addEventListener ("click", () => {
        let cmd = btn.dataset["command"];
        if (cmd === "createlink") {
            let url = prompt("Enter the link here: ", "http:\/\/");
            document.execCommand(cmd, false, url);
        } else {
            document.execCommand(cmd,false, null);
        }
    })
}

//Edit text 
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'e') {
        event.preventDefault(); 
        textEdit.value = textDisplay.textContent;
        textDisplay.style.display = 'none';
        textEdit.style.display = 'block';
        textEdit.focus();
    } else if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); 
        textDisplay.textContent = textEdit.value;
        textEdit.style.display = 'none';
        textDisplay.style.display = 'block';
    }
});
