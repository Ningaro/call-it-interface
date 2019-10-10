function workSpace() {
  $("#botaBegin").html(`Готово`);
  $(".container").css("opacity", "0");
  $("body").css({"display": "block",
  "align-items": "center"});
  $("body").html(`<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
    <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Bootstrap
  </a>
</nav>`);
$("nav").css("opacity", "1");
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
