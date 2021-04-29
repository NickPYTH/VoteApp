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
  } //question_block = "\n    <div id=\"".concat(i, "\" class=\"card mb-3\">\n    <div class=\"card-body\">\n        <div class=\"row mb-3 mb-lg-0\">\n            <div class=\"col-12 d-flex justify-content-center d-lg-none\">\n                <span class=\"\">\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0430</span>\n            </div>\n        </div>\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text d-lg-flex d-none\">\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0430</span>\n            </div>\n            <input name=\"question_header_").concat(i, "\" type=\"text\" class=\"form-control\" placeholder=\"\u041A\u0430\u043A \u0432\u0430\u043C \u043F\u043E\u0433\u043E\u0434\u0430?\" required>\n        </div>\n\n        <div class=\"row mb-3 mb-lg-0\">\n            <div class=\"col-12 d-flex justify-content-center d-lg-none\">\n                <span class=\"\">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430</span>\n            </div>\n        </div>\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text d-lg-flex d-none\" >\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430</span>\n            </div>\n            <textarea id = \"question_description_").concat(i, "\" name = \"question_description_").concat(i, "\" class=\"form-control\" placeholder=\"\u041E\u0446\u0435\u043D\u0438\u0442\u0435 \u043F\u043E\u0433\u043E\u0434\u0443 \u043F\u043E 5-\u0442\u0438 \u0431\u0430\u043B\u044C\u043D\u043E\u0439 \u0448\u043A\u0430\u043B\u0435\"></textarea>\n        </div>\n        <div class=\"text-center\">\n            <button id=\"AddAnswer_").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3 d-none\" onclick=\"AddAnswer(this, ").concat(i, ");\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442</button>\n            <button id=\"RemoveAnswer_").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3 d-none\" onclick=\"RemoveAnswer(this, ").concat(i, ");\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442</button>\n            <button id=\"CustomAnswers_").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3\" onclick=\"CustomAnswers(this);\">\u0417\u0430\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u043E\u0442\u0432\u0435\u0442\u044B</button>\n            <button id=\"DefaultAnswers_").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3 active\" onclick=\"DefaultAnswers(this);\">\u041E\u0442\u0432\u0435\u0442\u044B 1-5</button>\n            <button id=\"").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3\" onclick=\"AddCommentField(this);\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F</button>\n            <input id=\"isCommentVal_").concat(i, "\" name=\"isCommentVal_").concat(i, "\" class=\"d-none\" type=\"text\" value=\"Not\">\n\n        </div>\n    </div>\n</div>\n    ");

  question_block = "<div id=\"".concat(i, "\" name=\"question_").concat(i, "\" class=\"card mb-3\">\n                        <input type=\"text\" id=\"").concat(i, "_ques_type\" name=\"").concat(i, "_ques_type\" class=\"d-none\" value=\"numbers\">\n                        <div class=\"card-body\">\n                            <div class=\"row mb-3 mb-lg-0\">\n                                <div class=\"col-12 d-flex justify-content-center d-lg-none text-center\">\n                                    <span style=\"width:14rem;\" class=\"\">\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0430</span>\n                                </div>\n                            </div>\n                            <div class=\"input-group mb-3\">\n                                <div class=\"input-group-prepend\">\n                                    <span style=\"width:14rem;\" class=\"input-group-text d-lg-flex d-none\">\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0430</span>\n                                </div>\n                                <input name=\"question_header_").concat(i, "\" type=\"text\" class=\"form-control\" placeholder=\"\u041A\u0430\u043A \u0432\u0430\u043C \u043F\u043E\u0433\u043E\u0434\u0430?\" required>\n                            </div>\n\n                            <div class=\"row mb-3 mb-lg-0\">\n                                <div class=\"col-12 d-flex justify-content-center d-lg-none text-center\">\n                                    <span style=\"width:14rem;\" class=\"\">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430</span>\n                                </div>\n                            </div>\n                            <div class=\"input-group mb-3\">\n                                <div class=\"input-group-prepend\">\n                                    <span style=\"width:14rem;\" class=\"input-group-text d-lg-flex d-none\" >\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430</span>\n                                </div>\n                                <textarea id = \"question_description_").concat(i, "\" name=\"question_description_").concat(i, "\" class=\"form-control\" placeholder=\"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430 \u043E\u0442 1 \u0434\u043E 5\"></textarea>\n                            </div>\n                \n\n                            <div class=\"text-center\">\n                                <button id=\"AddAnswer_").concat(i, "\" type=\"button\" class=\"btn btn-light d-none mb-lg-0 mb-3\" onclick=\"AddAnswer(this, 1);\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442</button>\n                                <button id=\"RemoveAnswer_").concat(i, "\" type=\"button\" class=\"btn btn-light d-none mb-lg-0 mb-3\" onclick=\"RemoveAnswer(this, 1);\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442</button>\n                                <button id=\"CustomAnswers_").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3\" onclick=\"CustomAnswers(this);\">\u0417\u0430\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u043E\u0442\u0432\u0435\u0442\u044B</button>\n                                <button id=\"SubAnswers_").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3\" onclick=\"SubAnswers(this);\">New</button>\n                                <button id=\"DefaultAnswers_").concat(i, "\" type=\"button\" class=\"btn btn-light active mb-lg-0 mb-3\" onclick=\"DefaultAnswers(this);\">\u041E\u0442\u0432\u0435\u0442\u044B 1-5</button>\n                                <button id=\"AddComment_").concat(i, "\" type=\"button\" class=\"btn btn-light mb-lg-0 mb-3\" onclick=\"AddCommentField(this);\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F</button>\n                                <input id=\"isCommentVal_").concat(i, "\" name=\"isCommentVal_").concat(i, "\" class=\"d-none\" type=\"text\">\n                                \n                            </div>\n                            \n                        </div>\n                    </div>");
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

  if (document.getElementById(id_ + "_groups_card") != null) {
    document.getElementById(id_ + "_groups_card").remove();
  }

  document.getElementById('SubAnswers_' + id_).classList.remove('active');
  document.getElementById('DefaultAnswers_' + id_).classList.remove('active');
  document.getElementById('AddAnswer_' + id_).classList.remove('d-none');
  document.getElementById('RemoveAnswer_' + id_).classList.remove('d-none'); //document.getElementById('variant'+id_).textContent = "cus";

  document.getElementById(id_ + "_ques_type").value = "custom";
  document.getElementById('question_description_' + id_).textContent = "Выберите вариант ответа";
}

function DefaultAnswers(btn) {
  var id_ = btn.id.toString().slice(-1);
  btn.classList.add('active');

  if (document.getElementById(id_ + "_groups_card") != null) {
    document.getElementById(id_ + "_groups_card").remove();
  }

  document.getElementById('SubAnswers_' + id_).classList.remove('active');
  document.getElementById('CustomAnswers_' + id_).classList.remove('active');
  document.getElementById('AddAnswer_' + id_).classList.add('d-none');
  document.getElementById('RemoveAnswer_' + id_).classList.add('d-none'); //document.getElementById('variant'+id_).textContent = "def";

  document.getElementById(id_ + "_ques_type").value = "numbers";
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
  var id_ = btn.id.toString().slice(-1);
  if (btn.textContent == "Добавить поле коментария") {
    btn.classList.add('active');
    btn.textContent = "Добавлено поле коментария";
    document.getElementById('isCommentVal_' + id_).value = "Yes";
  } else if (btn.textContent == "Добавлено поле коментария") {
    btn.classList.remove('active');
    btn.textContent = "Добавить поле коментария";
    document.getElementById('isCommentVal_' + id_).value = "Not";
  }
}

function SubAnswers(btn) {
  var id_ = btn.id.toString().slice(-2);
  if (typeof(id_[0]) == "string"){
    var id_ = btn.id.toString().slice(-1);
  }
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

  if (document.getElementById(id_ + "_ques_type").value != "sub_answers") {
    var custom = document.getElementById("CustomAnswers_" + id_);
    var sub_ans = "\n    <div class=\"card mb-3\" id=\"".concat(id_, "_groups_card\">\n                              <div class=\"card-body text-center\">\n\n                                  <div id=\"").concat(id_, "_Group_1\" class=\"row mb-3\">\n                                      <div class=\"col-4 d-inline-block\">\n                                          <input name=\"GroupAns_").concat(id_, "_1\" type=\"text\" class=\"form-control\" placeholder=\"\u0418\u043C\u044F \u0433\u0440\u0443\u043F\u043F\u044B\">\n                                      </div>\n                                      <div class=\"col-7 d-inline-block\">\n                                          <input id='SubAns_").concat(id_, "_1_1' name=\"SubAns_").concat(id_, "_1_1\" type=\"text\" class=\"form-control mb-3\" placeholder=\"\u0414\u043E\u0447\u0435\u0440\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\">\n                                          <button id='AddSub_").concat(id_, "_1' type=\"button\" class=\"btn btn-secondary mb-lg-0 mb-3\" onclick=\"AddSubAnswer(this);\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>\n                                          <button id='RemSub_").concat(id_, "_1' type=\"button\" class=\"btn btn-secondary mb-lg-0 mb-3\" onclick=\"RemoveSubAnswer(this);\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>\n                                      </div>\n                                  </div>\n\n                                  <button id='AddGroup_").concat(id_, "' type=\"button\" class=\"btn btn-secondary mb-lg-0 mb-3\" onclick=\"AddGroupAnswer(this);\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443</button>\n                                  <button id='RemoveGroup_").concat(id_, "' type=\"button\" class=\"btn btn-secondary mb-lg-0 mb-3\" onclick=\"RemoveGroupAnswer(this);\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443</button>\n                              </div>\n                              </div>\n    ");
    custom.insertAdjacentHTML('beforebegin', sub_ans);
    document.getElementById(id_ + "_ques_type").value = "sub_answers";
  }

  try {
    document.getElementById(id_ + "_groups_card").classList.remove('d-none');
  } finally {}
}

function AddSubAnswer(btn) {
  var id_ = btn.id.toString().slice(-1);
  var i = 1;
  var answer;
  var group_id = btn.id.toString().slice(-3, -2);

  while (true) {
    if (document.getElementById("SubAns_" + group_id + '_' + id_ + '_' + i) == null) {
      break;
    }

    i += 1;
  }

  btn.insertAdjacentHTML('beforebegin', "<input id='SubAns_".concat(group_id, "_").concat(id_, "_").concat(i, "' name=\"SubAns_").concat(group_id, "_").concat(id_, "_").concat(i, "\" type=\"text\" class=\"form-control mb-3\" placeholder=\"\u0414\u043E\u0447\u0435\u0440\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\">"));
}

function RemoveSubAnswer(btn) {
  var id_ = btn.id.toString().slice(-1);
  var ques_id = btn.id.toString().slice(-3, -2);
  var i = 1;
  var answer;

  while (true) {
    if (document.getElementById("SubAns_" + ques_id + '_' + id_ + '_' + i) == null) {
      break;
    }

    i += 1;
  }

  i -= 1;
  if (i != 1) document.getElementById("SubAns_" + ques_id + '_' + id_ + '_' + i).remove();
}

function AddGroupAnswer(btn) {
  var id_ = btn.id.toString().slice(-1);
  var i = 1;
  var answer;

  while (true) {
    if (document.getElementById(id_ + '_Group_' + i) == null) {
      break;
    }

    i += 1;
  }

  btn.insertAdjacentHTML('beforebegin', "<div id=\"".concat(id_, "_Group_").concat(i, "\" class=\"row mb-3\">\n  <div class=\"col-4 d-inline-block\">\n      <input name=\"GroupAns_").concat(id_, "_").concat(i, "\" type=\"text\" class=\"form-control\" placeholder=\"\u0418\u043C\u044F \u0433\u0440\u0443\u043F\u043F\u044B\">\n  </div>\n  <div class=\"col-7 d-inline-block\">\n      <input id='SubAns_").concat(id_, "_").concat(i, "_1' name=\"SubAns_").concat(id_, "_").concat(i, "_1\" type=\"text\" class=\"form-control mb-3\" placeholder=\"\u0414\u043E\u0447\u0435\u0440\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\">\n      <button id='AddSub_").concat(id_, "_").concat(i, "' type=\"button\" class=\"btn btn-secondary mb-lg-0 mb-3\" onclick=\"AddSubAnswer(this);\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>\n      <button id='RemSub_").concat(id_, "_").concat(i, "' type=\"button\" class=\"btn btn-secondary mb-lg-0 mb-3\" onclick=\"RemoveSubAnswer(this);\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>\n  </div>\n</div>\n  "));
}

function RemoveGroupAnswer(btn) {
  var id_ = btn.id.toString().slice(-1);
  var i = 1;
  var answer;

  while (true) {
    if (document.getElementById(id_ + '_Group_' + i) == null) {
      i -= 1;
      break;
    }

    i += 1;
  }

  if (i != 1) document.getElementById(id_ + '_Group_' + i).remove();
}