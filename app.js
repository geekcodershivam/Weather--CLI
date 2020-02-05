const help=require("./cmds/help");
const version=require("./cmds/version");
const forecast=require("./cmds/forecast");
const today=require("./cmds/today");

const input=process.argv.slice(2);
console.log(input);
const cmd=input[0]
console.log(cmd)
if(cmd=='help'){
help();
}
else if(cmd==='today'){
today();
}
else if(cmd==='forecast'){
  forecast();  
}
else if(cmd==='version'){
    version();
}
else{
    console.log("Wrong Command !!")
}