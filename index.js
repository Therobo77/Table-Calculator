let cont = document.getElementById('cont');

function table(){
  let x=document.getElementById("table").value;
  let y=document.getElementById("times").value;
  console.log(x);
  // alert(`${x} this is the number`)
  main(x,y||10);
  document.getElementById("table").value=null;
  document.getElementById("times").value=null;
}


function main(x,y){
  cont.innerHTML=null;
  for(let i=0; i<y; i++){
    let h = document.createElement("div");
    
    h.innerHTML=`${x} * ${i+1} = ${x*(i+1)}`;
    cont.append(h);
    
  }
}
function CLEAR(){
  cont.innerHTML=null;
}