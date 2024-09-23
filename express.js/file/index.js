const fs=require('fs');

//create a txt file
fs.writeFileSync("read.txt" , "Welcome to my channel");

//add contain in existing file

fs.appendFileSync("read.txt" , " Hii i am uday");

//rename the file file readt.txt to write.txt

fs.renameSync("read.txt" , "red_write.txt");