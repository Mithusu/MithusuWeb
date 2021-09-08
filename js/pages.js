function defaultstyle() {
    document.getElementById("content").style.display = "inline-block";
    document.getElementById("contentEx").style.display = "none";
}

function openExplore() {
    document.getElementById("content").style.display = "none";
    document.getElementById("contentEx").style.display = "inline-flex";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("primary").style.top = "0";
  } else {
    document.getElementById("primary").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
} 