var min=0;
var sec=0;
var msec=0;
var minGet=document.getElementById("min");
var secGet=document.getElementById("sec");
var msecGet=document.getElementById("msec");
var interval;


function timer()
{
    msec++;
    msecGet.innerHTML=msec;
    if (msec>=100)
    {
        sec++;
        secGet.innerHTML=sec;
        msec=0;
    }
    else if (sec>=60)
    {
        min++;
        minGet.innerHTML=min;
        sec=0;
    }
}

function start()
{
    interval = setInterval(timer,10);
    document.getElementById('start').disabled=true;

}
function pause()
{
    clearInterval(interval);
    document.getElementById('start').disabled=false;
}
function reset()
{
    min=0;
    sec=0;
    msec=0;
    minGet.innerHTML=min;
    secGet.innerHTML=sec;
    msecGet.innerHTML=msec;
    pause();
}
