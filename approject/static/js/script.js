document.addEventListener('DOMContentLoaded', function() {
    function checkUrl() {
        const path = window.location.pathname;
        const hash = window.location.hash;
        console.log('path: ', path)
        console.log('hash: ', hash)
        console.log('hash: ', hash.startsWith('#'))
        if (path === '/#' && hash.startsWith('#')) {
            document.getElementById('nav-about').style.display = 'none';
            document.getElementById('nav-portfolio').style.display = 'none';
        } else {
            document.getElementById('nav-about').style.display = 'list-item';
            document.getElementById('nav-portfolio').style.display = 'list-item';
        }
    }

    // Check URL on load
    checkUrl();

    // Optionally, check URL on hash change
    window.addEventListener('hashchange', checkUrl);
});
