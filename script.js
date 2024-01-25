 let result;
 let FinputValue;
 let SinputValue;
 
document.querySelector('.btn_1').onclick = function(){
    FinputValue = document.querySelector('.inpt1').value; 
     SinputValue = document.querySelector('.inpt2').value; 

    result = eval(FinputValue + '+' + SinputValue);
    
    
    document.querySelector('.inpt3').value = result; 
     
}
document.querySelector('.btn_2').onclick = function(){
    FinputValue = document.querySelector('.inpt1').value; 
     SinputValue = document.querySelector('.inpt2').value; 

    result = eval(FinputValue + '-' + SinputValue);
    
    
    document.querySelector('.inpt3').value = result; 
    
}
document.querySelector('.btn_3').onclick = function(){
    FinputValue = document.querySelector('.inpt1').value; 
     SinputValue = document.querySelector('.inpt2').value; 

    result = eval(FinputValue + '/' + SinputValue);
    
    
    document.querySelector('.inpt3').value = result; 
   
}

document.querySelector('.btn_4').onclick = function(){
    FinputValue = document.querySelector('.inpt1').value; 
     SinputValue = document.querySelector('.inpt2').value; 

    result = eval(FinputValue + '*' + SinputValue);
    
    
    document.querySelector('.inpt3').value = result; 
    
}

document.querySelector('.btn_5').onclick = function(){
    document.querySelector('.inpt1').value = ''; 
     document.querySelector('.inpt2').value = ''; 
     FinputValue = ""
     SinputValue = ""
    result = FinputValue + SinputValue ;
    
    
    document.querySelector('.inpt3').value = result; 
   
}

