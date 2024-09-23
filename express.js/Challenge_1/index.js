/*-------------note----------
create and execute one by one line because when create a folder after that create a file in 
exesiting folder and execute the both multiple line code so this time comment the line*/
const fs=require("fs");

//create a folder
// fs.mkdirSync("XYZ");

//create a file with contain in xyz folder
// fs.writeFileSync("XYZ/bio.txt","hello uday");

//add more contain in bio.txt
// fs.appendFileSync("XYZ/bio.txt" , " I am student");

//read existing data in bio.txt
// const read=fs.readFileSync("XYZ/bio.txt", "utf-8");
// console.log(read);

//rename bio.txt to Mybio.txt
fs.renameSync("XYZ/bio.txt" , "XYZ/Mybio.txt");

//now delete both the file and the folder.
// fs.unlinkSync("XYZ/Mybio.txt");//when folder with file delete use unlinksync but delete only folder use rmdirsync


