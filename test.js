// //fs.readfilesync
// //fs.writefilesync 
// //fs.exists

const catjs=require("fs");
// console.log(fs.readFileSync("a.txt","utf-8"));
// console.log(fs.existsSync("a.txt"));

// fs.writeFileSync("a.txt","hello ugly");
// console.log(fs.readFileSync("a.txt","utf-8"));

// console.log(process.argv);

let file1name = process.argv[2];
let file2name = process.argv[4];
let file1data = catjs.readFileSync(file1name,"utf-8");
let file2data = catjs.readFileSync(file2name,"utf-8");
console.log(file1data+file2data);

