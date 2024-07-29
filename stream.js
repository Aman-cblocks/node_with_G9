const fs = require("fs")

const read = fs.createReadStream("newDemo.txt",{
    encoding:"utf-8",
    highWaterMark:2
})
const writeStream = fs.createWriteStream("newStreamPipe.txt")
// read.on("data",(chunks)=>{
//     // console.log(chunks)
//     writeStream.write(chunks)
// })
// // console.log(read)

// read.on("end",()=>{
//     console.log("end")
// })
 
read.pipe(writeStream)
