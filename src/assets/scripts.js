window.onscroll = function () {
  console.log(1);
  changeMainHeaderBgColor();
};

function changeMainHeaderBgColor() {
  const header = document.getElementById("mainHeader");
  const sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("position-fixed-navbar");
    document.body.classList.add("padding-top-for-position-fixed-navbar");
  } else {
    header.classList.remove("position-fixed-navbar");
    document.body.classList.remove(
      "padding-top-for-position-fixed-navbar"
    );
  }
}
