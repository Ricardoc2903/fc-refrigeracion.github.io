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

  //Mensaje de forulario
  $(document).ready(function () {
    console.log("Documento listo");
    // Captura el evento de envío del formulario
    $("#miFormulario").submit(function (e) {
        console.log("Formulario enviado");
        e.preventDefault(); // Evita el envío normal del formulario

        // Obtén los datos del formulario
        var formData = $("#miFormulario").serialize();

      // Reemplaza la sección de $.ajax en tu index.js con el siguiente código usando fetch
      fetch('/enviar-formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Actualiza el contenido del span con el mensaje de resultado
        $("#message").text(data.message);
      })
      .catch(error => {
        console.error('Error al enviar el formulario:', error);
        $("#message").text("Error al enviar el formulario.");
      });
    });
  });