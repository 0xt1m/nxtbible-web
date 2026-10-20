// Copies of the reader added to a home screen before it moved to /read/ open this page.
// When the page runs as an installed app, go straight to the reader.
if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
  window.location.replace('read/');
}
