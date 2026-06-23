let total=600;

setInterval(()=>{

let min=Math.floor(total/60);

let sec=total%60;

document.getElementById("min").innerHTML=min;

document.getElementById("sec").innerHTML=sec.toString().padStart(2,"0");

if(total>0){

total--;

}

},1000);
