
    function allowDrop(ev) {
       
        ev.preventDefault();
    if (ev.target.getAttribute("draggable") == "true")
    ev.dataTransfer.dropEffect = "none"; // dropping is not allowed
    else 
    ev.dataTransfer.dropEffect = "move"; // drop allowed
    
      }
        
 function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }
    
        
  function drop(ev) {
    
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            
            ev.target.appendChild(document.getElementById(data));
           
         check();
    
            
           if(check() !=="b"){
           
           if(document.getElementById(data).src===document.getElementById("im1").src)
           document.getElementById("pturn").innerHTML="player 2 turn";
           else if(document.getElementById(data).src===document.getElementById("im4").src)
           document.getElementById("pturn").innerHTML="player 1 turn";}

      else if(check()==="b") { 

               document.getElementById("pturn").innerHTML=" ";
        
           document.getElementById("playAgain").innerHTML="Play Again";      
           document.getElementById("displayGame").style.display="none"

           if(document.getElementById(data).src===document.getElementById("im1").src){
           document.getElementById("player").innerHTML="Player 1 Won";
        document.getElementById("pic").src=document.getElementById(data).src;}
           else if(document.getElementById(data).src===document.getElementById("im4").src){
           document.getElementById("player").innerHTML="Player 2 Won";
           document.getElementById("pic").src=document.getElementById(data).src;}} 
        

          
          
            
        }
        
           function check(){
            let MyId1=document.getElementById("myId1");
            let MyId2=document.getElementById("myId2");
            let MyId3=document.getElementById("myId3");
            let MyId4=document.getElementById("myId4");
            let MyId5=document.getElementById("myId5");
            let MyId6=document.getElementById("myId6");
            let MyId7=document.getElementById("myId7");
            let MyId8=document.getElementById("myId8");
            let MyId9=document.getElementById("myId9"); 
            let mypic1 = document.getElementById("im1");
            let Mypic2 = document.getElementById("im4");
            console.log("player check was called");
            if (!(MyId1.children[0] ===undefined || MyId2.children[0] ===undefined ||MyId3.children[0] ===undefined) &&  
                !(MyId2.children[0] ===undefined || MyId5.children[0] ===undefined || MyId8.children[0] ===undefined) && 
                !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) ) {
                    if(MyId1.children[0].src === MyId2.children[0].src &&
                        MyId1.children[0].src === MyId3.children[0].src
                         && MyId2.children[0].src===MyId3.children[0].src){                    
                        eGame(); 
                       return  "b";} 
                       else if(MyId2.children[0].src === MyId5.children[0].src &&
                        MyId2.children[0].src === MyId8.children[0].src
                         && MyId5.children[0].src===MyId8.children[0].src) {
                        eGame(); 
                       return  "b";}
                       else if(MyId3.children[0].src === MyId5.children[0].src &&
                        MyId3.children[0].src === MyId7.children[0].src
                         && MyId5.children[0].src===MyId7.children[0].src) {
                        eGame(); 
                       return  "b";}}

              else  if (!(MyId1.children[0] ===undefined || MyId2.children[0] ===undefined ||MyId3.children[0] ===undefined) &&  
                       !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) && 
                       !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) ) {
                           if(MyId1.children[0].src === MyId2.children[0].src &&
                               MyId1.children[0].src === MyId3.children[0].src
                                && MyId2.children[0].src===MyId3.children[0].src){                    
                               eGame(); 
                              return  "b";} 
                              else if(MyId1.children[0].src === MyId5.children[0].src &&
                               MyId1.children[0].src === MyId9.children[0].src
                                && MyId5.children[0].src===MyId9.children[0].src) {
                               eGame(); 
                              return  "b";}
                              else if(MyId3.children[0].src === MyId5.children[0].src &&
                               MyId3.children[0].src === MyId7.children[0].src
                                && MyId5.children[0].src===MyId7.children[0].src) {
                               eGame(); 
                              return  "b";}}
            else  if (!(MyId1.children[0] ===undefined || MyId2.children[0] ===undefined ||MyId3.children[0] ===undefined) &&  
            !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) && 
            !(MyId3.children[0] ===undefined || MyId6.children[0] ===undefined || MyId9.children[0] ===undefined) ) {
                if(MyId1.children[0].src === MyId2.children[0].src &&
                    MyId1.children[0].src === MyId3.children[0].src
                     && MyId2.children[0].src===MyId3.children[0].src){                    
                    eGame(); 
                   return  "b";} 
                   else if(MyId1.children[0].src === MyId5.children[0].src &&
                    MyId1.children[0].src === MyId9.children[0].src
                     && MyId5.children[0].src===MyId9.children[0].src) {
                    eGame(); 
                   return  "b";}
                   else if(MyId3.children[0].src === MyId6.children[0].src &&
                    MyId3.children[0].src === MyId9.children[0].src
                     && MyId6.children[0].src===MyId9.children[0].src) {
                    eGame(); 
                   return  "b";}



           }
           else  if (!(MyId1.children[0] ===undefined || MyId4.children[0] ===undefined ||MyId7.children[0] ===undefined) &&  
           !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) && 
           !(MyId4.children[0] ===undefined || MyId5.children[0] ===undefined || MyId6.children[0] ===undefined) ) {
               if(MyId1.children[0].src === MyId4.children[0].src &&
                   MyId1.children[0].src === MyId7.children[0].src
                    && MyId4.children[0].src===MyId7.children[0].src){                    
                   eGame(); 
                  return  "b";} 
                  else if(MyId1.children[0].src === MyId5.children[0].src &&
                   MyId1.children[0].src === MyId9.children[0].src
                    && MyId5.children[0].src===MyId9.children[0].src) {
                   eGame(); 
                  return  "b";}
                  else if(MyId4.children[0].src === MyId5.children[0].src &&
                   MyId4.children[0].src === MyId6.children[0].src
                    && MyId5.children[0].src===MyId6.children[0].src) {
                   eGame(); 
                  return  "b";}}

         else  if (!(MyId1.children[0] ===undefined || MyId4.children[0] ===undefined ||MyId7.children[0] ===undefined) &&  
                  !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) && 
                  !(MyId7.children[0] ===undefined || MyId8.children[0] ===undefined || MyId9.children[0] ===undefined) ) {
                      if(MyId1.children[0].src === MyId4.children[0].src &&
                          MyId1.children[0].src === MyId7.children[0].src
                           && MyId4.children[0].src===MyId7.children[0].src){                    
                          eGame(); 
                         return  "b";} 
                         else if(MyId1.children[0].src === MyId5.children[0].src &&
                          MyId1.children[0].src === MyId9.children[0].src
                           && MyId5.children[0].src===MyId9.children[0].src) {
                          eGame(); 
                         return  "b";}
                         else if(MyId7.children[0].src === MyId8.children[0].src &&
                          MyId7.children[0].src === MyId9.children[0].src
                           && MyId8.children[0].src===MyId9.children[0].src) {
                          eGame(); 
                         return  "b";}}

          else  if (!(MyId1.children[0] ===undefined || MyId4.children[0] ===undefined ||MyId7.children[0] ===undefined) &&  
                         !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) && 
                         !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) ) {
                             if(MyId1.children[0].src === MyId4.children[0].src &&
                                 MyId1.children[0].src === MyId7.children[0].src
                                  && MyId4.children[0].src===MyId7.children[0].src){                    
                                 eGame(); 
                                return  "b";} 
                                else if(MyId1.children[0].src === MyId5.children[0].src &&
                                 MyId1.children[0].src === MyId9.children[0].src
                                  && MyId5.children[0].src===MyId9.children[0].src) {
                                 eGame(); 
                                return  "b";}
                                else if(MyId3.children[0].src === MyId5.children[0].src &&
                                 MyId3.children[0].src === MyId7.children[0].src
                                  && MyId5.children[0].src===MyId7.children[0].src) {
                                 eGame(); 
                                return  "b";}}
        
         else  if (!(MyId1.children[0] ===undefined || MyId4.children[0] ===undefined ||MyId7.children[0] ===undefined) &&  
            !(MyId4.children[0] ===undefined || MyId5.children[0] ===undefined || MyId6.children[0] ===undefined) && 
                !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) ) {
                 if(MyId1.children[0].src === MyId4.children[0].src &&
                      MyId1.children[0].src === MyId7.children[0].src
                          && MyId4.children[0].src===MyId7.children[0].src){                    
                      eGame(); 
                          return  "b";} 
                      else if(MyId4.children[0].src === MyId5.children[0].src &&
                                        MyId4.children[0].src === MyId6.children[0].src
                                         && MyId5.children[0].src===MyId6.children[0].src) {
                                        eGame(); 
                                       return  "b";}
                                       else if(MyId3.children[0].src === MyId5.children[0].src &&
                                        MyId3.children[0].src === MyId7.children[0].src
                                         && MyId5.children[0].src===MyId7.children[0].src) {
                                        eGame(); 
                                       return  "b";}}

          else  if (!(MyId7.children[0] ===undefined || MyId8.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
                         !(MyId3.children[0] ===undefined || MyId6.children[0] ===undefined || MyId9.children[0] ===undefined) && 
                         !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) ) {
                             if(MyId7.children[0].src === MyId8.children[0].src &&
                                 MyId7.children[0].src === MyId9.children[0].src
                                  && MyId8.children[0].src===MyId9.children[0].src){                    
                                 eGame(); 
                                return  "b";} 
                                else if(MyId3.children[0].src === MyId6.children[0].src &&
                                 MyId3.children[0].src === MyId9.children[0].src
                                  && MyId6.children[0].src===MyId9.children[0].src) {
                                 eGame(); 
                                return  "b";}
                                else if(MyId3.children[0].src === MyId5.children[0].src &&
                                 MyId3.children[0].src === MyId7.children[0].src
                                  && MyId5.children[0].src===MyId7.children[0].src) {
                                 eGame(); 
                                return  "b";}}

         else  if (!(MyId7.children[0] ===undefined || MyId8.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
                              !(MyId2.children[0] ===undefined || MyId5.children[0] ===undefined || MyId8.children[0] ===undefined) && 
                                !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) ) {
                                    if(MyId7.children[0].src === MyId8.children[0].src &&
                                        MyId7.children[0].src === MyId9.children[0].src
                                         && MyId8.children[0].src===MyId9.children[0].src){                    
                                        eGame(); 
                                       return  "b";} 
                                       else if(MyId2.children[0].src === MyId5.children[0].src &&
                                        MyId2.children[0].src === MyId8.children[0].src
                                         && MyId5.children[0].src===MyId8.children[0].src) {
                                        eGame(); 
                                       return  "b";}
                                       else if(MyId1.children[0].src === MyId5.children[0].src &&
                                        MyId1.children[0].src === MyId9.children[0].src
                                         && MyId5.children[0].src===MyId9.children[0].src) {
                                        eGame(); 
                                       return  "b";}}

                //

                else  if (!(MyId7.children[0] ===undefined || MyId8.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
                !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) && 
                  !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) ) {
                      if(MyId7.children[0].src === MyId8.children[0].src &&
                          MyId7.children[0].src === MyId9.children[0].src
                           && MyId8.children[0].src===MyId9.children[0].src){                    
                          eGame(); 
                         return  "b";} 
                         else if(MyId1.children[0].src === MyId5.children[0].src &&
                          MyId1.children[0].src === MyId9.children[0].src
                           && MyId5.children[0].src===MyId9.children[0].src) {
                          eGame(); 
                         return  "b";}
                         else if(MyId3.children[0].src === MyId5.children[0].src &&
                          MyId3.children[0].src === MyId7.children[0].src
                           && MyId5.children[0].src===MyId7.children[0].src) {
                          eGame(); 
                         return  "b";}}

                //
                
            else  if (!(MyId7.children[0] ===undefined || MyId8.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
                    !(MyId2.children[0] ===undefined || MyId5.children[0] ===undefined || MyId8.children[0] ===undefined) && 
                       !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) ) {
                          if(MyId7.children[0].src === MyId8.children[0].src &&
                                                 MyId7.children[0].src === MyId9.children[0].src
                                                  && MyId8.children[0].src===MyId9.children[0].src){                    
                                                 eGame(); 
                                                return  "b";} 
                                                else if(MyId2.children[0].src === MyId5.children[0].src &&
                                                 MyId2.children[0].src === MyId8.children[0].src
                                                  && MyId5.children[0].src===MyId8.children[0].src) {
                                                 eGame(); 
                                                return  "b";}
                                                else if(MyId3.children[0].src === MyId5.children[0].src &&
                                                 MyId3.children[0].src === MyId7.children[0].src
                                                  && MyId5.children[0].src===MyId7.children[0].src) {
                                                 eGame(); 
                                                return  "b";}}       


         else  if (!(MyId3.children[0] ===undefined || MyId6.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
                                       !(MyId4.children[0] ===undefined || MyId5.children[0] ===undefined || MyId6.children[0] ===undefined) && 
                                       !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) ) {
                                           if(MyId3.children[0].src === MyId6.children[0].src &&
                                               MyId3.children[0].src === MyId9.children[0].src
                                                && MyId6.children[0].src===MyId9.children[0].src){                    
                                               eGame(); 
                                              return  "b";} 
                                              else if(MyId4.children[0].src === MyId5.children[0].src &&
                                               MyId4.children[0].src === MyId6.children[0].src
                                                && MyId5.children[0].src===MyId5.children[0].src) {
                                               eGame(); 
                                              return  "b";}
                                              else if(MyId3.children[0].src === MyId5.children[0].src &&
                                               MyId3.children[0].src === MyId7.children[0].src
                                                && MyId5.children[0].src===MyId7.children[0].src) {
                                               eGame(); 
                                              return  "b";}}

             else  if (!(MyId3.children[0] ===undefined || MyId6.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
                  !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) && 
                 !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) ) {
                     if(MyId3.children[0].src === MyId6.children[0].src &&
                      MyId3.children[0].src === MyId9.children[0].src
                          && MyId6.children[0].src===MyId9.children[0].src){                    
                                 eGame(); 
                         return  "b";} 
                  else if(MyId1.children[0].src === MyId5.children[0].src &&
                  MyId1.children[0].src === MyId9.children[0].src
                  && MyId5.children[0].src===MyId9.children[0].src) {
                 eGame(); 
                  return  "b";}
                   else if(MyId3.children[0].src === MyId5.children[0].src &&
                      MyId3.children[0].src === MyId7.children[0].src
                  && MyId5.children[0].src===MyId7.children[0].src) {
                                 eGame(); 
                      return  "b";}}



                      else  if (!(MyId3.children[0] ===undefined || MyId6.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
                      !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) && 
                     !(MyId4.children[0] ===undefined || MyId5.children[0] ===undefined || MyId6.children[0] ===undefined) ) {
                         if(MyId3.children[0].src === MyId6.children[0].src &&
                          MyId3.children[0].src === MyId9.children[0].src
                              && MyId6.children[0].src===MyId9.children[0].src){                    
                                     eGame(); 
                             return  "b";} 
                      else if(MyId1.children[0].src === MyId5.children[0].src &&
                      MyId1.children[0].src === MyId9.children[0].src
                      && MyId5.children[0].src===MyId9.children[0].src) {
                     eGame(); 
                      return  "b";}
                       else if(MyId4.children[0].src === MyId5.children[0].src &&
                          MyId4.children[0].src === MyId6.children[0].src
                      && MyId5.children[0].src===MyId6.children[0].src) {
                                     eGame(); 
                          return  "b";}}

    // double compare
    if (!(MyId1.children[0] ===undefined || MyId2.children[0] ===undefined ||MyId3.children[0] ===undefined) &&  
                !(MyId4.children[0] ===undefined || MyId5.children[0] ===undefined || MyId6.children[0] ===undefined) ) {
                    if(MyId1.children[0].src === MyId2.children[0].src &&
                        MyId1.children[0].src === MyId3.children[0].src
                         && MyId2.children[0].src===MyId3.children[0].src){                    
                        eGame(); 
                       return  "b";} 
                       else if(MyId4.children[0].src === MyId5.children[0].src &&
                        MyId4.children[0].src === MyId6.children[0].src
                         && MyId5.children[0].src===MyId6.children[0].src) {
                        eGame(); 
                       return  "b";}
                      }

else  if (!(MyId1.children[0] ===undefined || MyId2.children[0] ===undefined ||MyId3.children[0] ===undefined) &&  
           !(MyId1.children[0] ===undefined || MyId4.children[0] ===undefined || MyId7.children[0] ===undefined) )
            {
    if(MyId1.children[0].src === MyId2.children[0].src &&
        MyId1.children[0].src === MyId3.children[0].src
         && MyId2.children[0].src===MyId3.children[0].src){                    
        eGame(); 
       return  "b";} 
       else if(MyId1.children[0].src === MyId4.children[0].src &&
        MyId1.children[0].src === MyId7.children[0].src
         && MyId4.children[0].src===MyId7.children[0].src) {
        eGame(); 
       return  "b";}
      }

      else  if (!(MyId1.children[0] ===undefined || MyId2.children[0] ===undefined ||MyId3.children[0] ===undefined) &&  
      !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) )
       {
if(MyId1.children[0].src === MyId2.children[0].src &&
   MyId1.children[0].src === MyId3.children[0].src
    && MyId2.children[0].src===MyId3.children[0].src){                    
   eGame(); 
  return  "b";} 
  else if(MyId1.children[0].src === MyId5.children[0].src &&
   MyId1.children[0].src === MyId9.children[0].src
    && MyId5.children[0].src===MyId9.children[0].src) {
   eGame(); 
  return  "b";}
 }

 else  if (!(MyId1.children[0] ===undefined || MyId2.children[0] ===undefined ||MyId3.children[0] ===undefined) &&  
 !(MyId3.children[0] ===undefined || MyId6.children[0] ===undefined || MyId9.children[0] ===undefined) )
  {
if(MyId1.children[0].src === MyId2.children[0].src &&
MyId1.children[0].src === MyId3.children[0].src
&& MyId2.children[0].src===MyId3.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId3.children[0].src === MyId6.children[0].src &&
MyId3.children[0].src === MyId9.children[0].src
&& MyId6.children[0].src===MyId9.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId1.children[0] ===undefined || MyId2.children[0] ===undefined ||MyId3.children[0] ===undefined) &&  
 !(MyId7.children[0] ===undefined || MyId8.children[0] ===undefined || MyId9.children[0] ===undefined) )
  {
if(MyId1.children[0].src === MyId2.children[0].src &&
MyId1.children[0].src === MyId3.children[0].src
&& MyId2.children[0].src===MyId3.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId7.children[0].src === MyId8.children[0].src &&
MyId7.children[0].src === MyId9.children[0].src
&& MyId8.children[0].src===MyId9.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId1.children[0] ===undefined || MyId2.children[0] ===undefined ||MyId3.children[0] ===undefined) &&  
 !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) )
  {
if(MyId1.children[0].src === MyId2.children[0].src &&
MyId1.children[0].src === MyId3.children[0].src
&& MyId2.children[0].src===MyId3.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId3.children[0].src === MyId5.children[0].src &&
MyId3.children[0].src === MyId7.children[0].src
&& MyId5.children[0].src===MyId7.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId1.children[0] ===undefined || MyId2.children[0] ===undefined ||MyId3.children[0] ===undefined) &&  
 !(MyId2.children[0] ===undefined || MyId5.children[0] ===undefined || MyId8.children[0] ===undefined) )
  {
if(MyId1.children[0].src === MyId2.children[0].src &&
MyId1.children[0].src === MyId3.children[0].src
&& MyId2.children[0].src===MyId3.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId2.children[0].src === MyId5.children[0].src &&
MyId2.children[0].src === MyId8.children[0].src
&& MyId5.children[0].src===MyId8.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId1.children[0] ===undefined || MyId4.children[0] ===undefined ||MyId7.children[0] ===undefined) &&  
 !(MyId2.children[0] ===undefined || MyId5.children[0] ===undefined || MyId8.children[0] ===undefined) )
  {
if(MyId1.children[0].src === MyId4.children[0].src &&
MyId1.children[0].src === MyId7.children[0].src
&& MyId4.children[0].src===MyId7.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId2.children[0].src === MyId5.children[0].src &&
MyId2.children[0].src === MyId8.children[0].src
&& MyId5.children[0].src===MyId8.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId1.children[0] ===undefined || MyId4.children[0] ===undefined ||MyId7.children[0] ===undefined) &&  
 !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) )
  {
if(MyId1.children[0].src === MyId4.children[0].src &&
MyId1.children[0].src === MyId7.children[0].src
&& MyId4.children[0].src===MyId7.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId3.children[0].src === MyId5.children[0].src &&
MyId3.children[0].src === MyId7.children[0].src
&& MyId5.children[0].src===MyId7.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId1.children[0] ===undefined || MyId4.children[0] ===undefined ||MyId7.children[0] ===undefined) &&  
 !(MyId4.children[0] ===undefined || MyId5.children[0] ===undefined || MyId6.children[0] ===undefined) )
  {
if(MyId1.children[0].src === MyId4.children[0].src &&
MyId1.children[0].src === MyId7.children[0].src
&& MyId4.children[0].src===MyId7.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId4.children[0].src === MyId5.children[0].src &&
MyId4.children[0].src === MyId6.children[0].src
&& MyId5.children[0].src===MyId6.children[0].src) {
eGame(); 
return  "b";}
}


else  if (!(MyId1.children[0] ===undefined || MyId4.children[0] ===undefined ||MyId7.children[0] ===undefined) &&  
 !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) )
  {
if(MyId1.children[0].src === MyId4.children[0].src &&
MyId1.children[0].src === MyId7.children[0].src
&& MyId4.children[0].src===MyId7.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId1.children[0].src === MyId5.children[0].src &&
MyId1.children[0].src === MyId9.children[0].src
&& MyId5.children[0].src===MyId9.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId1.children[0] ===undefined || MyId4.children[0] ===undefined ||MyId7.children[0] ===undefined) &&  
 !(MyId3.children[0] ===undefined || MyId6.children[0] ===undefined || MyId9.children[0] ===undefined) )
  {
if(MyId1.children[0].src === MyId4.children[0].src &&
MyId1.children[0].src === MyId7.children[0].src
&& MyId4.children[0].src===MyId7.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId3.children[0].src === MyId6.children[0].src &&
MyId3.children[0].src === MyId9.children[0].src
&& MyId6.children[0].src===MyId9.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId1.children[0] ===undefined || MyId4.children[0] ===undefined ||MyId7.children[0] ===undefined) &&  
 !(MyId7.children[0] ===undefined || MyId8.children[0] ===undefined || MyId9.children[0] ===undefined) )
  {
if(MyId1.children[0].src === MyId4.children[0].src &&
MyId1.children[0].src === MyId7.children[0].src
&& MyId4.children[0].src===MyId7.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId7.children[0].src === MyId8.children[0].src &&
MyId7.children[0].src === MyId9.children[0].src
&& MyId8.children[0].src===MyId9.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId7.children[0] ===undefined || MyId8.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
 !(MyId4.children[0] ===undefined || MyId5.children[0] ===undefined || MyId6.children[0] ===undefined) )
  {
if(MyId7.children[0].src === MyId8.children[0].src &&
MyId7.children[0].src === MyId9.children[0].src
&& MyId8.children[0].src===MyId9.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId4.children[0].src === MyId5.children[0].src &&
MyId4.children[0].src === MyId6.children[0].src
&& MyId5.children[0].src===MyId6.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId7.children[0] ===undefined || MyId8.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
 !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) )
  {
if(MyId7.children[0].src === MyId8.children[0].src &&
MyId7.children[0].src === MyId9.children[0].src
&& MyId8.children[0].src===MyId9.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId1.children[0].src === MyId5.children[0].src &&
MyId1.children[0].src === MyId9.children[0].src
&& MyId5.children[0].src===MyId9.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId7.children[0] ===undefined || MyId8.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
 !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) )
  {
if(MyId7.children[0].src === MyId8.children[0].src &&
MyId7.children[0].src === MyId9.children[0].src
&& MyId8.children[0].src===MyId9.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId3.children[0].src === MyId5.children[0].src &&
MyId3.children[0].src === MyId7.children[0].src
&& MyId5.children[0].src===MyId7.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId7.children[0] ===undefined || MyId8.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
 !(MyId2.children[0] ===undefined || MyId5.children[0] ===undefined || MyId8.children[0] ===undefined) )
  {
if(MyId7.children[0].src === MyId8.children[0].src &&
MyId7.children[0].src === MyId9.children[0].src
&& MyId8.children[0].src===MyId9.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId2.children[0].src === MyId5.children[0].src &&
MyId2.children[0].src === MyId8.children[0].src
&& MyId5.children[0].src===MyId8.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId3.children[0] ===undefined || MyId6.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
 !(MyId2.children[0] ===undefined || MyId5.children[0] ===undefined || MyId8.children[0] ===undefined) )
  {
if(MyId3.children[0].src === MyId6.children[0].src &&
MyId3.children[0].src === MyId9.children[0].src
&& MyId6.children[0].src===MyId9.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId2.children[0].src === MyId5.children[0].src &&
MyId2.children[0].src === MyId8.children[0].src
&& MyId5.children[0].src===MyId8.children[0].src) {
eGame(); 
return  "b";}
}


else  if (!(MyId3.children[0] ===undefined || MyId6.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
 !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) )
  {
if(MyId3.children[0].src === MyId6.children[0].src &&
MyId3.children[0].src === MyId9.children[0].src
&& MyId6.children[0].src===MyId9.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId1.children[0].src === MyId5.children[0].src &&
MyId1.children[0].src === MyId9.children[0].src
&& MyId5.children[0].src===MyId9.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId3.children[0] ===undefined || MyId6.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
 !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) )
  {
if(MyId3.children[0].src === MyId6.children[0].src &&
MyId3.children[0].src === MyId9.children[0].src
&& MyId6.children[0].src===MyId9.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId3.children[0].src === MyId5.children[0].src &&
MyId3.children[0].src === MyId7.children[0].src
&& MyId5.children[0].src===MyId7.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId3.children[0] ===undefined || MyId6.children[0] ===undefined ||MyId9.children[0] ===undefined) &&  
 !(MyId4.children[0] ===undefined || MyId5.children[0] ===undefined || MyId6.children[0] ===undefined) )
  {
if(MyId3.children[0].src === MyId6.children[0].src &&
MyId3.children[0].src === MyId9.children[0].src
&& MyId6.children[0].src===MyId9.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId4.children[0].src === MyId5.children[0].src &&
MyId4.children[0].src === MyId6.children[0].src
&& MyId5.children[0].src===MyId6.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId4.children[0] ===undefined || MyId5.children[0] ===undefined ||MyId6.children[0] ===undefined) &&  
 !(MyId2.children[0] ===undefined || MyId5.children[0] ===undefined || MyId8.children[0] ===undefined) )
  {
if(MyId4.children[0].src === MyId5.children[0].src &&
MyId4.children[0].src === MyId6.children[0].src
&& MyId5.children[0].src===MyId6.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId2.children[0].src === MyId5.children[0].src &&
MyId2.children[0].src === MyId8.children[0].src
&& MyId5.children[0].src===MyId8.children[0].src) {
eGame(); 
return  "b";}
}


else  if (!(MyId4.children[0] ===undefined || MyId5.children[0] ===undefined ||MyId6.children[0] ===undefined) &&  
 !(MyId1.children[0] ===undefined || MyId5.children[0] ===undefined || MyId9.children[0] ===undefined) )
  {
if(MyId4.children[0].src === MyId5.children[0].src &&
MyId4.children[0].src === MyId6.children[0].src
&& MyId5.children[0].src===MyId9.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId1.children[0].src === MyId5.children[0].src &&
MyId1.children[0].src === MyId9.children[0].src
&& MyId5.children[0].src===MyId9.children[0].src) {
eGame(); 
return  "b";}
}

else  if (!(MyId4.children[0] ===undefined || MyId5.children[0] ===undefined ||MyId6.children[0] ===undefined) &&  
 !(MyId3.children[0] ===undefined || MyId5.children[0] ===undefined || MyId7.children[0] ===undefined) )
  {
if(MyId4.children[0].src === MyId5.children[0].src &&
MyId4.children[0].src === MyId6.children[0].src
&& MyId5.children[0].src===MyId9.children[0].src){                    
eGame(); 
return  "b";} 
else if(MyId3.children[0].src === MyId5.children[0].src &&
MyId3.children[0].src === MyId7.children[0].src
&& MyId5.children[0].src===MyId7.children[0].src) {
eGame(); 
return  "b";}
}

// single compare


if (!(MyId1.children[0] === undefined || MyId2.children[0] ===undefined ||
    MyId3.children[0] ===undefined)) 
     {

   if(MyId1.children[0].src === MyId2.children[0].src &&
    MyId1.children[0].src === MyId3.children[0].src
     && MyId2.children[0].src===MyId3.children[0].src) {
    
    eGame(); 
   return  "b";}  }
      else if (!((MyId1.children[0] ===undefined )||( MyId4.children[0] ===undefined) ||
    (MyId7.children[0] ===undefined)) )
     {
    
   if((MyId1.children[0].src === MyId4.children[0].src) &&
    (MyId1.children[0].src === MyId7.children[0].src) && 
    (MyId4.children[0].src === MyId7.children[0].src)) {
   
     eGame();
     return "b";  }  }

     else if (!((MyId2.children[0] ===undefined) || (MyId5.children[0] ===undefined) ||
       (MyId8.children[0] ===undefined))) 
        {

      if((MyId2.children[0].src === MyId5.children[0].src) &&
       (MyId2.children[0].src === MyId8.children[0].src) &&
       (MyId5.children[0].src === MyId8.children[0].src)) {
        eGame();
        return "b";
       } }

    else if (!((MyId1.children[0] ===undefined) || (MyId5.children[0] ===undefined) ||
    (MyId9.children[0] ===undefined))) 
     {
    
   if((MyId1.children[0].src === MyId5.children[0].src) &&
    (MyId1.children[0].src === MyId9.children[0].src) &&
    (MyId5.children[0].src=== MyId9.children[0].src)) 
{  

 eGame();
return "b";   } 
     }

     else if (!((MyId4.children[0] ===undefined) || (MyId5.children[0] ===undefined) ||
    (MyId6.children[0] ===undefined))) 
     {

   if((MyId4.children[0].src === MyId5.children[0].src) &&
    (MyId4.children[0].src === MyId6.children[0].src) &&
    (MyId5.children[0].src === MyId6.children[0].src)) {
 
          
     eGame();
    return "b";  }}

    else if (!((MyId7.children[0] ===undefined) || (MyId8.children[0] ===undefined) ||
    (MyId9.children[0] ===undefined))) 
     {
       console.log("7,8,9 was called");
   if((MyId7.children[0].src === MyId8.children[0].src) &&
    (MyId7.children[0].src === MyId9.children[0].src) &&
    (MyId8.children[0].src === MyId9.children[0].src)) {
    eGame();
     return "b";  } }

    else if (!((MyId3.children[0] ===undefined) || (MyId5.children[0] ===undefined) ||
     (MyId7.children[0] ===undefined))) 
      {
       
    if((MyId3.children[0].src === MyId5.children[0].src) &&
     (MyId3.children[0].src === MyId7.children[0].src) &&
     (MyId5.children[0].src === MyId7.children[0].src)) {  
       
  eGame();
 return "b"; }  }

     else if (!((MyId3.children[0] ===undefined) || (MyId6.children[0] ===undefined) ||
    (MyId9.children[0] ===undefined))) 
     {
   if((MyId3.children[0].src === MyId6.children[0].src) &&
    (MyId3.children[0].src === MyId9.children[0].src) &&
    (MyId6.children[0].src === MyId9.children[0].src)) {

     eGame();
    return "b";
    }}
        }
    
             
    function eGame(){
               document.getElementById("win").innerHTML="Game Over!";
           }
    
     
           
            
    
    
               
    
    
