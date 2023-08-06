function table1(){
    let table=+document.getElementById("num1").value;
    document.querySelector("#cal").innerHTML=""
        for (let i=0;i<10;i++) {
            document.querySelector("#cal").innerHTML+=`<h5>${table} x ${i+1}=${table*(i+1)}</h5>`;
    }
}

