var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function (keyup) {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

$(document).ready(function () {
  // Gets the video src from the data-src on each button
  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).attr("data-src");
    console.log("button clicked" + $videoSrc);
  });

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    console.log("modal opened" + $videoSrc);
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });

  // document ready
});
