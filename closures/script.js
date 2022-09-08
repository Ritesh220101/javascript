function counter(){
    let count = 0;
    function change(value) {
        count+=value;
    }
    return{

        // userName : "wegnoweno",
        increment(){
            return change(1);
        },
        decrement(){
            return change(-1);
        },
        result(){
            return count;
        }
    };
};

const res = counter();
res.increment();
res.increment();
res.increment();
res.increment();
res.decrement();
res.decrement();
console.log("Count value is: "+res.result());
// console.log(res.userName);