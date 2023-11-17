let inputBtn = document.getElementById('input-btn');
let myLeads = [];
let inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

let lead ;
inputBtn.addEventListener('click',function(){
lead = inputEl.value;
myLeads.push(lead);
renderLeads();
});
function renderLeads(){
let listItems = "";
for(let i=0;i<myLeads.length;i++){
  //listItems +=  '<li> <a href=" '+ myLeads[i]+ '" target="_blanc">'+ myLeads[i] +'</a>' +" " +'</li>';
  listItems += `<li> 
                <a href=" ${myLeads[i]} "  target="_blanc">${myLeads[i]}</a>  
              </li>`;
    // add an li element to a ul: first way  ulEl.innerHTML +=  '<li>'+ myLeads[i] + " " +'</li>';
  //second way
 // const li=document.createElement('li');
  //li.textContent += myLeads[i] + " ";
  //ulEl.append(li);
}
ulEl.innerHTML = listItems;
inputEl.value= "";
}
