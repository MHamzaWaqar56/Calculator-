function display(val){

    document.getElementById('calc').value += val;
    
    let borderColor = document.getElementsByTagName('input')
    for(let i=1; i<= borderColor.length; i++) {
        if(borderColor[i].value == val){
            borderColor[i].style.borderColor = "red";
        } else {
            borderColor[i].style.borderColor = "inherit";
        }
    }

    return val;


}


function solve(){

    let x = document.getElementById('calc').value;

    let y;
    try {
        y = eval(x);
        document.getElementById('calc').value = `= ${y}`;
    }
    catch {
        document.getElementById('calc').value = "Invalid Expression";
    }

    return y;

}

function clearScreen(){

    document.getElementById('calc').value = '';

}






