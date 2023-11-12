let count = 0;
let increment_btn = document.getElementById('increment-btn');
let nb = document.getElementById('count-el');
increment_btn.addEventListener('click',function(){
  count +=1;
  nb.textContent=count;
}) ;

let decrement_btn = document.getElementById('decrement-btn');
decrement_btn.addEventListener('click',function(){
count -=  -1;
document.getElementById('count-el').innerHTML=count;
});

let save_btn = document.getElementById('save-btn');
let p_save = document.getElementById('save-el');
save_btn.addEventListener('click',function(){
p_save.textContent +=   count + ' - ';
nb.textContent = 0;
count = 0;
});


