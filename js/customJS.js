function navBar() {
    $("body").css({
      "display": "block",
      "align-items": "center"
    });
    $("body").html(``);
  //$("nav").css("opacity", "1");
  setTimeout($("nav").css("opacity", "1"), 3000)
}
function workSpace() {
  $("#botaBegin").html(`Готово`);
  $(".container").css("opacity", "0");
  setTimeout(navBar, 2500)
}
function auth() {
  if (($("#login").val() == "") && ($("#password").val() == "")) {
  } else {
    if (($("#login").val() == "admin") && ($("#password").val() == "admin")) {
      document.location.href = "index.html";
    } else $(".invalid-feedback").css("opacity", "1");
  }
}
$("#logBtn").on("click", function() {
  auth()
});
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        auth()
    }
});
$("#botaBegin").on("click", function() {
  $("#botaBegin").prop('disabled', true);
  $("#botaBegin").html(`<span class="spinner-grow" role="status" aria-hidden="true" style="width: 1.5rem;height: 1.5rem;"></span>
  Загрузка...`);
  setTimeout(workSpace, 3000);
});
