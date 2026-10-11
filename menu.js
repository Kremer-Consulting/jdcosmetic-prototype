// Mobiles Menü: Schaltfläche öffnet und schließt die Navigation.
document.querySelectorAll(".burger").forEach(function (b) {
  b.addEventListener("click", function () {
    var nav = document.getElementById(b.getAttribute("aria-controls"));
    var open = nav.classList.toggle("open");
    b.setAttribute("aria-expanded", open ? "true" : "false");
    b.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  });
});
