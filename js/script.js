window.onload = function () {
  var elements = document.getElementsByClassName("eapps-link");
  var el = document.getElementsByClassName("eapps-widget-toolbar-panel-edit");
  console.log(elements[0]);
  console.log(el[0]);
  // elements[0].removeAttribute('style');
  // document.getElementsByClassName('eapps-link').remove();
  // document.getElementsByClassName('eapps-link').style.display = null;
  // document.getElementsByClassName('eapps-link').style.display = "none!important";
  var myModal = $("#staticBackdrop");
  myModal.modal("show");
  $("#staticBackdrop .modal-footer button").on("click", function () {
    myModal.modal("hide");
    var video = document.getElementById("videotest");
    video.play();
    video.muted = false;
    setTimeout(() => {
      video.controls = true;
    }, 5000);
  });
  document.onclick = function () {

  };
};
