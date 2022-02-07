$(document).ready(function () {
  $("#amount").text($.cookie("amount"));
  $("#total")
    .text($.cookie("amount") * 59)
    .css("font-weight", "bold");

  $("#username").val($.cookie("username"));
  $("#email").val($.cookie("email"));
  $("#account").val($.cookie("account"));
});

$("#shopping-cart-form").validate({
  // initialize plugin
  // your rules & options,
  submitHandler: function (form) {
    window.location.replace("confirm.html");
    return false;
  },
});
