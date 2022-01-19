$(document).ready(function () {
  $("#username").val($.cookie("username"));
  $("#email").val($.cookie("email"));
});

$("#shopping-cart-form").validate({
  // initialize plugin
  // your rules & options,
  submitHandler: function (form) {
    window.location.replace("confirm.html");
    return false;
  },
});
