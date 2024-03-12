function toggleMenu() {
    var links = document.getElementById('nav-links');
    // Make sure that 'links' is not null before trying to access classList
    if (links) {
      links.classList.toggle('active');
      // Do the same check for the icon if needed
      var icon = document.querySelector('.nav-icon');
      if (icon) {
        icon.classList.toggle('active');
      }
    } else {
      console.error('The element with ID "nav-links" was not found.');
    }
  }