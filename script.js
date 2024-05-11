let display = document.getElementById('inputBox');
let btns = document.querySelectorAll('button');

let btnsArray=Array.from(btns);
let string='';
btnsArray.forEach(btn => {
    btn.addEventListener('click',function(e){
        if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1)
            display.value=string;
        }else if(e.target.innerHTML=='C'){
            string='';
            display.value=string;
        }else if(e.target.innerHTML=='='){
            string=eval(string);
            display.value=string;
        }
        else{
            string+=e.target.innerHTML;
            display.value=string;
        }
    });
});
