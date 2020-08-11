// object property "key": value


var carObj = {
    wheels : 4, 
    color : "red",
    engine : "V8",
    isRunning: false,

    start : function(){
        console.log("Starting...")
        this.isRunning = true;
    },

    stop : function (){
        console.log("stopping ..")
        this.isRunning = false;
    },

    //method is a function inside of an object
    
    getDetails : function (){
        console.log("Wheels: ", this.wheels )
        console.log("color: ", this.color )
        console.log("engine: ", this.engine )
    }
 //"this" references our own property 

}

// console.log(carObj);
// console.log(carObj.engine)

// carObj.color = "blue"
// console.log(carObj);

// carObj.start()

// carObj.getDetails()

console.log(carObj);

carObj.start()

console.log(carObj);


class Car { 

    constructor(colorVal, engineVal){
        this.wheels = 4;
        this.color = 
        this.engine 
        this.isRunning = false; 
    }

}

//constructor creates property and assigns them values 