var typing_val = false; 
var index=0; 
var typing_index = 0;
var typing_len = $(".intro_original>ul>li").length;


var typingTxt = $(".intro_original>ul>li").eq(typing_index).text(); 

typingTxt=typingTxt.split(""); 

if(typing_val==false){ 
    typing_val=true; 
    var num = setInterval(starting,100); 
} 
     
function starting(){ 
  $(".intro_typing ul li").removeClass("on");
   $(".intro_typing ul li").eq(typing_index).addClass("on");
 
  
  if(index<typingTxt.length){ 
     $(".intro_typing ul li").eq(typing_index).append(typingTxt[index]); 
     index++; 
   } else{ 
     if(typing_index<typing_len-1){

       typing_index++; 

        index=0;
        styping_val = false; 
        typingTxt = $(".intro_original>ul>li").eq(typing_index).text(); 
       

         clearInterval(num);

     
         setTimeout(function(){

           num = setInterval(starting,70);
         },1000);
        } else if(typing_index==typing_len-1){
          

           clearInterval(num);
          

          setTimeout(function(){
   
            typing_val = false; 
          typing_index=0;
          index=-0;
            
          typingTxt = $(".intro_original>ul>li").eq(typing_index).text(); 

          $(".intro_typing ul li").html("")

            num = setInterval(starting,100);
          }, 1000);
          
          
        }
    } 
}  

