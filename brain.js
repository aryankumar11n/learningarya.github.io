function code(){
   let x= document.querySelector('.code');
   let y=document.querySelector('.blur');
    x.classList.toggle('code2');
    y.classList.toggle('blur2');
}
function check(){
    let z=document.getElementById("password").value;
    let o=document.querySelector(".overlay");


    
    if(z==123){
    o.classList.toggle('joker');
    }
    else{
        alert("wrong");
    }

}
setTimeout(() => {
    
}, 7000);