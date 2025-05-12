document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("nav .menu a");
    const currentPage = window.location.pathname.split("/").pop();
  
    menuLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("activo");
      } else {
        link.classList.remove("activo");
      }
    });
  });
  