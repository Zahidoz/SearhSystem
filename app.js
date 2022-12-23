const data = ['Akif','Arif','Cavid','Cavidan','Cavansir','Zahid','Zumrud','Zuleyxa','Zulfiyye']

let inpt = document.querySelector("#searhInpt");
let list = document.querySelector("#list");

inpt.addEventListener('input',()=>{
    let link = document.querySelectorAll("li");
    link.forEach((item) => {
      item.remove();
    });  
    let filteredData = data.filter(word=> word.toLowerCase().includes(inpt.value.toLowerCase()))
    filteredData.forEach((item) => {
      const newLi = document.createElement("li");
      newLi.innerText = item;
      list.appendChild(newLi)
    });   
    
    if(inpt.value.length==0){
        let link = document.querySelectorAll("li");
         link.forEach((item) => {
           item.remove();
         });  
    }
})

