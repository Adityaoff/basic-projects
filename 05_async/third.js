//Generate a Random color.

const randomColor = function () {
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
    {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}



let intervalId = null;

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const colorChanger = function () {
   document.body.style.backgroundColor = randomColor(); //randonColor() gives return value and there at that time only.
}

start.addEventListener('click', function() {
    if (intervalId === null) {
     intervalId = setInterval(colorChanger, 1000);   //Mistake :- line 27 (which was done) , written in line 38
    }
    console.log("STARTED");
    
})

stop.addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null;
})

/* Mistake = if you write { colorChanger() } means that you call function() right now and want to excute it there,
which will return undefined to setInterval which means it won't able run again . So , you need to pass function reference 
which passed like:- this color { colorChanger } . This is how you pass reference of function. */
