document.addEventListener("DOMContentLoaded", function() {
  const serviciosLink = document.querySelector(".nav-link:nth-child(1) a");
  const telefonoLink = document.querySelector(".nav-link:nth-child(2) a");
  const correoLink = document.querySelector(".nav-link:nth-child(3) a");
  const homeText = document.getElementById("homeText");
  

  serviciosLink.addEventListener("click", function() {
    homeText.innerHTML = "<br><br><br><br>Los servicios que se ofrecen son: <br><br> <ul class='service-list'> <li><i class='bx bx-check'></i> Paquetería</li> <li><i class='bx bx-check'></i> Mensajería</li> <li><i class='bx bx-check'></i> Transporte</li> <li><i class='bx bx-check'></i> Otros Servicios</li> </ul><br><br><br>";
    homeText.classList.add("homeText");
    homeText.style.fontSize = "20px";
    homeText.style.color = "black";
    homeText.style.fontWeight = "bold";

    const image = document.createElement("img");
    image.src = "logo.jpg"; // Reemplaza "ruta_de_la_imagen.jpg" con la ruta correcta de tu imagen
    image.style.width = "200px"; // Ajusta el ancho de la imagen según tus necesidades
    image.style.height = "200px"; // Ajusta la altura de la imagen según tus necesidades
    image.style.display = "block"; // Establecer el elemento como bloque para aplicar margen automático
  
    // Centrar la imagen usando márgenes automáticos
    image.style.marginLeft = "auto";
    image.style.marginRight = "auto";
    // Agregar la imagen al div "homeText"
    homeText.appendChild(image);
  });
  

  telefonoLink.addEventListener("click", function() {
    homeText.innerHTML = "<br><br><br><br>De un horario de 7:00 am hasta las 7:00 pm puedes contactar desde Teléfono al número<br><br>(+52) 5587924856<br><br>";
    homeText.classList.add("homeText");
    homeText.style.fontSize = "20px";
    homeText.style.color = "black";
    homeText.style.fontWeight = "bold";
    
    // Agregar una imagen
    const image = document.createElement("img");
    image.src = "telefono.jpg"; // Reemplaza "ruta_de_la_imagen.jpg" con la ruta correcta de tu imagen
    image.style.width = "200px"; // Ajusta el ancho de la imagen según tus necesidades
    image.style.height = "200px"; // Ajusta la altura de la imagen según tus necesidades
    image.style.display = "block"; // Establecer el elemento como bloque para aplicar margen automático
  
    // Centrar la imagen usando márgenes automáticos
    image.style.marginLeft = "auto";
    image.style.marginRight = "auto";
    // Agregar la imagen al div "homeText"
    homeText.appendChild(image);
  });
  

  correoLink.addEventListener("click", function() {
    homeText.innerHTML = "<br><br><br><br>Tambien puede mandar un correo <br><br><br> manuel.cerv98@gmail.com<br><br><br>";
    homeText.classList.add("homeText");
    homeText.style.fontSize = "20px";
    homeText.style.color = "black";
    homeText.style.fontWeight = "bold";

    const image = document.createElement("img");
    image.src = "correo.jpg"; // Reemplaza "ruta_de_la_imagen.jpg" con la ruta correcta de tu imagen
    image.style.width = "200px"; // Ajusta el ancho de la imagen según tus necesidades
    image.style.height = "200px"; // Ajusta la altura de la imagen según tus necesidades
    image.style.display = "block"; // Establecer el elemento como bloque para aplicar margen automático
  
    // Centrar la imagen usando márgenes automáticos
    image.style.marginLeft = "auto";
    image.style.marginRight = "auto";
    // Agregar la imagen al div "homeText"
    homeText.appendChild(image);
  });
});

  