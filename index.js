 const header = document.getElementById("header");
  const logo = document.getElementById("logo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.height = "150px";
      logo.style.transform = "scale(0.7)";
    } else {
      header.style.height = "300px";
      logo.style.transform = "scale(1)";
    }
  });