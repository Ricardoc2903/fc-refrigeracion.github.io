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
$("#miFormulario").submit(function (e) {
  console.log("Formulario enviado");
  e.preventDefault(); // Evita el envío normal del formulario

  // Crea un objeto FormData para almacenar los datos del formulario
  var formData = new FormData(this);

  // Realiza una petición AJAX para enviar el formulario
  $.ajax({
      type: "POST",
      url: "/enviar-formulario", // La URL de tu ruta que maneja el formulario
      data: formData,
      processData: false,  // Evita que jQuery convierta los datos en una cadena de consulta
      contentType: false,  // Evita que jQuery establezca automáticamente el tipo de contenido
      success: function (response) {
          // Actualiza el contenido del span con el mensaje de resultado
          console.log("Éxito:", response);
          $("#message").text(response.message);
      },
      error: function (xhr, status, error) {
          // En caso de error, muestra el mensaje de error devuelto por el servidor
          console.error("Error al enviar el formulario:", error);
          $("#message").text("Error al enviar el formulario.");
      },
  });
});
