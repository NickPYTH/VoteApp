"use strict";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

var yyyy = today.getFullYear();
today = 2077 + '-' + mm + '-' + dd;
document.getElementById("end_date_in").value = today;

function checkDate(inp) {
  var today = new Date();
  var current_dd = String(today.getDate()).padStart(2, '0');
  var current_mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

  var current_yyyy = today.getFullYear();
  today = current_yyyy + '-' + current_mm + '-' + current_dd;
  is_error = false;

  if (inp.id == "start_date_in") {
    var inp_dd = inp.value.slice(8, 10);
    var inp_mm = inp.value.slice(5, 7);
    var inp_yyyy = inp.value.slice(0, 4);

    if (inp_yyyy < current_yyyy) {
      is_error = true;
    }

    if (inp_yyyy >= current_yyyy && inp_mm < current_mm) {
      is_error = true;
    }

    if (inp_yyyy >= current_yyyy && inp_mm >= current_mm && inp_dd < current_dd) {
      is_error = true;
    }

    alert(is_error);
  }

  if (inp.id == "end_date_in") {
    var inp_dd = inp.value.slice(8, 10);
    var inp_mm = inp.value.slice(5, 7);
    var inp_yyyy = inp.value.slice(0, 4);

    if (inp_yyyy < current_yyyy) {
      is_error = true;
    }

    if (inp_yyyy >= current_yyyy && inp_mm < current_mm) {
      is_error = true;
    }

    if (inp_yyyy >= current_yyyy && inp_mm >= current_mm && inp_dd < current_dd) {
      is_error = true;
    } //alert(is_error);

  }
}

function addQuestionFun() {
  var btn = document.getElementById("addQuestion");
  var i = 1;
  var question_block;

  while (true) {
    if (document.getElementById(i) == null) {
      break;
    }

    i += 1;
  }

  //question_block = "\n    <div id=\"".concat(i, "\" class=\"card mb-3\">\n    <div class=\"card-body\">\n        <div class=\"row mb-3 mb-lg-0\">\n            <div class=\"col-12 d-flex justify-content-center d-lg-none\">\n                <span class=\"\">\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0430</span>\n            </div>\n        </div>\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text d-lg-flex d-none\">\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0430</span>\n            </div>\n            <input name=\"question_header_").concat(i, "\" type=\"text\" class=\"form-control\" placeholder=\"\u041A\u0430\u043A \u0432\u0430\u043C \u043F\u043E\u0433\u043E\u0434\u0430?\" required>\n        </div>\n\n        <div class=\"row mb-3 mb-lg-0\">\n            <div class=\"col-12 d-flex justify-content-center d-lg-none\">\n                <span class=\"\">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430</span>\n            </div>\n        </div>\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text d-lg-flex d-none\" >\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430</span>\n            </div>\n            <textarea id = \"question_description_").concat(i, "\" name = \"question_description_").concat(i, "\" class=\"form-control\" placeholder=\"\u041E\u0446\u0435\u043D\u0438\u0442\u0435 \u043F\u043E\u0433\u043E\u0434\u0443 \u043F\u043E 5-\u0442\u0438 \u0431\u0430\u043B\u044C\u043D\u043E\u0439 \u0448\u043A\u0430\u043B\u0435\"></textarea>\n        </div>\n        <div class=\"text-center\">\n            <button id=\"AddAnswer_").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3 d-none\" onclick=\"AddAnswer(this, ").concat(i, ");\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442</button>\n            <button id=\"RemoveAnswer_").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3 d-none\" onclick=\"RemoveAnswer(this, ").concat(i, ");\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442</button>\n            <button id=\"CustomAnswers_").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3\" onclick=\"CustomAnswers(this);\">\u0417\u0430\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u043E\u0442\u0432\u0435\u0442\u044B</button>\n            <button id=\"DefaultAnswers_").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3 active\" onclick=\"DefaultAnswers(this);\">\u041E\u0442\u0432\u0435\u0442\u044B 1-5</button>\n            <button id=\"").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3\" onclick=\"AddCommentField(this);\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F</button>\n            <input id=\"isCommentVal_").concat(i, "\" name=\"isCommentVal_").concat(i, "\" class=\"d-none\" type=\"text\" value=\"Not\">\n\n        </div>\n    </div>\n</div>\n    ");
  
  question_block = `
  <div id="${i}" class="card mb-3">
                        <div class="card-body">
                            <div class="row mb-3 mb-lg-0">
                                <div class="col-12 d-flex justify-content-center d-lg-none text-center">
                                    <span style="width:14rem;" class="">Заголовок вопроса</span>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span style="width:14rem;" class="input-group-text d-lg-flex d-none">Заголовок вопроса</span>
                                </div>
                                <input name="question_header_${i}" type="text" class="form-control" placeholder="Как вам погода?" required>
                            </div>

                            <div class="row mb-3 mb-lg-0">
                                <div class="col-12 d-flex justify-content-center d-lg-none text-center">
                                    <span style="width:14rem;" class="">Описание вопроса</span>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span style="width:14rem;" class="input-group-text d-lg-flex d-none" >Описание вопроса</span>
                                </div>
                                <textarea id = "question_description_${i}" name="question_description_${i}" class="form-control" placeholder="Выберите вариант ответа от 1 до 5"></textarea>
                            </div>

                            <div class="card mb-3">
                            <div class="card-body text-center">

                                <div id="${i}_Group_1" class="row mb-3">
                                    <div class="col-4 d-inline-block">
                                        <input name="GroupAns_1" type="text" class="form-control" placeholder="Имя группы">
                                    </div>
                                    <div class="col-7 d-inline-block">
                                        <input id='SubAns_1_1' name="SubAns_1_1" type="text" class="form-control mb-3" placeholder="Дочерний элемент">
                                        <button id='AddSub_1' type="button" class="btn btn-secondary mb-lg-0 mb-3" onclick="AddSubAnswer(this);">Добавить элемент</button>
                                        <button id='RemSub_1' type="button" class="btn btn-secondary mb-lg-0 mb-3" onclick="RemoveSubAnswer(this);">Удалить элемент</button>
                                    </div>
                                </div>

                                <button id='AddGroup_1' type="button" class="btn btn-secondary mb-lg-0 mb-3" onclick="AddGroupAnswer(this);">Добавить группу</button>
                            </div>
                            </div>                            

                            <div class="text-center">
                                <button id="AddAnswer_${i}" type="button" class="btn btn-light d-none mb-lg-0 mb-3" onclick="AddAnswer(this, ${i});">Добавить ответ</button>
                                <button id="RemoveAnswer_${i}" type="button" class="btn btn-light d-none mb-lg-0 mb-3" onclick="RemoveAnswer(this, ${i});">Удалить ответ</button>
                                <button id="CustomAnswers_${i}" type="button" class="btn btn-light mb-lg-0 mb-3" onclick="CustomAnswers(this);">Задать свои ответы</button>
                                <button id="DefaultAnswers_${i}" type="button" class="btn btn-light active mb-lg-0 mb-3" onclick="DefaultAnswers(this);">Ответы 1-5</button>
                                <button id="SubAnswers_${i}" type="button" class="btn btn-light mb-lg-0 mb-3" onclick="SubAnswers(this);">New</button>
                                <button id="112" type="button" class="btn btn-light mb-lg-0 mb-3" onclick="AddCommentField(this);">Добавить поле коментария</button>
                                <input id="isCommentVal_${i}" name="isCommentVal_${i}" class="d-none" type="text">
                                
                            </div>
                            
                        </div>
                    </div>
  `
  
  btn.insertAdjacentHTML('beforebegin', question_block);
}

function removeQuestionFun() {
  var i = 1;

  while (true) {
    if (document.getElementById(i) == null) {
      i -= 1;
      break;
    }

    i += 1;
  }

  if (i != 1) {
    document.getElementById(i).remove();
  }
}

function CustomAnswers(btn) {
  var id_ = btn.id.toString().slice(-1);
  btn.classList.add('active');
  document.getElementById('SubAnswers_' + id_).classList.remove('active');
  document.getElementById('DefaultAnswers_' + id_).classList.remove('active');
  document.getElementById('AddAnswer_' + id_).classList.remove('d-none');
  document.getElementById('RemoveAnswer_' + id_).classList.remove('d-none'); //document.getElementById('variant'+id_).textContent = "cus";

  document.getElementById('question_description_' + id_).textContent = "Выберите вариант ответа";
}

function DefaultAnswers(btn) {
  var id_ = btn.id.toString().slice(-1);
  btn.classList.add('active');
  document.getElementById('SubAnswers_' + id_).classList.remove('active');
  document.getElementById('CustomAnswers_' + id_).classList.remove('active');
  document.getElementById('AddAnswer_' + id_).classList.add('d-none');
  document.getElementById('RemoveAnswer_' + id_).classList.add('d-none'); //document.getElementById('variant'+id_).textContent = "def";

  document.getElementById('question_description_' + id_).textContent = "Выберите вариант ответа от 1 до 5";
  var i = 1;

  while (true) {
    if (document.getElementById(id_ + "_" + i + "_answer") == null) {
      break;
    }

    document.getElementById(id_ + "_" + i + "_answer").remove();
    i += 1;
  }
}

function AddAnswer(btn, id_) {
  var i = 1;
  var answer;

  while (true) {
    if (document.getElementById(id_ + "_" + i + "_answer") == null) {
      break;
    }

    i += 1;
  }

  answer = "\n    <div id=\"".concat(id_, "_").concat(i, "_answer\" class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" >\u041E\u0442\u0432\u0435\u0442 ").concat(i, "</span>\n        </div>\n        <input id=\"").concat(id_, "_").concat(i, "_input\" name=\"").concat(id_, "_").concat(i, "_ans\" type=\"text\" class=\"form-control\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442\">\n    </div>\n    ");
 
  btn.insertAdjacentHTML('beforebegin', answer);
}

function RemoveAnswer(btn, id_) {
  var i = 1;

  while (true) {
    if (document.getElementById(id_ + "_" + i + "_answer") == null) {
      break;
    }

    i += 1;
  }

  i -= 1;
  document.getElementById(id_ + "_" + i + "_answer").remove();
}

function remove_end_date(btn) {
  if (document.getElementById("end_date_in").disabled == false) {
    document.getElementById("end_date_in").disabled = true;
    document.getElementById("end_date_in").value = null;
    btn.textContent = "Добавить дату окончания";
  } else {
    document.getElementById("end_date_in").disabled = false;
    document.getElementById("end_date_in").value = 2077 + '-' + '07' + '-' + '07';
    btn.textContent = "Бессрочная форма";
  }
}

function AddCommentField(btn) {
  if (btn.textContent == "Добавить поле коментария") {
    btn.classList.add('active');
    btn.textContent = "Добавлено поле коментария";
    document.getElementById('isCommentVal_' + btn.id).value = "Yes";
  } else if (btn.textContent == "Добавлено поле коментария") {
    btn.classList.remove('active');
    btn.textContent = "Добавить поле коментария";
    document.getElementById('isCommentVal_' + btn.id).value = "Not";
  }
}

function SubAnswers(btn) {
  var id_ = btn.id.toString().slice(-1);
  btn.classList.add('active');
  document.getElementById('DefaultAnswers_' + id_).classList.remove('active');
  document.getElementById('CustomAnswers_' + id_).classList.remove('active');
  document.getElementById('AddAnswer_' + id_).classList.add('d-none');
  document.getElementById('RemoveAnswer_' + id_).classList.add('d-none'); //document.getElementById('variant'+id_).textContent = "def";
  var i = 1;

  while (true) {
    if (document.getElementById(id_ + "_" + i + "_answer") == null) {
      break;
    }

    document.getElementById(id_ + "_" + i + "_answer").remove();
    i += 1;
  }
}

function AddSubAnswer(btn){

  var id_ = btn.id.toString().slice(-1);
  var i = 1;
  var answer;

  while (true) {
    if (document.getElementById("SubAns_" + id_ + '_' + i) == null) {
      break;
    }

    i += 1;
  }
  
  btn.insertAdjacentHTML('beforebegin', `<input id='SubAns_${id_}_${i}' name="SubAns_${id_}_${i}" type="text" class="form-control mb-3" placeholder="Дочерний элемент">`);
}

function RemoveSubAnswer(btn){

  var id_ = btn.id.toString().slice(-1);
  var i = 1;
  var answer;

  while (true) {
    if (document.getElementById("SubAns_" + id_ + '_' + i) == null) {
      break;
    }

    i += 1;
  }
  i-=1;
  if (i != 1)
    document.getElementById("SubAns_" + id_ + '_' + i).remove();
}

function AddGroupAnswer(btn){

  var id_ = btn.id.toString().slice(-1);
  var i = 1;
  var answer;

  while (true) {
    if (document.getElementById(id_ + '_Group_' + i) == null) {
      break;
    }

    i += 1;
  }
  
  btn.insertAdjacentHTML('beforebegin',
    `<div id="${id_}_Group_${i}" class="row mb-3">
  <div class="col-4 d-inline-block">
      <input name="GroupAns_${id_}" type="text" class="form-control" placeholder="Имя группы">
  </div>
  <div class="col-7 d-inline-block">
      <input id='SubAns_${i}_1' name="SubAns_${i}_1" type="text" class="form-control mb-3" placeholder="Дочерний элемент">
      <button id='AddSub_${i}' type="button" class="btn btn-secondary mb-lg-0 mb-3" onclick="AddSubAnswer(this);">Добавить элемент</button>
      <button id='RemSub_${i}' type="button" class="btn btn-secondary mb-lg-0 mb-3" onclick="RemoveSubAnswer(this);">Удалить элемент</button>
  </div>
</div>
  `);
}