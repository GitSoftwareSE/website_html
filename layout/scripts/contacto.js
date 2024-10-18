//formulario de contacto con alerta de modal
$( "#formContacto" ).on( "submit", function(e) {
    e.preventDefault();
    if ($('input[name="flag"]').is(':checked')) {
        $(".dropdown-container").css("border","")
        /* obtener nombre pais */
        var pais = window.getComputedStyle($('.dropdown-container')[0], ':before').getPropertyValue('content');
        pais = pais.replace(/['"]+/g, '');

        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        /* obtener codigo de pais */
        var contentValue = window.getComputedStyle($('.textfield')[0], ':before').getPropertyValue('content');
        // Elimina las comillas que rodean el valor
        contentValue = contentValue.replace(/['"]+/g, '');
        phone = contentValue+" "+phone;
        var message = $("#message").val();
        message = message+"<br>"+"Pais: "+ pais;
        $("#sendContacto").attr('disabled','disabled');
        $("#sendContacto").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviar Mensaje');
        var sUrl = window.location;
            sUrl = sUrl.toString();
        $.ajax({
            url:"https://www.synertech.mx/php.nyf/send_email.php",
            type:"POST",
            data:{
                name:name,
                email:email,
                phone:phone,
                message:message,
                sUrl:sUrl
            }
        }).done(function(data){
            if (data) {
                $("#tituloModalContacto").addClass("text-white");
                $("#tituloModalContacto").html('Mensaje enviado <i class="fas fa-check-double" style="color: #FDBE33;"></i>');
                $("#mensajeModalContacto").html('<h5>Su mensaje ha sido enviado satisfactoriamente al departamento encargado. En el  transcurso de 24 a 48 horas (Maximo) le estaremos dando respuesta a su requerimiento en su correo</h5><i><svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg></i>');
                $("#modalCorreoEnviado").modal("show");
                $("#formContacto")[0].reset();
            }else{
                $("#tituloModalContacto").addClass("text-white");
                $("#tituloModalContacto").html('Error al enviar mensaje <i class="fas fa-exclamation" style=" color: #dc3545";></i>');
                $("#mensajeModalContacto").html('<h5 class="text-danger">Hubo un error al intentar enviar el mensaje, verifica los datos y vuelve a intentarlo</h5>');
                $("#modalCorreoEnviado").modal("show");
                
            }
            
            $("#sendContacto").html(' <i class="fa fas fa-paper-plane"></i> Enviar Mensaje');
            $("#sendContacto").removeAttr('disabled');
            setTimeout(function(){
                $("#modalCorreoEnviado").modal("hide");
            }, 10000);
        });
    }else{
        alertify.error('Selecciona el indicativo de tu país');
        $(".dropdown-container").css("border","solid 4px #ff4f4f")

    }


});

/* formulario de contacto en boton de chat */
   $( "#formContacto2" ).on( "submit", function(e) {
    e.preventDefault();
    var name = $("#name1").val();
    var email = $("#email1").val();
    var phone = $("#phone1").val();
    var message = $("#message1").val();
    var sUrl = window.location;
        sUrl = sUrl.toString();
    $("#sendContacto1").attr('disabled','disabled');
    $("#sendContacto1").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviar Mensaje');
    $.ajax({
        url:"https://www.synertech.mx/php.nyf/send_email.php",
        type:"POST",
        data:{
            name:name,
            email:email,
            phone:phone,
            message:message,
            sUrl:sUrl
        }
    }).done(function(data){
        if (data) {
            $("#tituloModalContacto").addClass("text-white");
            $("#tituloModalContacto").html('Mensaje enviado <i class="fas fa-check-double" style="color: #FDBE33;"></i>');
            $("#mensajeModalContacto").html('<h5>Su mensaje ha sido enviado satisfactoriamente al departamento encargado. En el  transcurso de 24 a 48 horas (Maximo) le estaremos dando respuesta a su requerimiento en su correo</h5><i><svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg></i>');
            $("#modalCorreoEnviado").modal("show");
            $("#formContacto2")[0].reset();
        }else{
            $("#tituloModalContacto").addClass("text-white");
            $("#tituloModalContacto").html('Error al enviar mensaje <i class="fas fa-exclamation" style=" color: #dc3545";></i>');
            $("#mensajeModalContacto").html('<h5 class="text-danger">Hubo un error al intentar enviar el mensaje, verifica los datos y vuelve a intentarlo</h5>');
            $("#modalCorreoEnviado").modal("show");
            
        }
        
        $("#sendContacto1").html(' <i class="fa fas fa-paper-plane"></i> Enviar Mensaje');
        $("#sendContacto1").removeAttr('disabled');
        setTimeout(function(){
            $("#modalCorreoEnviado").modal("hide");
        }, 10000);
    });
  }); 
  /* fin formulario de contacto 2 */ 

  $(".btnCerrarModal").click(function(){
    $("#modalCorreoEnviado").modal("hide");
  });
  /*  */