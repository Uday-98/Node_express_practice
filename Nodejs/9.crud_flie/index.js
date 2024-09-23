const fs = require ("fs");
const path = require("path");
const dirpath = path.join (__dirname, "file");

//...............1st method.....................//
//fs.writeFileSync(dirpath+"/apple.etxt"," text file create");

//..................2nd method......................//

const fileName = `${dirpath}/file.text`;

//fs.writeFileSync( fileName,"text file create");

// fs.readFile(fileName,"utf-8", (err,item)=>{
//     console.log(item)
// });

// fs.appendFile(fileName,"and file in folder" , (err)=>{
//     if(!err)
//     {
//         console.log("file update")
//     }
// });

// fs.rename(fileName,`${dirpath}/change.text`, (err)=>{
//     if(!err)
//             {
//                 console.log("file rename")
//             }
// })

fs.unlinkSync(`${dirpath}/change.text`)