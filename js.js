let  sec=0;
   let min=0;
  let  hr=0;
   let count=0;
   let timer=false;
   //let str=document.getElementById("start");
   

   function start(){
    timer=true;
    stopwatch();
   }

   function stop(){
    timer=false;
   }

   function reset(){
    timer=false;
    sec=0;
    min=0;
    hr=0;count=0;
    document.getElementById("count").innerHTML=count;
   document.getElementById("sec").innerHTML=sec;
   document.getElementById("min").innerHTML=min;
   document.getElementById("hr").innerHTML=hr;
   }
  
  function stopwatch(){
   if(timer==true){
   count = count+1;
   if(count==100){
    count=0;
    sec+=1
   }
   if(sec==60){
    min+=1;
    sec=0;
   }
   if(min==60){
    min=0;
    hr+=1;
   }
   
   document.getElementById("count").innerHTML=count;
   document.getElementById("sec").innerHTML=sec;
   document.getElementById("min").innerHTML=min;
   document.getElementById("hr").innerHTML=hr;
   setTimeout("stopwatch()",10) 
  }
 }

   
