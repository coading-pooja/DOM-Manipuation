//query selector and queryselectorAll

// let items=document.querySelectorAll(".list-group-item");
// items[1].style.backgroundColor="green"
// items[2].style.color="white"
// items[1].style.color="green"

let items=document.querySelectorAll(".list-group-item");
for(let i=0; i<items.length; i+=2){
    items[i].style.background="green";
}

