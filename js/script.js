function verify() {

    let username = document.querySelector("#username").value;
    let phone = document.querySelector("#phone").value;
    let county = document.querySelector("#county").value;
    let address = document.querySelector("#address").value;

    let alertMessage = [];

    if (username == "") {
        alertMessage.push("姓名");
    }
    if (phone == "") {
        alertMessage.push("連絡電話");
    }
    if (county == "" || address == "") {
        alertMessage.push("通訊地址");
    }

    if (alertMessage.length != 0){
        alert("請輸入您的" + alertMessage.join());
        return false;
    }

}

function popAd(){

    document.querySelector(".ad").innerHTML(`
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">廣告</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="https://i.ytimg.com/vi/6pOaRCqnkgk/maxresdefault.jpg" alt="..." width="100%">
        </div>
      </div>
    </div>
  </div>`);

}