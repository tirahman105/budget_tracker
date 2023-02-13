document.getElementById('add-btn').addEventListener("click", function(){
    const value = document.getElementById("text-input").value;
    const container = document.getElementById("parent-container");
    const li = document.createElement("li");
    li.innerText = value;
    li.classList.add("new-li");

    container.appendChild(li);
    const allList = document.getElementsByClassName("new-li");
    for (const item of allList){
        item.addEventListener("click", function(e){
            // console.log(e.target.parentNode);
            
            e.target.parentNode.removeChild(e.target);
        })
    }
})

// document.getElementById("hit").addEventListener("click", function(){
//     document.getElementById("p-1").innerText = "Bangladesh";
// })
document.getElementById("hit").addEventListener("click", function(){
    setInnerText("p-1", "Bangladesh");
    setInnerText("p-2", "Chaina");
    setInnerText("p-3", "Canada");
    setInnerText("p-4", "USA");
    const inputValue = getInputValue("text-input");
    console.log(inputValue);
});

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


function getInputValue (id){
   const value = document.getElementById(id).value;
   return value; 

}