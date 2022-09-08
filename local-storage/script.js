const userName = document.querySelector("#name");
const age = document.querySelector("#age");
const button = document.querySelector("button");
const storage = document.querySelector("#local-storage");

button.addEventListener("click",()=>{
    const key = userName.value;
    const value = age.value;
    console.log(key);
    console.log(value);

    if(key && value){
        localStorage.setItem(key,value);
        location.reload();
    }
});

for(let i=0;i<localStorage.length;i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    storage.innerHTML += `${key}: ${value}<br/>`;
}