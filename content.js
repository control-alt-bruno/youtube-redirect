document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector("a#logo");
  if (logo) {
    logo.setAttribute("href", "https://www.youtube.com/feed/subscriptions");
    logo.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "https://www.youtube.com/feed/subscriptions";
    });
  }
});
