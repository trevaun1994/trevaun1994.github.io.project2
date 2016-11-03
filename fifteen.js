window.onload = function(){
    
    var Oall = document.getElementById('puzzlearea');              //Gets puzzle area containing divs
    var offsetTOP = '0px';
    
    piece = Oall.getElementsByTagName('div');                      //Gets each div

    for (var i=0; i<piece.length; i++){                         //Iterates all the divs
        piece[i].style.backgroundImage="url('background.jpg')"; //Applies background image and other grid properties
        piece[i].className = 'puzzlepiece';
        piece[i].style.left = (i%4*100)+'px';
        if (i==0 || i==1 || i==2 || i==3 ){
            offsetTOP = '0px';
        }else if (i==4 || i==5 || i==6|| i==7){
            offsetTOP = '100px';
        }else if (i==8 || i==9 || i==10|| i==11){
            offsetTOP = '200px';
        }else if (i==12 || i==13 || i==14|| i==15){
            offsetTOP = '300px';
        } 
        piece[i].style.top = offsetTOP; 
        piece[i].style.backgroundPosition= '-' + piece[i].style.left + ' ' + '-' + offsetTOP;
   
       
        var rect = piece[i].getBoundingClientRect();
        alert("Coordinates: " + rect.left + "px, " + rect.top + "px");
      /*  if (movable(parseInt(piece[i].innerHTML)))
            {
                this.className = 'movablepiece';
            }
    }
    
    function movable () */
    
    
    
    }
}