var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = 2077 + '-' + mm + '-' + dd;
document.getElementById("end_date_in").value = today;

function checkDate(inp){
    var today = new Date();
    var current_dd = String(today.getDate()).padStart(2, '0');
    var current_mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var current_yyyy = today.getFullYear();
    today = current_yyyy + '-' + current_mm + '-' + current_dd;
    is_error = false;
    if (inp.id == "start_date_in"){
        var inp_dd = inp.value.slice(8,10);
        var inp_mm = inp.value.slice(5,7);
        var inp_yyyy = inp.value.slice(0,4);

        if (inp_yyyy < current_yyyy){
            is_error = true;
        }
        if (inp_yyyy >= current_yyyy && inp_mm < current_mm){
            is_error = true;
        }
        if (inp_yyyy >= current_yyyy && inp_mm >= current_mm && inp_dd < current_dd){
            is_error = true;
        }

        alert(is_error);
    }
    if (inp.id == "end_date_in"){
        var inp_dd = inp.value.slice(8,10);
        var inp_mm = inp.value.slice(5,7);
        var inp_yyyy = inp.value.slice(0,4);

        if (inp_yyyy < current_yyyy){
            is_error = true;
        }
        if (inp_yyyy >= current_yyyy && inp_mm < current_mm){
            is_error = true;
        }
        if (inp_yyyy >= current_yyyy && inp_mm >= current_mm && inp_dd < current_dd){
            is_error = true;
        }

        //alert(is_error);
    }
}

function addQuestionFun(){
    let btn = document.getElementById("addQuestion");

    let i = 1;
    while (true) {
        if (document.getElementById(i) == null){
            break;
        }
        i += 1;
    }

    question_block = '<div id="${i}" class="card mb-3"> <div class="card-body"> <div class="row mb-3 mb-lg-0"> <div class="col-12 d-flex justify-content-center d-lg-none"> <span class="">Заголовок вопроса</span> </div> </div> <div class="input-group mb-3"> <div class="input-group-prepend"> <span class="input-group-text d-lg-flex d-none">Заголовок вопроса</span> </div> <input name="question_header_${i}" type="text" class="form-control" placeholder="Как вам погода?" required> </div> <div class="row mb-3 mb-lg-0"> <div class="col-12 d-flex justify-content-center d-lg-none"> <span class="">Описание вопроса</span> </div> </div> <div class="input-group mb-3"> <div class="input-group-prepend"> <span class="input-group-text d-lg-flex d-none" >Описание вопроса</span> </div> <textarea id = "question_description_${i}" name = "question_description_${i}" class="form-control" placeholder="Оцените погоду по 5-ти бальной шкале"></textarea> </div> <div class="text-center"> <button id="AddAnswer_${i}" type="button" class="btn btn-light mb-lg-0 mb-3 d-none" onclick="AddAnswer(this, ${i});">Добавить ответ</button> <button id="RemoveAnswer_${i}" type="button" class="btn btn-light mb-lg-0 mb-3 d-none" onclick="RemoveAnswer(this, ${i});">Удалить ответ</button> <button id="CustomAnswers_${i}" type="button" class="btn btn-light mb-lg-0 mb-3" onclick="CustomAnswers(this);">Задать свои ответы</button> <button id="DefaultAnswers_${i}" type="button" class="btn btn-light mb-lg-0 mb-3 active" onclick="DefaultAnswers(this);">Ответы 1-5</button> <button id="${i}" type="button" class="btn btn-light mb-lg-0 mb-3" onclick="AddCommentField(this);">Добавить поле коментария</button> <input id="isCommentVal_${i}" name="isCommentVal_${i}" class="d-none" type="text" value="Not"> </div> </div></div>'

    btn.insertAdjacentHTML('beforebegin', question_block);
}

function removeQuestionFun(){
    let i = 1;
    while (true) {
        if (document.getElementById(i) == null){
            i -= 1;
            break;
        }
        i += 1;
    }
    if (i != 1){
        document.getElementById(i).remove();
    }
}

function CustomAnswers(btn){

    var id_ = btn.id.toString().slice(-1);
    btn.classList.add('active');
    document.getElementById('DefaultAnswers_'+id_).classList.remove('active');
    document.getElementById('AddAnswer_'+id_).classList.remove('d-none');
    document.getElementById('RemoveAnswer_'+id_).classList.remove('d-none');
    //document.getElementById('variant'+id_).textContent = "cus";
    document.getElementById('question_description_'+id_).textContent = "Выберите вариант ответа";
}

function DefaultAnswers(btn){
    var id_ = btn.id.toString().slice(-1);
    btn.classList.add('active');
    document.getElementById('CustomAnswers_'+id_).classList.remove('active');
    document.getElementById('AddAnswer_'+id_).classList.add('d-none');
    document.getElementById('RemoveAnswer_'+id_).classList.add('d-none');
    //document.getElementById('variant'+id_).textContent = "def";
    document.getElementById('question_description_'+id_).textContent = "Выберите вариант ответа от 1 до 5";
    let i = 1;
    while (true) {
        if (document.getElementById(id_+"_"+i+"_answer") == null){
            break;
        }
        document.getElementById(id_+"_"+i+"_answer").remove();
        i += 1;
    }
}

function AddAnswer(btn, id_){
    let i = 1;
    while (true) {
        if (document.getElementById(id_+"_"+i+"_answer") == null){
            break;
        }
        i += 1;
    }
    answer = '<div id="${id_}_${i}_answer" class="input-group mb-3"> <div class="input-group-prepend"> <span class="input-group-text" >Ответ ${i}</span> </div> <input id="${id_}_${i}_input" name="${id_}_${i}_ans" type="text" class="form-control" placeholder="Введите ответ"> </div>'
    btn.insertAdjacentHTML('beforebegin', answer);
    
}

function RemoveAnswer(btn, id_){
    let i = 1;
    while (true) {
        if (document.getElementById(id_+"_"+i+"_answer") == null){
            break;
        }
        i += 1;
    }
    i -= 1;
    document.getElementById(id_+"_"+i+"_answer").remove();
}

function remove_end_date(btn){
    if (document.getElementById("end_date_in").disabled == false){
        document.getElementById("end_date_in").disabled = true;
        document.getElementById("end_date_in").value = null;
        btn.textContent = "Добавить дату окончания";
    }
    else{
        document.getElementById("end_date_in").disabled = false;
        document.getElementById("end_date_in").value = 2077 + '-' + '07' + '-' + '07';
        btn.textContent = "Бессрочная форма";
    }
}

function AddCommentField(btn){
    if (btn.textContent == "Добавить поле коментария"){
        btn.classList.add('active');
        btn.textContent = "Добавлено поле коментария";
        document.getElementById('isCommentVal_'+btn.id).value= "Yes";
    }
    else if (btn.textContent == "Добавлено поле коментария"){
        btn.classList.remove('active');
        btn.textContent = "Добавить поле коментария";
        document.getElementById('isCommentVal_'+btn.id).value= "Not";
    }

}
