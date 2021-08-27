#!/usr/bin/env node 

const fs = require("fs");
let arguments = process.argv.slice(2);//separeate form 2nd index
console.log(arguments);

let flags = [];
let filenames = [];
let secargument = [];
for(let i of arguments){
    if(i[0]=="-"){
        flags.push(i);
    }else if(i[0]=="*"){
        secargument.push(i.slice(1));
    }else {
        filenames.push(i);
    }
}
console.log(flags);
console.log(filenames);
console.log(secargument);

for(let file of filenames){
    let filedata = fs.readFileSync(file,"utf-8");
    for(let flag of flags){
        if(flag=="-rs"){
            filedata= removeall(filedata," ");
        }
        if(flag=="-rn"){
            filedata= removeall(filedata,"\r\n");
        }
        if(flag=="-rsc"){
            for(let secarg of secargument){
                filedata = removeall(filedata,secarg);
            }
        }
        //-s add sequence 
        if(flag=="-s"){
            filedata=addsequencetoall(filedata);
        }
        //-sn add sequence to non-empty lines 
        if(flag=="-sn"){
            filedata = addsequencetononempty(filedata);
        }
    }
    console.log(filedata);
}

function removeall(string , removeldata){
    return string.split(removeldata).join("")
}
function addsequencetoall(content){
    console.log("inside seq");
    let contentarr=content.split("\n");
    for(let i=0;i<contentarr.length;i++){
        contentarr[i]=(i+1)+" "+contentarr[i];
    }
    return contentarr;
}
function addsequencetononempty(content){
    let contentarr=content.split("\n");
    let count=1;
    for(let i=0;i<contentarr.length;i++){
        if(contentarr[i]!=""){
            contentarr[i]=count+" "+contentarr[i];
            count++;
        }
    }
    return contentarr;
}
