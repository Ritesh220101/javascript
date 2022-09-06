const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

let html=``;
button.addEventListener("click",e=>{
    if(input.value!=""){
        html=`<li>${input.value}<i class="fa-sharp fa-solid fa-x"></i></li>`
        input.value="";
        ul.innerHTML+=html;
        html=``;
    }
})

ul.addEventListener("click",e=>{
    if(e.target.localName=="i"){
        e.target.parentElement.remove();
    }
})