document.addEventListener("DOMContentLoaded", function () {
  // Verifica se c'è un hash nella URL
  if (window.location.hash) {
    var element = document.querySelector(window.location.hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Aggiungi un listener agli elementi con la classe nav-link
  var navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("href");

      // Controlla se il targetId inizia con '#' (indica un hash per lo stesso documento)
      if (targetId.startsWith("#")) {
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, null, targetId); // Aggiorna l'URL
        }
      } else {
        // Se non è un hash, reindirizza normalmente alla nuova pagina
        window.location.href = targetId;
      }
    });
  });

  // Funzione per fissare in cima la navbar quando si scorre la pagina
  function fixToTopNavbar() {
    var navbar = document.getElementById("navbar");
    if (window.innerWidth < 992) {
      navbar.classList.add("fix-to-top");
      return;
    }

    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.classList.add("fix-to-top");
    } else {
      navbar.classList.remove("fix-to-top");
    }
  }

  fixToTopNavbar();
  window.addEventListener("scroll", fixToTopNavbar);

  // Funzione per aggiungere o rimuovere la classe 'active' ai link della navbar
  var sections = document.querySelectorAll(".nav-section");
  var navLinks = document.querySelectorAll(".nav-link");

  function makeLinkActive() {
    var scrollPosition = window.scrollY;

    sections.forEach(function (section) {
      if (
        section.offsetTop - 87 <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        var sectionId = section.getAttribute("id");
        var href = sectionId ? "#" + sectionId : "";

        navLinks.forEach(function (navLink) {
          if (navLink.getAttribute("href") === href) {
            navLink.classList.add("active");
          } else {
            navLink.classList.remove("active");
          }
        });
      }
    });
  }

  makeLinkActive();
  window.addEventListener("scroll", makeLinkActive);
});
