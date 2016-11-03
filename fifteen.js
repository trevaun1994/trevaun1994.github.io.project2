window.onload = function(){
    
    var Oall = document.getElementById('puzzlearea');              //Gets puzzle area containing divs
    var offsetTOP = '0px';
    var top = [];
    var left = [];
    
    piece = Oall.getElementsByTagName('div');                      //Gets each div

    for (var i=0; i<piece.length; i++){                         //Iterates all the divs
        piece[i].style.backgroundImage="url('background.jpg')"; //Applies background image and other grid properties
        piece[i].className = 'puzzlepiece';
        piece[i].style.left = (i%4*100)+'px';
        left.push(i%4*100 + 'px');
        if (i==0 || i==1 || i==2 || i==3 ){
            offsetTOP = '0px';
            top.push(offsetTOP);
        }else if (i==4 || i==5 || i==6|| i==7){
            offsetTOP = '100px';
            top.push(offsetTOP);
        }else if (i==8 || i==9 || i==10|| i==11){
            offsetTOP = '200px';
            top.push(offsetTOP);
        }else if (i==12 || i==13 || i==14|| i==15){
            offsetTOP = '300px';
            top.push(offsetTOP);
        }         
        
        piece[i].style.top = offsetTOP; 
        piece[i].style.backgroundPosition= '-' + piece[i].style.left + ' ' + '-' + offsetTOP;
        
    }
    if (movable(top, left))
            {
            this.className = 'movablepiece'; 
            }    
}

function movable(top,left){
    for (var i=0; i<top.length;i++){
        elu = elementFromPoint(top[i]-10, left[i]);
        eld = elementFromPoint(top[i] + 110, left[i]);
        ell = elementFromPoint(top[i], left[i] + 110);
        elr = elementFromPoint(top[i], left[i] -10);
        if ( elu.style.background == null | eld.style.background ==null | ell.style.background ==null | elr.style.background ==null ){
            return true;
        }
       
    }
}

shufflebutton.onclick = function() {
    
    var timerVar = setInterval(countTimer, 1000);
    var totalSeconds = 0;   
    ++totalSeconds;
    var hour = Math.floor(totalSeconds /3600);
    var minute = Math.floor((totalSeconds - hour*3600)/60);
    var seconds = totalSeconds - (hour*3600 + minute*60);
    document.getElementsByTagName("h1").innerHTML ="Fifteen Puzzle  Time Elasped: " hour + ":" + minute + ":" + seconds;
}

       
