function toggleNav() {
  if (navmenu.style.maxHeight == "0vh" || navmenu.style.maxHeight == 0) {
    navmenu.style.maxHeight = "17em";
    navmenu.style.transition = "max-height 0.15s ease-in";
  } else {
    navmenu.style.maxHeight = "0vh";
    navmenu.style.transition = "max-height 0.15s easy-out";
  }
}
