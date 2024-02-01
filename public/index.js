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
    $("#miFormulario").submit(function (e) {
      e.preventDefault();
  
      var formData = $("#miFormulario").serialize();
  
      $.ajax({
        type: "POST",
        url: "/enviar-formulario",
        data: formData,
        success: function (response) {
          console.log("Éxito:", response);
          $("#message").text(response.message);
        },
        error: function () {
          console.log("Error al enviar el formulario.");
          $("#message").text("Error al enviar el formulario.");
        },
      });
    });
  });