$(document).ready(function () {
    var previousScroll = 0;
    var navbarHeight = $(".item1").outerHeight();
  
    $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();
  
      if (currentScroll > previousScroll) {
        // Scrolling hacia abajo, oculta el navbar
        $(".item1").css("top", -navbarHeight + "px");
      } else {
        // Scrolling hacia arriba, muestra el navbar
        $(".item1").css("top", "0");
      }
  
      previousScroll = currentScroll;
    });
  });
  
  
  //Boton flotante
  // Ejecuta la animación cada 5 segundos
  setInterval(function () {
    $('.floating-button').toggleClass('bell-animation');
  }, 4000);

  //menu desplegable navbar
  const nav = document.querySelector("#nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");

  abrir.addEventListener("click", () => {
      nav.classList.add("visible");
  })

  cerrar.addEventListener("click", () => {
      nav.classList.remove("visible");
  })

// Captura el evento de envío del formulario
$(document).ready(function () {
  console.log("Documento listo");
  // Captura el evento de envío del formulario
  $("#miFormulario").submit(function (e) {
      console.log("Formulario enviado");
      e.preventDefault(); // Evita el envío normal del formulario

      // Obtén los datos del formulario
      var formData = $(this).serialize();

      // Realiza una petición AJAX para enviar el formulario
      $.ajax({
          type: "POST",
          url: "/", // La URL de tu ruta que maneja el formulario
          data: formData,
          success: function (response) {
              // Actualiza el contenido del span con el mensaje de resultado
              console.log("Éxito:", response);
              $("#message").text(response);
          },
          error: function (xhr, status, error) {
              // En caso de error, muestra el mensaje de error específico en la consola
              console.log("Error al enviar el formulario:", xhr.responseText);
              $("#message").text("Error al enviar el formulario: " + xhr.responseText);
          },
      });
  });
});

