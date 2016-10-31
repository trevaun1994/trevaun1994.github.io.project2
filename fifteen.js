/* var puzzlePiece;
var blink;
var timer;
var whiteSpaceY;
var whiteSpaceX; */

window.onload = function(){
    var pArea = document.getElementById('puzzlearea');              //Gets puzzle area containing divs
    
    piece = pArea.getElementsByTagName('div');                      //Gets each div and stores into an array

    for (var i=0; i<piece.length; i++)                              //Iterates all the divs
    {
        piece[i].style.backgroundImage="url('background.jpg')";   //Applies background image and other grid properties
        piece[i].className = 'puzzlepiece';                         //Applies the puzzlepiece class
        piece[i].style.left = (i%4*100)+'px';
        piece[i].style.top = (parseInt(i/4)*100) + 'px';
        piece[i].style.backgroundPosition= '-' + piece[i].style.left + ' ' + '-' + piece[i].style.top;
        piece[i].onmouseover = function()
        {
            if (canMove(parseInt(this.innerHTML)))
            {
                this.style.border = "2px solid red";
                this.style.color = "#006600";
            }
        };
        piece[i].onmouseout = function()
        {
            this.style.border = "2px solid black";
            this.style.color = "#000000";
        };

        piece[i].onclick = function()
        {
            if (canMove(parseInt(this.innerHTML)))
            {
                swap(this.innerHTML-1);
                if (checkFinish())
                {
                    youWin();
                }
                return;
            }
        };
    }

    whiteSpaceX = '300px';
    whiteSpaceY = '300px';

    var shufflebutton = document.getElementById('shufflebutton');
    shufflebutton.onclick = function()
    {

        for (var i=0; i<250; i++)
        {
            var rand = parseInt(Math.random()* 100) %4;
            if (rand == 0)
            {
                var tmp = calcUp(whiteSpaceX, whiteSpaceY);
                if ( tmp != -1)
                {
                    swap(tmp);
                }
            }
            if (rand == 1)
            {
                var tmp = calcDown(whiteSpaceX, whiteSpaceY);
                if ( tmp != -1) 
                {
                    swap(tmp);
                }
            }

            if (rand == 2)
            {
                var tmp = calcLeft(whiteSpaceX, whiteSpaceY);
                if ( tmp != -1)
                {
                    swap(tmp);
                }
            }

            if (rand == 3)
            {
                var tmp = calcRight(whiteSpaceX, whiteSpaceY);
                if (tmp != -1)
                {
                    swap(tmp);
                }
            }
        }
    };
};

function canMove(position)
{
    if (calcLeft(whiteSpaceX, whiteSpaceY) == (position-1))
    {
        return true;
    }

    if (calcDown(whiteSpaceX, whiteSpaceY) == (position-1))
    {
        return true;
    }

    if (calcUp(whiteSpaceX, whiteSpaceY) == (position-1))
    {
        return true;
    }

    if (calcRight(whiteSpaceX, whiteSpaceY) == (position-1))
    {
        return true;
    }
}

function Blink()
{
    blink --;
    if (blink == 0)
    {
        var body = document.getElementsByTagName('body');
        body[0].style.backgroundColor = "#FFFFFF";
        alert('You Win!');
        return;
    }
    if (blink % 2)
    {
        var body = document.getElementsByTagName('body');
        body[0].style.backgroundColor = "#00FF00";    
    }
    else
    {
        var body = document.getElementsByTagName('body');
        body[0].style.backgroundColor = "#FF0000";
    }
    timer = setTimeout(Blink, 100);
}

function youWin()
{
    var body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = "#FF0000";
    blink = 10;
    timer = setTimeout(Blink, 100);
}

function checkFinish()
{
    var flag = true;
    for (var i = 0; i < piece.length; i++) {
        var y = parseInt(piece[i].style.top);
        var x = parseInt(piece[i].style.left);

        if (x != (i%4*100) || y != parseInt(i/4)*100)
        {
            flag = false;
            break;
        }
    }
    return flag;
}

function calcLeft(x, y)
{
    var xx = parseInt(x);
    var yy = parseInt(y);

    if (xx > 0)
    {
        for (var i = 0; i < piece.length; i++) 
        {
            if (parseInt(piece[i].style.left) + 100 == xx && parseInt(piece[i].style.top) == yy)
            {
                return i;
            } 
        }
    }
    else 
    {
        return -1;
    }
}

function calcRight(x, y)
{
    var xx = parseInt(x);
    var yy = parseInt(y);
    if (xx < 300)
    {
        for (var i =0; i<piece.length; i++){
            if (parseInt(piece[i].style.left) - 100 == xx && parseInt(piece[i].style.top) == yy) 
            {
                return i;
            }
        }
    }
    else
    {
        return -1;
    } 
}

function calcUp(x, y)
{
    var xx = parseInt(x);
    var yy = parseInt(y);
    if (yy > 0)
    {
        for (var i=0; i<piece.length; i++)
        {
            if (parseInt(piece[i].style.top) + 100 == yy && parseInt(piece[i].style.left) == xx) 
            {
                return i;
            }
        } 
    }
    else 
    {
        return -1;
    }
}

function calcDown(x, y)
{
    var xx = parseInt(x);
    var yy = parseInt(y);
    if (yy < 300)
    {
        for (var i=0; i<piece.length; i++)
        {
            if (parseInt(piece[i].style.top) - 100 == yy && parseInt(piece[i].style.left) == xx) 
            {
                return i;
            }
        }
    }
    else
    {
        return -1;
    } 
}

function swap(where)
{
    var temp = piece[where].style.top;
    piece[where].style.top = whiteSpaceY;
    whiteSpaceY = temp;

    temp = piece[where].style.left;
    piece[where].style.left = whiteSpaceX;
    whiteSpaceX = temp;
}