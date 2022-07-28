function func() {
    var para = document.createElement("input");
    var element = document.getElementById("div1");
    var count = document.getElementById('stack').value ;

    if (count < 30) {
            while (count > 0){
            element.appendChild(para);
            count -= 1;
            }
    }else{
        alert("No more than 30 !");
    }
}