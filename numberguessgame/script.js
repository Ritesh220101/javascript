const div = document.querySelector("div");
console.log(div);

for (let i = 1; i <= 40; i++) {
    let button = document.createElement("button");
    button.setAttribute("id", i);
    button.classList.add("but");
    button.innerHTML = i;
    div.appendChild(button);
}

function guessTheNumber() {
    let upper = 40;
    let lower = 1;
    let randomNumber = Math.floor(Math.random() * (upper - lower + 1) + lower);
    console.log(randomNumber);
    const buttons = document.querySelectorAll("button");
    console.log(buttons);
    const para = document.querySelector("p");
    console.log(para);
    for (let numberOfAttempts = 1; numberOfAttempts <= 6; numberOfAttempts += 1) {  
        let count = 0;
        for (let i = 0; i < 40; i++) {
            buttons[i].addEventListener("click", e => {
                if (buttons[i].id < randomNumber) {
                    buttons[i].setAttribute("class", "yellow");
                    count += 1;
                }
                if (buttons[i].id > randomNumber) {
                    buttons[i].setAttribute("class", "red");
                    count += 1;
                }
                if (buttons[i].id == randomNumber) {
                    buttons[i].setAttribute("class", "green");
                    count += 1;
                    para.innerText = `You have guessed the correct number in ${count} turns`;
                    let b = document.getElementsByClassName("but");
                    for (let i = 0; i < b.length; i++) {
                        b[i].disabled = true;
                    }
                }
            })
        }
        
    }
}
guessTheNumber();

