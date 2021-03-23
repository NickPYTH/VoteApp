var end_date = document.getElementById("end_date").textContent;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
if (Number(end_date.slice(0,4)) < Number(today.slice(0,4))){
    document.getElementById("send").disabled = true;
    document.getElementById("send").textContent = "Опрос завершен";
}
else if (Number(end_date.slice(0,4)) == Number(today.slice(0,4))){
    if (Number(end_date.slice(5,7)) < Number(today.slice(5,7))){
        document.getElementById("send").disabled = true;
        document.getElementById("send").textContent = "Опрос завершен";
    }
    else if (Number(end_date.slice(5,7)) == Number(today.slice(5,7))){
        if (Number(end_date.slice(8,10)) < Number(today.slice(8,10))){
            document.getElementById("send").disabled = true;
            document.getElementById("send").textContent = "Опрос завершен";
        }
    }
}

current_url = document.location.pathname.slice(1,-1);
if (document.cookie.match(current_url) != null){
    document.getElementById("send").disabled = true;
    document.getElementById("send").textContent = "Вы уже голосовали"; 
}

