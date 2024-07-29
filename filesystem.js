const fs = require("fs/promises")

// async function readFile(){
//     try{
//     const data = await fs.readFile("temp.txt","utf-8")
//     console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// // readFile()

// async function writeFile(){
//     try{
//      await  fs.writeFile("./write.txt","I am writing a file")
//     }catch(err){
//         console.log(err)
//     }
// }
// // writeFile()

// async function copyFile(){
//   try{
//     const data = await fs.readFile("./temp.txt","utf-8")
//      await fs.writeFile("./write.txt",data)
//   }catch(err){
//     console.log(err)
//   }
// }
// // copyFile();

// async function copyingFile(){
//     try{
//      await fs.copyFile("temp.txt","write.txt")
//     }catch(err){
//         console.log(err)
//     }
// }
// // copyingFile()

// async function deleteFile(){
// try{
//    await fs.unlink("write.txt")
// }catch(err){
//     console.log(err)
// }
// }
// // deleteFile()

// async function appendFile(){
//     try{
//      await fs.appendFile("demo.txt","appending a file ")
//     }catch(err){
//         console.log(err)
//     }
// }
// // appendFile()

// async function rename(){
//     try{
//         await fs.rename("demo.txt","newDemo.txt")
//     }catch(err){
//         console.log(err)
//     }
// }
// // rename()

// // (async function(){
// //     const status = fs.watch("newDemo.txt")
// //     // console.log(status);
// //     for await (let event of status){
// //         console.log(event)
// //     }
// // })()

// async function stats(){
//    try{
//      const data = await fs.stat("temp.txt")
//      console.log(data.isFile())
//    }catch{
//     console.log(err)
//    } 
// }
// stats()

async function newDir (){
 try{
    await fs.mkdir("newDir")
    await fs.writeFile("newDir/a.txt","new file")
 }catch(err){
 console.log(err)
 }
}
// newDir()

async function readDir (){
    try{
      const data = await fs.readdir("newDir")
      console.log(data)
    }catch(err){
    console.log(err)
    }
   }
  //  readDir()

  async function copyDir(){
    try{
      await fs.mkdir("copyDir")
      const files = await fs.readdir("newDir")
      for(let file of files){
        await fs.copyFile(`newDir/${file}`,`copyDir/${file}`)
      }
    }catch(err){
      console.log(err)
    }
  }

  // copyDir();

  async function deleteDir(){
   try{
    const files = await fs.readdir("copyDir")
    for(let file of files){
      await fs.unlink(`copyDir/${file}`)
    }
    await fs.rmdir("copyDir")
   } 
   catch(err){
    console.log(err)
   }

  }
  deleteDir()






