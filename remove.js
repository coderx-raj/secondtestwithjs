// Remove the .html extension from the URL
if (window.location.pathname.endsWith('.html')) {
    var newPath = window.location.pathname.replace('.html', '');
    history.replaceState({}, document.title, newPath);
  }
  