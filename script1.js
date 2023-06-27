document.addEventListener("DOMContentLoaded", function() {
  const serviciosLink = document.querySelector(".nav-link:nth-child(1) a");
  const telefonoLink = document.querySelector(".nav-link:nth-child(2) a");
  const correoLink = document.querySelector(".nav-link:nth-child(3) a");
  const homeText = document.getElementById("homeText");

  serviciosLink.addEventListener("click", function() {
    homeText.textContent = "Paqueteria \n Mensajeria\n Transporte \n Otros Servicios";
  });

  telefonoLink.addEventListener("click", function() {
    homeText.textContent = "Teléfono \n (+52) 5587924856";
  });

  correoLink.addEventListener("click", function() {
    homeText.textContent = "Correo \n manuel.cerv98@gmail.com";
  });
});
