
function showCode(displayCode, showCode){
    document.getElementById(displayCode).style.display = "block";
    document.getElementById(showCode).style.display = "none";
}

function closeCode(displayCode, showCode){
    document.getElementById(showCode).style.display = "block";
    document.getElementById(displayCode).style.display = "none";
}

function exe(){
    console.log("I’m learning about");
    setTimeout(() => { console.log("Event Loop");}, 2000);
    console.log("the");
}
exe();