// DOM manipulation


// querySelector

// const para = document.querySelector("p");
// console.log(para);

// para.innerText = "Wonderful World";

// const paras = document.querySelectorAll("p");

// console.log(paras);

// paras.forEach(para=>{
//     para.innerText+=" more text......."
// })

// const errPara = document.querySelector(".error");
// console.log(errPara);

// errPara.innerText = "error message changed"

// getElementById()
// getElementByClassName()
// getElementByTagName()
// const welcomePara = document.querySelector("#welcome");
// const welcomePara = document.getElementById("welcome");
// console.log(welcomePara);



// const errorTag = document.querySelectorAll(".error");
// const errorTag = document.getElementsByClassName("error")
// console.log(errorTag);



//innerHTML

// const content = document.querySelector(".content")
// content.innerHTML += " <h1>New content added...</h1>"

// const players=["Sachin","Sehwag","Yuvi","Dravid"];

// players.forEach(player=>{
//     content.innerHTML += `<p>${player}</p>`
// })

// const studentDetails=[
//     {id:101,name:"Ritesh",course:"BE-CS",gradYear:2022},
//     {id:102,name:"Divesh",course:"BE-Auto",gradYear:2021},
//     {id:103,name:"Ganesh",course:"BE-IT",gradYear:2022},
//     {id:104,name:"Mangesh",course:"BE-Mech",gradYear:2020},
//     {id:105,name:"Pritesh",course:"BE-CS",gradYear:2023},
//     {id:106,name:"Mahesh",course:"BE-IT",gradYear:2022}
// ];

// const table = document.querySelector("table");
// studentDetails.forEach(student=>{
//     table.innerHTML +=
//     `<tr>
//         <td>${student.id}</td>
//         <td>${student.name}</td>
//         <td>${student.course}</td>
//         <td>${student.gradYear}</td>
//     </tr>`
// });

// Getting and Setting tag attributes

//getAttribute()
//setAttribute()

// const link = document.querySelector("a")
// console.log(link.getAttribute("href"));

// link.setAttribute("href","https://www.instagram.com")
// console.log(link.getAttribute("href"))

// link.innerText = "Link to instagram"

// const para = document.querySelector(".error")
// para.setAttribute("class","success") // in general we do not set className as it overrides all the classes of a tag if there are more than one classes.
// para.setAttribute("style","color:red")
// para.innerText = " not a error message"

// ############### Adding and Removing CSS

// classList

// const para = document.querySelector("p");
// para.classList.replace("error","success");

// para.classList.toggle("error");
// para.classList.toggle("error");


//######### Parent,Child and Siblings

const article = document.querySelector("article");
console.log(article);

const children = article.children;
console.log(children);

const heading = article.querySelector("h1");
heading.setAttribute("class","success");

const heading1 = article.querySelector("h2");
heading1.setAttribute("class","success");

const para = article.querySelectorAll("p");
para.setAttribute("class","error");

for(let i=0;i<children.length;i++){
    if(children[i].localName=="p"){
        children[i].classList.add("error");
    }
    
    if(children[i].localName=="h1" || children[i].localName=="h2"){
        children[i].classList.add("success");
    }
}

// Another way

// Array.from(children).forEach(child => {
//     if(child.localName=="p"){
//         child.classList.add("error");
//     }
    
//     if(child.localName=="h1" || child.localName=="h2"){
//         child.classList.add("success");
//     }
// });

// const h2 = document.querySelector("h2");
// console.log(h2.parentElement); // accessing parent reference using child
// console.log(h2.previousElementSibling); //accessing previous sibling
// console.log(h2.nextElementSibling.nextElementSibling.nextElementSibling); // accessing next sibling


// ######### Events

// const h1 = document.querySelector("h1");
// const input = document.querySelector("input");
// const buttton = document.querySelector("button");

// buttton.addEventListener("click",e=>{
//     h1.innerText="Event changed the text..";
// })

// buttton.addEventListener("click",e=>{
//     h1.innerText = input.value;
//     input.value="";
// })


let playerList = document.querySelectorAll("li");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

let html =``;
button.addEventListener("click",e=>{
    if(input.value!=""){
        html=`<li>${input.value}<i class="fa-sharp fa-solid fa-x"></i></span></li> `;
        input.value="";
        ul.innerHTML+=html;
        html=``;
    }
    
})

// button.addEventListener("click",e=>{
//     const li = document.createElement("li");
//     li.textContent=input.value;
//     ul.append(li);
//     input.value="";
//     playerList = document.querySelectorAll("li");
//     playerList.forEach(player=>{
//         player.addEventListener("click",e=>{
//             console.log(e.target);
//             e.target.remove();
//         })
//     })
// })

ul.addEventListener("click",e=>{
    if(e.target.localName=="i"){
        e.target.parentElement.remove();
    }
})



