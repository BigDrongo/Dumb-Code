let addBtn = document.getElementById("addBtn");
let container = document.getElementById("container");
let input = document.getElementById("input");

addBtn.addEventListener('click', function(){
   var para = document.createElement('p');
   para.classList.add('paragraph-styling');
   para.innerText = input.value;
   container.appendChild(para);
   input.value = "";
   para.addEventListener('dblclick', function(){
      container.removeChild(para);
   })
})

   


