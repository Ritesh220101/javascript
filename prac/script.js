// let email = 'jitesh.guntuka@aurionpro.com';

// console.log(email.indexOf('@'));

// console.log(email.substring(email.indexOf('@')+1,));

// console.log(email.substring(email.indexOf('.')+1,email.indexOf('@')));

// console.log(email.replace('j','r'));

// console.log(email.length);

// let a = 100;
// let b = 50;
// result = `Sum of ${a} and ${b} is ${a+b}`;
// console.log(result);

// const title="Proramming in Java";
// const author="Balagurusamy";
// const price=500;

// let res = `${title} book of ${author} is ${price}`;
// console.log(res);

const players = ['ritz','zitr','jtipt','kartrix'];
// console.log(players.join('-'));

let result = players.concat('tpitj');
// console.log(result);

players.push('xirtrak');
// console.log(players);

players.pop();
// console.log(players);

//function

function add(a,b){
    return a+b;
}

// console.log(add(1,2));

//function expression

const addNum = function(a,b){
    return a+b;
}

// console.log(addNum(100,100));


// functions in js, hoisting // in js all functions are hoisted at the top so we can access them
// before the initialziation
// but it is not same for function expression.
// console.log(add1(10,2667));


function add1(a,b){
    return a+b;
}

//arrow
const adding = (a,b) => a+b;
// console.log(adding(90,80));


//callback functions

// const myFunc = function(callBack){
//     let val = 10;
//     callBack(val);
// }

// const demoFunc = function(val){
//     console.log(val);
// }

// myFunc(demoFunc);

const myFunc = function(callBack){
    let val = 1000;
    callBack(val);
}

myFunc(val=>{
    // console.log(val);
})


//foreach

// const player=["Ashish","Ritesh","Rizwan","Shubham","Shivam","Reena"];
// for(let i=0;i<player.length;i++)
//     console.log(player[i]);

// player.forEach(player=>{
//     console.log(player)
// });

// player.forEach((player,index)=>{
//     console.log(player,index)
// })

//printing an unordered list in html using forEach
// const ul = document.querySelector(".players");
// console.log(ul);

// let html =``;
// player.forEach(player=>{
//     html+=`<li>${player}</li>`;
// });

// ul.innerHTML=html;

//object literals
//don't try to use arrow functions in object literals..
let player = {
    name:"Sachin",
    age:35,
    matches:1000,
    tweets:['random tweet 1','random tweet 2','okokokoko'],
    country:"India",
    score: function(){
        console.log("highest score is 333");
    },
    // score(){
    //     console.log("highest score is 333");
    // },
    printMatches: function () {
        console.log("Matches: "+this.matches);
    },
    // printMatches() {
    //     console.log("Matches: "+this.matches);
    // },
    printTweets: function(){
        this.tweets.forEach(tweet => {
            console.log(tweet);
        });
    }
    
}
// console.log(player);
// console.log(player.name);
// // console.log(player['name']); //same as the above line.....
// console.log(player.age);
// console.log(player.tweets[0]);

// player.score();
// player.printMatches();
// player.printTweets();



//arrays


//filter
// const scores = [1,2,3,4,5,6];   

// scores.forEach(element => {
//     if(element>3)
//         filtered.push(element);
// });

// console.log(filtered);
// const filteredScores = scores.filter(score=>{
//     return score>=3;
// });

// console.log(filteredScores);
// scores.filter(score=>score>3).forEach(element => {
//     filtered.push(element);
// });

const users=[
    {name:"Jayesh",subscribed:true},
    {name:"Manish",subscribed:false},
    {name:"Vijay",subscribed:false},
    {name:"Krishna",subscribed:true},
];

const subscribedUsers = users.filter(user=>{
    if(user.subscribed==true){
        return user;
    }
    // return user.subscribed==true; // another way
});

// console.log(subscribedUsers);


//map

const prices = [100,200,200,150,250]

const discountPrices = prices.map(price=>{
    return price-price*0.3;
});

// console.log(discountPrices);


//price>25 then 20% discount
const products=[
    {name:"Parle-g",price:10},
    {name:"Frooti",price:100},
    {name:"Maggi",price:20},
    {name:"Pasta",price:40}
];

const discountProducts = products.map(product=>{
    //by doing this the actual array also changes
    // if(product.price>25){
    //     product.price-=product.price*0.2;
    //     return product;
    // }
    // return product;

    if(product.price>25){
        return {name:product.name,price:product.price-product.price*0.2};
    }
    return product;
        
})


// console.log(discountProducts);
// console.log(products);


//reduce

const ages = [10,20,30,40,50];

const res = ages.reduce((sum,age)=>{
    // console.log(sum,age);
    sum+=age;
    return sum;
},0);

//another way
const res1 = ages.reduce((sum,age)=>sum+age);
// console.log(res1)

// console.log(res);

const productCat=[
    {category:"groceries",name:"Parle-g",price:10},
    {category:"groceries",name:"Frooti",price:12},
    {category:"electronics",name:"boat headphone",price:20},
    {category:"groceries",name:"Pasta",price:40}
];

const totalCost = productCat.reduce((total,productCat)=>total+productCat.price,0);
// another way
// const totalCost = productCat.reduce((sum,productCat)=>{
//     return sum+productCat.price
// },0)
// console.log(totalCost);

// find

// const scores = [10,20,30,40,50,60,70];

// const scoreGreaterThan50 = scores.find((score)=>{
//     return score>50;
// })

// console.log(scoreGreaterThan50);

// sort

let students = ["Ashish","Ritesh","Shubham","Shivam","Reena","Pratik"]

students =students.map(s=>s.toUpperCase()).sort()

// console.log(students);


let scores = [67,12,1,0,100,34,200,8];
scores.sort((a,b)=>{
    // if(a<b)
    //     return -1;
    // else if(a>b)
    //     return 1;
    // else return 0;
    return a-b;
});
// console.log(scores);

const players1=[
    {name:"finch",score:50},
    {name:"Surya",score:60},
    {name:"Virat",score:50},
    {name:"Dhoni",score:65}
]

players1.sort((a,b)=>{
    return a.score-b.score;
})
// console.log(players1);

players1.sort((a,b)=>{
    return a.name.localeCompare(b.name);
})
// console.log(players1);


// let products1 = [
//     {name: "tshirt",price: 500},
//     {name: "chinos",price: 1200},
//     {name: "jeans",price: 1100},
//     {name: "shirt",price: 800},
//     {name: "jacket",price: 2500},
// ]

// const discountedProducts = products1.filter(p=>p.price>1000).map(p=>{
//     return {name: p.name , price: p.price-p.price*0.3}
// })

// console.log(discountedProducts);


