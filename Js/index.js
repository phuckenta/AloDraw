function show() {
  Swal.fire({
    title: "Read!",
    text: "Can draw in a canvas using the mouse.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/07/13/06/53/sketch-1513764_960_720.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}
function show1() {
  Swal.fire({
    title: "Read!",
    text: "Can change the color.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/23/00/37/art-1851483_960_720.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}
function show2() {
  Swal.fire({
    title: "Read!",
    text: "You Can change the size of the tool.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361_960_720.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}
function show3() {
  Swal.fire({
    title: "Read!",
    text: "You Can press a button to clear the canvas.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/06/25/12/55/art-1478831_960_720.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}
function show4() {
  Swal.fire({
    title: "Read!",
    text: " You Can save the artwork as an image (.png, .jpg, etc format).",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}
function show5() {
  Swal.fire({
    title: "Read!",
    text: "You can share the artwork on social media.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/07/30/21/51/eye-2555760_960_720.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var trangthai = "duoi300";
    var menunho = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        if (trangthai == "duoi300") {
          trangthai = "tren300";
          menunho.classList.add("navbar-small");
        }
      } else if (window.pageYOffset <= 100) {
        if (trangthai == "tren300") {
          menunho.classList.remove("navbar-small");
          trangthai = "duoi300";
        }
      }
    });
  },
  false
);
