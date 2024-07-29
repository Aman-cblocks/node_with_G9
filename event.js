const eventEmitter = require("events")

const emitter = new eventEmitter();

emitter.on("add",(a,b)=>{
    console.log("add in emitter",a,b)
})

emitter.emit("add",1,2)
