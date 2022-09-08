const print = (function counter(){
    var number1 = function(){
        console.log("11111111111111111");
    }
    var number2 = function(){
        console.log("22222222222222222");
    }
    return{
        print1:number1,
        print2:number2,
        print3(){
            console.log("33333333333333333");
        }
    };
})();

// print.number1();
print.print1();
print.print2();
print.print3();