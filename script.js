const button=document.querySelectorAll(".btn");
const display=document.querySelector("#display");
const result=document.querySelector("#result");
const clear=document.querySelector("#clear");
button.forEach(btn=>{
    btn.addEventListener("click",()=>{
       display.innerText+=btn.innerText;
    })
}
)

result.addEventListener("click",()=>{
     display.innerText=eval(display.innerText);
     
})
clear.addEventListener("click",()=>{
    display.innerText="";
})
document.addEventListener("keydown",(event)=>{

    let key = event.key;
    if("0123456789+-*/.".includes(key)){
        display.innerText += key;
    }
    else if(key === "Enter"){
        display.innerText = eval(display.innerText);
    }
    else if(key === "Backspace"){
        display.innerText = display.innerText.slice(0,-1);
    }
    else if(key === "Escape"){
        display.innerText = "";
    }

})
