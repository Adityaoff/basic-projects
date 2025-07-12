const weight = document.querySelector("#Weight");
const height = document.querySelector("#height");
const button = document.querySelector("button");

button.addEventListener('click', function (e) {
    const wvalue = Number(weight.value);
    const hvalue = Number(height.value);
    
    if (hvalue === '' || hvalue <= 0 || isNaN(hvalue))
    {
        document.querySelector("#bmi").innerHTML = "please give a valid height";
    }
   else if (wvalue === '' || wvalue <=0 || isNaN(wvalue)) {
        document.querySelector("#bmi").innerHTML = "please give a valid weight";
    }
    else {
        const bmi = (wvalue / (hvalue * hvalue)).toFixed(2);
        document.querySelector("#bmi").innerHTML = bmi;
    }
})