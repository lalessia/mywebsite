document.addEventListener('DOMContentLoaded', function () {
    // Verifica se c'è un hash nella URL
    if (window.location.hash) {
        var element = document.querySelector(window.location.hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Aggiungi un listener agli elementi con la classe nav-link
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');

            // Controlla se il targetId inizia con '#' (indica un hash per lo stesso documento)
            if (targetId.startsWith('#')) {
                var targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, null, targetId); // Aggiorna l'URL
                }
            } else {
                // Se non è un hash, reindirizza normalmente alla nuova pagina
                window.location.href = targetId;
            }
        });
    });

    var gridItems = document.querySelectorAll('.grid-item .img-caption');

      gridItems.forEach(function(imgCaption) {
        var collapseElem = imgCaption.querySelector('.collapse');

        imgCaption.addEventListener('mouseenter', function() {
          var collapse = new bootstrap.Collapse(collapseElem, {
            toggle: true
          });
        });

        imgCaption.addEventListener('mouseleave', function() {
          var collapse = bootstrap.Collapse.getInstance(collapseElem);
          collapse.hide();
        });
      });
});

window.onscroll = function() {shrinkNavbar()};

function shrinkNavbar() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
}
