// asynchronous java script
// #### start now finish later ####
// setTimeout(() => {
//     console.log("callback function called");
// }, 5000);

// for(let i=0;i<1000;i++){
//     console.log(1);
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// xmlhttprequest

// used to request data from external servers
// request are made to API end points

/**
 * Ready states
 * 0-unsent
 * 1-open
 * 2-headers received
 * 3-loading
 * 4-complete/done
 **/

/**
 * Response status
 * Note- for correct url status code-200
 *
 * 100-199: informational response
 * 200-299: success response
 * 300-399: redirection messages
 * 400-499: client error message
 * 500-599: server error message
 **/


// const getTodos = () => {
//     const request = new XMLHttpRequest(); // request object
//     // request.addEventListener("readystatechange",()=>{
//     //     console.log(request,request.readyState);
//     // });
//     request.addEventListener("readystatechange", () => {
//         if (request.readyState == 4 && request.status == 200) {
//             console.log(request.responseText);
//         } else if (request.readyState == 4) {
//             console.log("Could not fetch data");
//         }
//     });

//     request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//     request.send();
// };

// getTodos();


// coding using callback function

const getTodos = (callback) => {
    const request = new XMLHttpRequest(); // request object
    // request.addEventListener("readystatechange",()=>{
    //     console.log(request,request.readyState);
    // });
    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.responseText); // for converting json into array of objects
            // callback(undefined,request.responseText);
            callback(undefined,data);
        } else if (request.readyState == 4) {
            callback("Could not fetch data",undefined);
        }
    });

    // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.open("GET","books.json");
    request.send();
};

getTodos((err,data)=>{
    console.log("Callback called.");
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});