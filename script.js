var num = prompt("Please Enter A Number", "");
for(var i=1;i<=10000;i++){
    document.write("<div>");
    document.write(num + " x " + i + " = " + i*num );
    document.write("</div> <br>");
}


var t=new Date();
var dstr=t.toDateString();
document.querySelector(".hand").innerHTML=dstr;
   
function timeStr(){    
var t=new Date();
var ltstr=t.toLocaleTimeString();
document.querySelector(".hand1").innerHTML=ltstr;
  }
setInterval(timeStr,1) 

// time
const d = new Date();
let year = d.getFullYear();
document.querySelector(".demo").innerHTML = year;