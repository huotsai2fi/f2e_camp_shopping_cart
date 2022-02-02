$("#new-password").keyup(function checkLength() {
  if ($(this).val().length < 8) {
    $(this).siblings("small").text("密碼長度不足").css("color", "red");
  } else {
    $(this).siblings("small").text("密碼長度OK").css("color", "green");
  }
});

$("#verify-password").keyup(function checkIdentity() {
  if ($(this).val() != $("#new-password").val()) {
    $(this).siblings("small").text("密碼不相符").css("color", "red");
  } else {
    $(this).siblings("small").text("密碼相符").css("color", "green");
  }
});

$("#register-form").validate({
  // initialize plugin
  // your rules & options,
  submitHandler: function (form) {
    let username = $("#username").val();
    let email = $("#email").val();
    let newPasswd = $("#new-password").val();
    let verifyPasswd = $("#verify-password").val();

    $.post(
      "https://www.townway.com.tw/auth",
      {
        account: email,
        password: newPasswd,
      },
      function (data, status) {
        if (status == "success") {
          $.cookie("authKey", data);
          $.cookie("username", username);
          $.cookie("email", email);
        }
        window.location.replace("shopping_cart.html");
      }
    );

    return false;
  },
});
