function workSpace() {
  $("#botaBegin").html(`Готово`);
  $(".container").css("opacity", "0");
  $("body").css({"display": "flex",
  "align-items": "center"});
  $("body").html();
}
$("#logBtn").on("click", function() {
  if (($("#login").val() == "") && ($("#password").val() == "")) {
    console.log('123');
  } else {
    if (($("#login").val() == "admin") && ($("#password").val() == "admin")) {
      document.location.href = "index.html";
    } else $(".invalid-feedback").css("opacity", "1");
  }
});
$("#botaBegin").on("click", function() {
  $("#botaBegin").prop('disabled', true);
  $("#botaBegin").html(`<span class="spinner-grow" role="status" aria-hidden="true" style="width: 1.5rem;height: 1.5rem;"></span>
  Загрузка...`);
  setTimeout(workSpace, 3000);
});
