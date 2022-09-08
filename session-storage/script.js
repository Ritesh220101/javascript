const userName = document.querySelector("#name");
const age = document.querySelector("#age");
const button = document.querySelector("button");
const storage = document.querySelector("#session-storage");

button.addEventListener("click",()=>{
    const key = userName.value;
    const value = age.value;
    console.log(key);
    console.log(value);

    if(key && value){
        sessionStorage.setItem(key,value);
    }
    for(let i=0;i<sessionStorage.length;i++){
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
    
        storage.innerHTML += `${key}: ${value}<br/>`;
    }
    
    
    
});


