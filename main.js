let mainCard=document.getElementById("JsHover");
let childCard=document.getElementById("childCard");
mainCard.addEventListener(onmouseover,()=>{
    childCard.display=inline;
    mainCard.display=none;
})