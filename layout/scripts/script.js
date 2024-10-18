$(function() {
    var INDEX = 0; var Preguntas = 0;var asunto;var Segmento;var Nombres;var Telefonos;var Email;var Mensaje;var otromensaje;var imagen=0;var hora=0;var destino;var q=0;var Pais;
   var url = window.location;

    $("#chat-submit").click(function(e) {
        e.preventDefault();
        var msg = $("#chat-input").val(); 
        if(msg.trim() == ''){
            return false;
        }
    
 
        generate_message(msg, 'self');
        var buttons = [
            {
            name: 'Existing User',
            value: 'existing'
            },
            {
            name: 'New User',
            value: 'new'
            }
        ];
    

        if(Preguntas == '1' ){

            var otromensaje1 = document.getElementById('otromensaje');        
            var mensajeuser = document.getElementById('mensajeuser');
            typing1.style.display='block';
            setTimeout(function() { 
            if (q == 1){
                
                contacto.style.display = 'block';  
                otromensaje1.style.display = 'none';
                mensajeuser.style.display = 'none';
                escribir();
                }    
            }, 1000)
        }
        if(Preguntas == '2' ){
            
            typing1.style.display='block';
            setTimeout(function() {   
            sonido();
            generate_message('Podrías indicarme, ¿Cuál tu número telefónico?', 'user');}, 1000)
        }

        if(Preguntas == '4' ){
            typing1.style.display='block';
            setTimeout(function() {   
            sonido();
            generate_message('¿Me podrías dar tu correo electrónico?', 'user');}, 1000)
        }

        if(Preguntas == '6' ){
            typing1.style.display='block';
            setTimeout(function() {   
            sonido();
            generate_message('¿Desde que país te comunicas?', 'user');}, 1000)
        }

        if(Preguntas == '8' ){
            typing1.style.display='block';
            setTimeout(function() { 
            sonido();    
            generate_message('Puedes agregar más información relacionada con tu solicitud.', 'user');}, 1000)
        }
        
        if(Preguntas == '10' ){
            typing1.style.display='block';
            setTimeout(function() { 
            //alert('Nombres: ' + Nombres + 'Telefonos: ' +Telefonos + 'Email: ' +Email + 'Mensaje: ' +Mensaje  + 'Segmento: '+ Segmento + 'Asunto:' + asunto + 'otro mensaje'+otromensaje + ' hora'+hora);
            enviar();
            }, 1000)
        }
      
      
    });
  
 

    function enviar(){
        
        if (asunto == 'Mensaje bot - Plantas de tratamiento de aguas residuales'){ destino = 'info@nyfdecolombia.com' }
        if (asunto == 'Mensaje bot - Plantas de tratamiento de aguas potable'){ destino = 'info@nyfdecolombia.com' }
        if (asunto == 'Mensaje bot - Tanques de almacenamiento'){ destino = 'info@nyfdecolombia.com' }
        if (asunto == 'Mensaje bot - Desinfección ultravioleta'){ destino = 'info@nyfdecolombia.com' }
        if (asunto == 'Mensaje bot - Servicio de mantenimiento'){ destino = 'info@nyfdecolombia.com' }
        if (asunto == 'Mensaje bot - Otros equipos'){ destino = 'info@nyfdecolombia.com' }
        var sUrl = window.location;
        sUrl = sUrl.toString();
        Mensaje = Mensaje + "<br>País: "+Pais; 
        $.post('https://www.synertech.mx/php.nyf/send_email.php', {
          "nombres": Nombres,
          "telefonos": Telefonos,
          "email": Email,
          "Mensaje": Mensaje,
          "Segmento": Segmento,
          "asunto": asunto,
          "otromensaje": otromensaje,
          "destino" : destino,
          "hora" : hora,
          "bot":"bot",
          "sUrl": sUrl
        },function(data) {
          typing1.style.display='none';
          sonido(); 
          generate_message('Perfecto, nos pondremos en contacto contigo. ¡Muchas gracias!', 'user');
          console.log('procesamiento finalizado', data);
          setTimeout(function() {
              $("#chat-circle").toggle('scale');$(".chat-box").toggle('scale');location.reload(true);}, 1000)
        }); 

            escribir();
    }
    
    function preguntas(e){
        
        q++;
        
        var msg = e; 
        
        if (Segmento =='Otros') {
            
        }  else{ 
            Preguntas++;
        }
        
        if(msg.trim() == ''){
          return false;
        }
        generate_message1(msg, 'user');
        
        var buttons = [
            {
              name: 'Existing User',
              value: 'existing'
            },
            {
              name: 'New User',
              value: 'new'
            }
        ];      
        
    } 
  
    function escribir() {
        // Seleccione los campos de texto de facturación
        var capturartexto = document.querySelectorAll('#writetext input[type="text"]');

        // Alternar los campos de texto de facturación
        for (var i = 0; i < capturartexto.length; i++) {
        capturartexto[i].disabled = !capturartexto[i].disabled;
        }
    }
    
    
    function generate_message1(msg, type) {
        contacto.style.display='none';
        typing1.style.display='none';
        INDEX++;
        var str="";

         if(type == 'user'){
            str += "<div id='otromensaje' class=\"chat-msg "+type+" otromensaje\">";
            str += "          <span class=\"msg-avatar\">";
            str += "            <img src=\"Chat\/img\/"+imagen+".png \">";
            str += "          <\/span>";
            str += "          <div class=\"cm-msg-text\"> <label class=\"asesor\"> ";
            str += msg;
            str += "           <\/label> <\/div>";
            str += "        <\/div>";
            $(".chat-logs").append(str);
            $("#cm-msg-"+INDEX).hide().fadeIn(300);   
        }
        
        if(msg  == 'hora'){
           

                    
        }
            
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);       
        
    }  
	
  
    function generate_message(msg, type) {
        typing1.style.display='none';
        INDEX++;
    	Preguntas++;
        var str="";
      
     if(type == 'user'){
        str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
        str += "          <span class=\"msg-avatar\">";
        str += "            <img src=\"Chat\/img\/"+imagen+".png \">";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\"> <label class=\"asesor\">";
        str += msg;
        str += "          <\/label> <\/div>";
        str += "        <\/div>";
        $(".chat-logs").append(str);
        $("#cm-msg-"+INDEX).hide().fadeIn(300);
        
        }else 
        if(type == 'self'){
        
        str += "<div id='mensajeuser' class=\"chat-msg "+type+" mensajeuser\">";
        str += "          <span class=\"msg-avatar\">";
        str += "            <img src=\"Chat\/img\/cliente.png \">";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\"> <label class=\"usuario\"> ";
        str += msg;
        str += "          <\/label> <\/div>";
        str += "        <\/div>";
        $(".chat-logs").append(str);
        $("#cm-msg-"+INDEX).hide().fadeIn(300);

        if (Preguntas==1){
            otromensaje = msg;
        }
        if (Preguntas==2){
            Nombres = msg;   
        }
        if (Preguntas==4){ 
            validartelefono(msg);
            
        }
        if (Preguntas==6){
             validarcorreo(msg);
        }
        if (Preguntas==8){
            Pais = msg; 
        }
        if (Preguntas==10){
            Mensaje = msg; 
        }
        
        $("#chat-input").val(''); 
        }
        
        
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);     
    
    }  
	
    function validarcorreo(msg) {
        msg=msg.toLowerCase();
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esvalido =expReg.test(msg);
        if (esvalido== true){
            Email = msg;
        }
        else{
            Preguntas=4;
            generate_message('Correo electrónico no es válido, escribe tu correo nuevamente', 'user')
        }
    }

    function validartelefono(msg) {
        var expReg = /[^+\d]/g;
        var numero =expReg.test(msg);

        if (numero== true){
            Preguntas=2;
            generate_message('Teléfono no es válido, escribe tu teléfono nuevamente', 'user')
        }
        else{
            Telefonos = msg;
        }

    }

    function generate_button_message(msg, buttons){    
        INDEX++;
        var btn_obj = buttons.map(function(button) {
           return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
        }).join('');
        var str="";
        str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
        str += "          <span class=\"msg-avatar\">";
        str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\">";
        str += msg;
        str += "          <\/div>";
        str += "          <div class=\"cm-msg-button\">";
        str += "            <ul>";   
        str += btn_obj;
        str += "            <\/ul>";
        str += "          <\/div>";
        str += "        <\/div>";
        $(".chat-logs").append(str);
        $("#cm-msg-"+INDEX).hide().fadeIn(300);   
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        $("#chat-input").attr("disabled", true);
    }
  
    $(document).delegate(".chat-btn", "click", function() {
        var value = $(this).attr("chat-value");
        var name = $(this).html();
        $("#chat-input").attr("disabled", false);
        
    });


        
        $(".chat-box-toggle").click(function() {
        var width = window.innerWidth;
    	var resolucion = $(window).width();
    	var o = document.getElementById('pageall');
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
        if (resolucion < 770) { 
            o.style.display = 'block';}
        });
    
        $("#chat-circle").click(function() {
        var width = window.innerWidth;
    	var resolucion = $(window).width();
    	var o = document.getElementById('pageall');
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
        if (resolucion < 770) {
         o.style.display = 'none';}
        });
	
			
            
           

  
  ////////////////////////////////////////////////////////////////////////////////
    //document.querySelector(".question").onchange = function(e){console.log(e.target.attributes["mensaje"].value);}

    $("#contacto").change(function(){
        var estado = $(".question").val();
        if(estado == "proximahora") {hora ='Llamar en la próxima hora'};
        if(estado == "diasiguiente") {hora ='Llamar el día mañana'};
        if(estado == "correoelectronico") {hora ='contactar por Correo Electrónicos'};
        if(estado == "WhatsApp") {hora ='contactar vía WhatsApp'};
    });

    //Será un placer colaborarte, ¿Cuál es tu nombre?
    /*document.querySelector(".question").onchange = function(e){
        sonido();
        escribir();
        typing1.style.display='block';
        preguntas(e);
    }
    */
    function sonido(){
        var audio = document.getElementById('testAudio');
            if(this.className == 'is-playing'){
              this.className = "";
              this.innerHTML = "<i class='fas fa-play'></i>"
              audio.play();
        }else{
              this.className = "is-playing";
              this.innerHTML = "<i class='fas fa-pause'></i>";
              audio.play();
        }
    }
 
        var contacto1 = document.getElementById("proximahora");
        contacto1.onclick = function(){
            typing1.style.display='block';
            hora ='Llamar en la próxima hora';
            contacto.style.display='none';
            var otromensaje1 = document.getElementById('otromensaje');
            var mensajeuser = document.getElementById('mensajeuser');
            if (otromensaje1 === null ){}else{otromensaje1.style  ='block';mensajeuser.style  ='block';}
            setTimeout(function(){
                sonido();
                escribir();
                mensaje1='Será un placer colaborarte, ¿Cuál es tu nombre?';
                typing1.style.display='none';
                preguntas(mensaje1);
                contactomenu.style.display='none';  
            },1000);
        }
        var contacto2 = document.getElementById("diasiguiente");
        contacto2.onclick = function(){
            typing1.style.display='block';
            hora ='Llamar el día de mañana';
            contacto.style.display='none';
            var otromensaje1 = document.getElementById('otromensaje');
            var mensajeuser = document.getElementById('mensajeuser');
            if (otromensaje1 === null ){}else{otromensaje1.style  ='block';mensajeuser.style  ='block';}
            setTimeout(function(){
                sonido();
                escribir();
                
                mensaje1='Será un placer colaborarte, ¿Cuál es tu nombre?';
                typing1.style.display='none';
                preguntas(mensaje1);
                contactomenu.style.display='none';  
            },1000);
        }
        var contacto3 = document.getElementById("correoelectronico");
        contacto3.onclick = function(){
            typing1.style.display='block';
            hora ='contactar por Correo Electrónicos';  
            contacto.style.display='none';
            var otromensaje1 = document.getElementById('otromensaje');
            var mensajeuser = document.getElementById('mensajeuser');
            if (otromensaje1 === null ){}else{otromensaje1.style  ='block';mensajeuser.style  ='block';}
            setTimeout(function(){
                sonido();
                escribir();
                mensaje1='Será un placer colaborarte, ¿Cuál es tu nombre?';
                typing1.style.display='none';
                preguntas(mensaje1);
                contactomenu.style.display='none';  
            },1000);
        }
        var contacto4 = document.getElementById("WhatsApp");
        contacto4.onclick = function(){
            typing1.style.display='block';
            hora =hora ='contactar vía WhatsApp'; 
            contacto.style.display='none';
            var otromensaje1 = document.getElementById('otromensaje');
            var mensajeuser = document.getElementById('mensajeuser');
            if (otromensaje1 === null ){}else{otromensaje1.style  ='block';mensajeuser.style  ='block';}
            setTimeout(function(){
                sonido();
                escribir();
                mensaje1='Será un placer colaborarte, ¿Cuál es tu nombre?';
                typing1.style.display='none';
                preguntas(mensaje1);
                  
            },1000);
        }

    
    
        var btn = document.getElementById("residual");
        btn.onclick = function(){
            typing.style.display='block';
            asunto = 'Mensaje bot - Plantas de tratamiento de aguas residuales';
            imagen='1';     
            var area = document.createTextNode(" El area seleccionada es planta de tratamiento de aguas residuales");                           
            document.getElementById("asesor").appendChild(area);                
            setTimeout(function(){
                sonido();
                typing.style.display='none';
                bienvenida.style.display='none'; 
                aguaresidual.style.display = 'block';  
                $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
            },1000);
        }
        var btn1 = document.getElementById("potable");
        btn1.onclick = function(){
            typing.style.display='block';
            asunto = 'Mensaje bot - Plantas de tratamiento de aguas potable'
            imagen='2';   
            var area = document.createTextNode(" El area seleccionada es planta de tratamiento de agua potable");                                    
            document.getElementById("asesor").appendChild(area);                 
            setTimeout(function(){
                sonido();
                typing.style.display='none';
                bienvenida.style.display='none';
                aguapotable.style.display = 'block';
                $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
            },1000);
        }
        var btn2 = document.getElementById("almacenamiento1");
        btn2.onclick = function(){
            typing.style.display='block';
            asunto = 'Mensaje bot - Tanques de almacenamiento'
            imagen='3';
            var area = document.createTextNode(" El area seleccionada es tanques de almacenamiento ");                                    
            document.getElementById("asesor").appendChild(area);                  
            setTimeout(function(){
                sonido();
                typing.style.display='none';
                bienvenida.style.display='none';   
                tanque.style.display='block';
                $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
            },1000);
        }
        var btn3 = document.getElementById("ultravioleta1"); 
        btn3.onclick = function(){
            typing.style.display='block';
            asunto = 'Mensaje bot - Desinfección ultravioleta'
            imagen='4';
            var area = document.createTextNode(" El area seleccionada es desinfección ultravioleta");                                    
            document.getElementById("asesor").appendChild(area);                  
            setTimeout(function(){
                sonido();
                bienvenida.style.display='none';
                typing.style.display='none';         
                ultravioleta.style.display='block';
                $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
            },1000);
        }
        var btn4 = document.getElementById("mantenimiento1");
        btn4.onclick = function(){
            typing.style.display='block';
            asunto = 'Mensaje bot - Servicio de mantenimiento'
            imagen='5';
            var area = document.createTextNode(" El area seleccionada es servicios de mantenimiento");                                    
            document.getElementById("asesor").appendChild(area);                  
            setTimeout(function(){
                sonido();
                bienvenida.style.display='none';
                typing.style.display='none';         
                mantenimiento.style.display='block';
                $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
            },1000);
        }
        var btn5 = document.getElementById("otrosequipos1");      
        btn5.onclick = function(){
            typing.style.display='block';
            asunto = 'Mensaje bot - Otros equipos'
            imagen='6';
            var area = document.createTextNode(" El area seleccionada es otros equipos");                                    
            document.getElementById("asesor").appendChild(area);                
            setTimeout(function(){
                sonido();
                bienvenida.style.display='none';
                typing.style.display='none';         
                otrosequipos.style.display='block';
                $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
            },1000); 
        }
       
        
     
        var aguaresidualdomestica = document.getElementById("aguaresidualdomestica");
        aguaresidualdomestica.onclick = function(){
            typing1.style.display='block';
            Segmento='Domesticas';
            document.getElementById("asesoraguaresidual").appendChild(document.createTextNode("Elegiste Domesticas. "));       
            setTimeout(function(){ typing1.style.display='none';sonido(); aguaresidualmenu.style.display='none'; contacto.style.display='block';
            $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); 
            $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var aguaresidualindustrial = document.getElementById("aguaresidualindustrial");
        aguaresidualindustrial.onclick = function(){
            typing1.style.display='block';
            Segmento='Industriales';
            document.getElementById("asesoraguaresidual").appendChild(document.createTextNode("Elegiste Industriales. "));             
           setTimeout(function(){typing1.style.display='none'; sonido(); aguaresidualmenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var aguaresidualmineria = document.getElementById("aguaresidualmineria");
        aguaresidualmineria.onclick = function(){
            Segmento='Minería y petróleo';typing1.style.display='block';
            document.getElementById("asesoraguaresidual").appendChild(document.createTextNode("Elegiste Minería y petróleo."));
            setTimeout(function(){ typing1.style.display='none';sonido();aguaresidualmenu.style.display='none'; contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var aguaresidualmunicipal = document.getElementById("aguaresidualmunicipal");
        aguaresidualmunicipal.onclick = function(){
            Segmento='Municipales';typing1.style.display='block';
            document.getElementById("asesoraguaresidual").appendChild(document.createTextNode("Elegiste Municipales."));        
            setTimeout(function(){ typing1.style.display='none';sonido(); aguaresidualmenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var aguaresidualotros = document.getElementById("aguaresidualotros");
        aguaresidualotros.onclick = function(){
            sonido();aguaresidualmenu.style.display='none';
            Segmento='Otros';
            mensaje1='Describe tu solicitud'
            document.getElementById("asesoraguaresidual").appendChild(document.createTextNode("Elegiste Otros."));    
            escribir();
			preguntas(mensaje1);
            $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);   
        }
      
        
        
        var aguapotablemunicipal = document.getElementById("aguapotablemunicipal");
        aguapotablemunicipal.onclick = function(){
            typing1.style.display='block';
            Segmento='Municipales';
            document.getElementById("asesoraguapotable").appendChild(document.createTextNode("Elegiste Municipales."));        
            setTimeout(function(){typing1.style.display='none'; sonido(); aguapotablemenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var aguapotablecompacta = document.getElementById("aguapotablecompacta");
        aguapotablecompacta.onclick = function(){
            Segmento='Compactas';typing1.style.display='block';
            document.getElementById("asesoraguapotable").appendChild(document.createTextNode("Elegiste Compactas."));        
            setTimeout(function(){typing1.style.display='none'; sonido(); aguapotablemenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var aguapotableportatil = document.getElementById("aguapotableportatil");
        aguapotableportatil.onclick = function(){
            Segmento='Portátiles';typing1.style.display='block';
            document.getElementById("asesoraguapotable").appendChild(document.createTextNode("Elegiste Portátiles."));        
            setTimeout(function(){typing1.style.display='none'; sonido(); aguapotablemenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var aguapotablemunicipal = document.getElementById("aguapotablefiltro");
        aguapotablemunicipal.onclick = function(){
            Segmento='Filtros';typing1.style.display='block';
            document.getElementById("asesoraguapotable").appendChild(document.createTextNode("Elegiste Filtros."));        
            setTimeout(function(){ typing1.style.display='none';sonido(); aguapotablemenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var aguapotableotros = document.getElementById("aguapotableotros");
        aguapotableotros.onclick = function(){
            sonido();
            aguapotablemenu.style.display='none';
            Segmento='Otros';
            mensaje1='Describe tu solicitud'
            document.getElementById("asesoraguapotable").appendChild(document.createTextNode("Elegiste Otros."));    
            escribir();
			preguntas(mensaje1);
            $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);   
        }
     
                
        var ultravioletaaire = document.getElementById("ultravioletaaire");
        ultravioletaaire.onclick = function(){
            typing1.style.display='block';
            Segmento='Ultravioleta aire';
            document.getElementById("asesorultravioleta").appendChild(document.createTextNode("Elegiste Equipos Ultravioleta para Aire."));    
            setTimeout(function(){typing1.style.display='none'; sonido(); ultravioletamenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var ultravioletaagua = document.getElementById("ultravioletaagua");
        ultravioletaagua.onclick = function(){
            Segmento='Ultravioleta agua.';typing1.style.display='block';
            document.getElementById("asesorultravioleta").appendChild(document.createTextNode("Elegiste Equipos Ultravioleta para Agua."));    
            setTimeout(function(){ typing1.style.display='none';sonido(); ultravioletamenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var ultravioletasuperficies = document.getElementById("ultravioletasuperficies");
        ultravioletasuperficies.onclick = function(){
            Segmento='Ultravioleta para Superficies.';typing1.style.display='block';
            document.getElementById("asesorultravioleta").appendChild(document.createTextNode("Elegiste Equipos Ultravioleta para Superficies."));        
            setTimeout(function(){ typing1.style.display='none';sonido(); ultravioletamenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var ultravioletaindustriales = document.getElementById("ultravioletaindustriales");
        ultravioletaindustriales.onclick = function(){
            Segmento='Ultravioleta Industriales.';typing1.style.display='block';
            document.getElementById("asesorultravioleta").appendChild(document.createTextNode("Elegiste Equipos Ultravioleta Industriales."));  
            setTimeout(function(){ typing1.style.display='none';sonido(); ultravioletamenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var ultravioletaotros = document.getElementById("ultravioletaotros");
        ultravioletaotros.onclick = function(){
            sonido();
            ultravioletamenu.style.display='none';
            Segmento='Otros';
            mensaje1='Describe tu solicitud'
            document.getElementById("asesorultravioleta").appendChild(document.createTextNode("Elegiste Equipos Ultravioleta Otros."));    
            escribir();
			preguntas(mensaje1);
            $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);   
        }
        
        
        var tanquealmacenamiento = document.getElementById("tanquealmacenamiento");
        tanquealmacenamiento.onclick = function(){
            Segmento='Tanques de Almacenamiento';typing1.style.display='block';
            document.getElementById("asesortanque").appendChild(document.createTextNode("Elegiste Tanques de Almacenamiento."));    
            setTimeout(function(){ typing1.style.display='none';sonido(); tanquemenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var tanqueincendio = document.getElementById("tanqueincendio");
        tanqueincendio.onclick = function(){
            Segmento='Tanques Contra Incendios.';typing1.style.display='block';
            document.getElementById("asesortanque").appendChild(document.createTextNode("Elegiste Tanques Contra Incendios."));    
            setTimeout(function(){ typing1.style.display='none'; sonido(); tanquemenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var tanquehidrocarburo = document.getElementById("tanquehidrocarburo");
        tanquehidrocarburo.onclick = function(){
            Segmento='Tanques de Combustibles.';typing1.style.display='block';
            document.getElementById("asesortanque").appendChild(document.createTextNode("Elegiste Tanques de Combustibles."));        
            setTimeout(function(){ typing1.style.display='none'; sonido(); tanquemenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var tanqueglp = document.getElementById("tanqueglp");
        tanqueglp.onclick = function(){
            Segmento='Tanques para Gas GLP.';typing1.style.display='block';
            document.getElementById("asesortanque").appendChild(document.createTextNode("Elegiste Tanques para Gas GLP."));  
            setTimeout(function(){ typing1.style.display='none'; sonido(); tanquemenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var tanqueindustriales = document.getElementById("tanqueindustriales");
        tanqueindustriales.onclick = function(){
            Segmento='Tanques Industriales.';typing1.style.display='block';
            document.getElementById("asesortanque").appendChild(document.createTextNode("Elegiste Tanques Industriales."));  
            setTimeout(function(){ typing1.style.display='none'; sonido(); tanquemenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var tanqueotros = document.getElementById("tanqueotros");
        tanqueotros.onclick = function(){
            sonido();
            tanquemenu.style.display='none';
            Segmento='Otros';
            mensaje1='Describe tu solicitud'
            document.getElementById("asesortanque").appendChild(document.createTextNode("Tanques de almacenamiento otros."));    
            escribir();
			preguntas(mensaje1);
            $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);   
        }
        
        
        var mantenimientopreventivo = document.getElementById("mantenimientopreventivo");
        mantenimientopreventivo.onclick = function(){
            Segmento='Mantenimiento preventivo'; typing1.style.display='block';
            document.getElementById("asesormantenimiento").appendChild(document.createTextNode("Elegiste Mantenimiento preventivo."));   
            setTimeout(function(){  typing1.style.display='none';sonido(); mantenimientomenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var mantenimientocorrectivo = document.getElementById("mantenimientocorrectivo");
        mantenimientocorrectivo.onclick = function(){
            Segmento='Mantenimiento correctivo';typing1.style.display='block';
            document.getElementById("asesormantenimiento").appendChild(document.createTextNode("Elegiste Mantenimiento correctivo."));    
            setTimeout(function(){  typing1.style.display='none';sonido(); mantenimientomenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var mantenimientopersonalizado = document.getElementById("mantenimientopersonalizado");
        mantenimientopersonalizado.onclick = function(){
            Segmento='Manuales técnicos personalizados.';typing1.style.display='block';
            document.getElementById("asesormantenimiento").appendChild(document.createTextNode("Elegiste Manuales técnicos personalizados."));   
            setTimeout(function(){  typing1.style.display='none';sonido(); mantenimientomenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var mantenimientomonitoreo = document.getElementById("mantenimientomonitoreo");
        mantenimientomonitoreo.onclick = function(){
            Segmento='Monitoreo y control remoto.';typing1.style.display='block';
            document.getElementById("asesormantenimiento").appendChild(document.createTextNode("Elegiste Monitoreo y control remoto."));  
            setTimeout(function(){  typing1.style.display='none';sonido(); mantenimientomenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var mantenimientopersonal = document.getElementById("mantenimientopersonal");
        mantenimientopersonal.onclick = function(){
            Segmento='Formación personal.';typing1.style.display='block';
            document.getElementById("asesormantenimiento").appendChild(document.createTextNode("Elegiste Formación personal."));  
            setTimeout(function(){  typing1.style.display='none';sonido(); mantenimientomenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var mantenimientoincidencias = document.getElementById("mantenimientoincidencias");
        mantenimientoincidencias.onclick = function(){
            Segmento='Respuesta inmediata a las incidencias.';typing1.style.display='block';
            document.getElementById("asesormantenimiento").appendChild(document.createTextNode("Elegiste Respuesta inmediata a las incidencias."));  
            setTimeout(function(){ typing1.style.display='none';sonido(); mantenimientomenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var mantenimientootros = document.getElementById("mantenimientootros");
        mantenimientootros.onclick = function(){
            sonido();
            mantenimientomenu.style.display='none';
            Segmento='Otros';
            mensaje1='Describe tu solicitud'
            document.getElementById("asesormantenimiento").appendChild(document.createTextNode("Elegiste Otros."));    
            escribir();
			preguntas(mensaje1);
            $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);   
        }
        
        
        var equiposotros2 = document.getElementById("equiposotros2");
        equiposotros2.onclick = function(){
            sonido();
            otrosequiposmenu.style.display='none';
            Segmento='Otros';
            mensaje1='Describe tu solicitud'
            document.getElementById("asesorotros").appendChild(document.createTextNode("Elegiste Otros."));    
            escribir();
			preguntas(mensaje1);
            $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);   
        }
        var equiposaguaresiduales = document.getElementById("equiposaguaresiduales");
        equiposaguaresiduales.onclick = function(){
            Segmento='Equipos de Aguas Residuales.';typing1.style.display='block';
            document.getElementById("asesorotros").appendChild(document.createTextNode("Elegiste Equipos de Aguas Residuales."));  
            setTimeout(function(){typing1.style.display='none'; sonido(); otrosequiposmenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var equiposaguaspotables = document.getElementById("equiposaguaspotables");
        equiposaguaspotables.onclick = function(){
            Segmento='Equipos de Agua Potable.';typing1.style.display='block';
            document.getElementById("asesorotros").appendChild(document.createTextNode("Elegiste Equipos de Agua Potable."));  
            setTimeout(function(){ typing1.style.display='none'; sonido(); otrosequiposmenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        var equiposacccesorios = document.getElementById("equiposacccesorios");
        equiposacccesorios.onclick = function(){
            Segmento='Accesorios para Tanques de Almacenamiento.';typing1.style.display='block';
            document.getElementById("asesorotros").appendChild(document.createTextNode("Elegiste Accesorios para Tanques de Almacenamiento.")); 
            setTimeout(function(){ typing1.style.display='none'; sonido(); otrosequiposmenu.style.display='none';contacto.style.display='block';$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);},100); $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        }
        
        
        
        
        document.querySelector('body').addEventListener('click', function() { 
          var a = document.querySelector("span.error"); 
          if(a != undefined || a != null){
              alert(a.outerText); 
          }
        });
    
    const select = document.querySelector('.bienvenida');
   
	Array.from(document.querySelectorAll(".all"))
	.map(element => element.children[1].children[1].children[0].onchange = function(e){
		
        
        
		}
	); //.filter(x=>x.style.display == "block")[0].children[1].children[1].children[0];
	
	//console.log(todos);
	
   
    
    

  
})

document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.product-overlay').style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.product-overlay').style.opacity = '0';
        });
    });
});