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
    let turns = 6;
    let count = 0;
    if(turns>0){
        buttons.forEach(button=>{
            button.addEventListener("click",e=>{
                turns=turns-1;
                count=count+1;
                if(turns==0){
                    button.id == randomNumber;
                    buttons.forEach(button=>button.disabled=true);
                    para.innerText = `Turns are over`;
                }
                if(button.id<randomNumber){
                    button.setAttribute("class","yellow");
                }
                if(button.id>randomNumber){
                    button.setAttribute("class","red");
                }
                if(button.id==randomNumber){
                    button.setAttribute("class","green");
                    buttons.forEach(button=>button.disabled=true);
                    para.innerText = `You have guessed the correct number in ${count} turns`;
                }       
                // para.innerText = `Turns: ${turns}`;
            })
        })
    }
}

guessTheNumber();
