function clearScreen(){
    document.getElementById("result").value=" ";

}

function display(value){
    document.getElementById("result").value+=value;
}

function calculate(){
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value=q;
}


function sqrt(){
    let p=document.getElementById("result").value;
    let q=Math.sqrt(p);
    document.getElementById("result").value=q;

}