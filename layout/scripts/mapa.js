/* Funcionalidad de mapa */
window.onload = function () {
      
  /* ejecutar solo mapa principal en tamaño de pantalla grande */
  if(screen.width >= 768){
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: { lat: 8.191593488953123, lng: -73.7505189276769 },
      mapId: "2edbdbc0e869a4ed",
      disableDefaultUI: true,
      heading: 90,
      tilt: 45,
    });

    
    
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
  
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
    let marker = null;
    var markers = [];
  
    //funcion para rotar mapa
    function rotate(numero) {
      var heading = map.getHeading() || 0;
      map.setHeading(numero);
    }
  
    //funcion para cerrar marcador
    function cerrar_marcador(marker) {
      marker.setMap(null);
    }
  
    //funcion para hacer zoom
    function zoom(numero) {
      map.setZoom(numero);
    }
    let markerClustere;
  
    // funcion que crea marcador y evento click de maracdor
    function instancia_marcador(title, position, info) {
      
      let marker = new google.maps.Marker({
        position: position,
        map,
        icon: 'https://www.nyfdecolombia.com/images/puntero.png',
        animation: google.maps.Animation.DROP,
        title: `${title}`,
      });
      marker.addListener("click", () => {
        info.open({
          anchor: marker,
          map,
        });
      });
      markers.push(marker);
      
      /* marker.setAnimation(google.maps.Animation.BOUNCE);  */
    }
  
    //funcion para efecto del maracdorS
    function toggleBounce(marker) {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
  
    //creando el marcador
    function crear_marcador(
      position,
      empresas,
      num_zoom,
      heading,
      tilt,
      num_rotate
    ) {
      //disminuye el zoom al inicio
      zoom(3);
  
      //se cambia el centro del mapa tomando el punto del nuevo marcador
      map.setCenter(position);
  
      //rota el mapa segun el parametro
      setTimeout(() => {
        rotate(num_rotate);
      }, 100);
  
      //convierte empresas en un array
      empresas = Object.values(empresas);
  
      //si hay marcadores antes se cierran y se vacía el array markers
      if (markers.length > 0) {
        for (let i = 0; i < markers.length; i++) {
          cerrar_marcador(markers[i]);
          
        }
        markers = [];
        markerClustere.setMap(null);
      }

      
  
      //se recorren todas las empresas
      for (let i = 0; i < empresas.length; i++) {
        //se crea el html del mensaje que se muestra al dar click en el marcador
        const contentString =
          
          '<div class="container" id="content">' +
          '<div id="siteNotice" >' +
          "</div>" +
          '<div class="row justify-content-center"><h5 id="firstHeading" class="firstHeading text-center col-6">' +
          empresas[i].nombre +
          "</h5></div>" +  
          '<div class="container">'+
          '<div class="row justify-content-center">'+
          '<img class="col-6" src="'+ empresas[i].bandera +'" style="width: 15%">'+
          '<p class="text-center pt-2"><b>'+ empresas[i].direccion +'</b></p>'+
          '</div></div> '+
          '<div class="container" id="bodyContent">' +
          "<div class='row justify-content-center'>"+
          
          '<a href="https://nyfdecolombia.com/contacto.html" class="col-6 btn btn-primary text-center btn-mapa" >Contáctanos Ahora</a></div>' +
          "</div>" +
          "</div>";
  
        /* se crea la instancia de la ventana para el mensaje */
        var info = new google.maps.InfoWindow({
          content: contentString,
        });
  
        //llama funcion que crea el marcador y la info al dar click en marcador
        instancia_marcador(empresas[i].title, empresas[i].position, info);
      }

      markerClustere = new markerClusterer.MarkerClusterer({ map, markers });
      /* 
  
         const marker = new google.maps.Marker({
            position: position,
            map,
            animation: google.maps.Animation.DROP,
            title: `${title}`
         });
  
         toggleBounce();
         markers.push(marker);
         map.setCenter(marker.getPosition());
         marker.addListener("click", toggleBounce); */
  
      /* infowindow.close(); */
  
      // se hace el zoom final segun el parametro del marcador
      setTimeout(() => {
        zoom(num_zoom);
      }, 250);
  
      /* setTimeout(() => {
            infowindow.open({
               anchor: marker,
               map,
            });
  
         }, "100"); */
  
      /* marker.addListener("click", () => {
            infowindow.open({
               anchor: marker,
               map,
            });
            toggleBounce
         }); */
      
      
    }
    const tourStops = [
      {
        /* Colombia */
        position: { lat: 7.06018159358857, lng: -73.95078678799158 },
        num_zoom: 5,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "Barranquilla",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/COLOMBIA.png",
            direccion: "Barranquilla Carrera 70 No. 75 - 78",
            empresa: "Synertech",
            nombre: "Synertech",
            pagina: "https://www.synertech.com.co/",
            url: "Barranquilla Carrera 70 No. 75 - 78",
            telefono: "+573013179017",
            position: { lat: 11.010136879062534, lng: -74.79608068072052 },
          },
          empresa2: {
            title: "Cali",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/COLOMBIA.png",
            direccion: "Cali Carrera 100 # 5-169. CC Unicentro Torre B Pasoancho - Piso 6",
            empresa: "EKOA INGENIERIA SAS",
            nombre: "Synertech Cali",
            pagina: "https://ekoaingenieria.com",
            url: "Carrera 100 # 5-169. CC Unicentro Torre B Pasoancho - Piso 6",
            telefono: "+573013179017",
            position: { lat: 3.4025269097843394, lng: -76.53656634870448 }, 
          },
          empresa3: {
            title: "Pereira",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/COLOMBIA.png",
            direccion: "Pereira / Risaralda Manzana 4 Casa 15 Jardín – Etapa 2",
            empresa: "ESSAM",
            nombre: "CARLOS SABAS RAMIREZ",
            pagina: "https://especialistasambientales.co/",
            url: "Manzana 4 Casa 15 Jardín – Etapa 2 Pereira / Risaralda",
            telefono: "+573013179017",
            position: { lat: 4.801813745387454, lng: -75.72389471909027 },
          },
          empresa4: {
            title: "Bogotá",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/COLOMBIA.png",
            direccion: "Bogotá CR 70 D NO. 64 G 31",
            empresa: "ESPAVICONCRETOS SAS SAM",
            nombre:"DILAN CORONADO",
            pagina: "#",
            url: "CR 70 D NO. 64 G 31",
            telefono: "+573013179017",
            position: { lat: 4.676827923755543, lng: -74.09859247857645},  
          },
          empresa5: {
            title: "Bucaramanga",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/COLOMBIA.png",
            direccion: "Bucaramanga CALLE 23 # 9-65",
            empresa: "SQAINGENIERIA",
            nombre: "ANDRES BUSTAMANTE",
            pagina: "#",
            url: "CALLE 23 # 9-65",
            telefono: "+573013179017",
            position: { lat: 7.1244168217351636, lng: -73.133278373833},
          },
          empresa6: {
            title: "Tolima",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/COLOMBIA.png",
            direccion: "Ibagué Tolima. CL 18 4 - 67 BRR EL CARMEN",
            empresa: "INERGAS ESP",
            nombre: "Mauricio Medina",
            pagina: "https://www.facebook.com/p/Inergas-sas-esp-100084824073108/",
            url: "CL 18 4 - 67 BRR EL CARMEN, Ibagué Tolima. ",
            telefono: "+573013179017",
            position: { lat: 4.442167598853088, lng: -75.2346310880017}, 
          },
        },
      },
      {
        /* Chile */
        position: { lat: -26.550085762696817, lng: -70.32778273784264 },
        num_zoom: 5,
        rotate: 90,
        empresas: {
          empresa1: {
            title: "Hidrosolution SPA",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/CHILE.png",
            direccion: "Iquique, Chile. Tarapacá 589. Edificio Beper",
            empresa: "Hidrosolution SPA",
            nombre: "Gonzalo Vera",
            pagina: "https://www.hydrosolution.cl/",
            url: "Tarapacá 589. Edificio Beper, Iquique, Chile. ",
            telefono: "+573013179017",
            position: { lat: -20.21397880976446, lng: -70.14945160980706 },
          },
          /* empresa2:{
                                   title: "Hidrosolution SPA",
                                   empresa: "Hidrosolution SPA",
                                   pagina: "https://www.hydrosolution.cl/",
                                   url: "www.hydrosolution.cl",
                                   telefono: "+56 9 4434 7465",
                                   position: {lat: -33.41588383314638, lng: -70.59907045766975} 
                                } */
        },
      },
      {
        /* Panama */
        position: { lat: 8.522218074807634, lng: -80.04617909678211 },
        num_zoom: 7.1,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "Aqua Global",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/PANAMA.png",
            direccion: "Via España Edif Dominó ofic. #3",
            empresa: "Aqua Global",
            nombre: "Leo Watemberg",
            pagina: "https://www.aquagreenlatam.com",
            url: "Via España Edif Dominó ofic. #3",
            telefono: "+573013179017",
            position: { lat: 8.957619455879387, lng: -79.54064544694114 },
          },
        },
      },
      {
        /* Mexico */
        position: { lat: 23.837256216772275, lng: -102.49183667257056 },
        num_zoom: 4.5,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "Comsyp SAS",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/MEXICO.png",
            direccion: "Saltillo, Coahuila Calle Villa Magna N 133 Fraccionamiento Real de Villas de la Aurora, CP 25296.",
            empresa: "Comsyp SAS",
            nombre: "Ing. Carlos Serrano",
            pagina: "https://comsyp.com/",
            url: "Calle Villa Magna N 133 Fraccionamiento Real de Villas de la Aurora, CP 25296. Saltillo, Coahuila, México. ",
            telefono: "+573013179017",
            position: { lat: 25.41618986060173, lng: -100.95144040244323 },
          },
          empresa2: {
            title: "Green City Business México",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/MEXICO.png",
            direccion: "Topógrafos de Echeveste No. 322, colonia, Hacienda Echeveste, CP 37100",
            empresa: "Green City Business México",
            nombre: "JULIO LOVIO",
            pagina: "https://www.greencitybusiness.com.mx",
            url: "Topógrafos de Echeveste No. 322, colonia, Hacienda Echeveste, CP 37100,",
            telefono: "+573013179017",
            position: { lat: 21.171041767266008, lng: -101.70381325477813 }, 
          },
          empresa3: {
            title: "MARVIRJIM",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/MEXICO.png",
            direccion: "Estado de México Prolongación 16 de septiembre número 5 Barrio Santiaguito",
            empresa: "MARVIRJIM",
            nombre: "David Maldonado",
            pagina: "https://marvirjim.com/",
            url: "Prolongación 16 de septiembre número 5 Barrio Santiaguito, Tultitlán Estado de México, Código Postal 54900",
            telefono: "+573013179017",
            position: { lat: 19.653358286796053, lng: -99.16846894519425},   
          },
        },
      },
      {
        /* guatemala */
        position: { lat: 15.83758268714898, lng: -90.01026131849049 },
        num_zoom: 7,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "Guater Control S.A",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/GUATEMALO.png",
            direccion: "FRAIJANES - KM 21.5 CARRETERA A EL SALVADOR, LOMAS DE SAN NICOLAS, 3-60, ZONA 0",
            empresa: "Guater Control S.A",
            nombre: "Daniel Conrado",
            pagina: "https://www.facebook.com/profile.php?id=100091265314500",
            url: "KM 21.5 CARRETERA A EL SALVADOR, LOMAS DE SAN NICOLAS, 3-60, ZONA 0, FRAIJANES, GUATEMALA",
            telefono: "+573013179017",
            position: { lat: 14.521302863770124, lng: -90.47047000980571 },
          },
          empresa2: {
            title: "GLOBAL INGENIERÍA INTERNACIONAL",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/GUATEMALO.png",
            direccion: "Comercial 26 Avenida 26-43 Zona 12",
            empresa: "GLOBAL INGENIERÍA INTERNACIONAL",
            nombre: "Alvaro Anaya",
            pagina: "#",
            url: "Comercial 26 Avenida 26-43 Zona 12, Santa Eliza industrial Guatemala, guatemala ",
            telefono: "+573013179017",
            position: { lat: 14.622148803952205, lng: -90.54384433626473 },
          }
        },
      },
      {
        /* honduras */
        position: { lat: 14.334508268323437, lng: -86.74314548048899 },
        num_zoom: 7.1,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "Hcc Company",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/HONDURAS.png",
            direccion: "choluteca - col. venecia, 2da. Entrada, 3 calles al sur, 1/2 calle al este",
            empresa: "Hcc Company",
            nombre: "David Zepeda",
            pagina: "#",
            url: "col. venecia, 2da. Entrada, 3 calles al sur, 1/2 calle al este, choluteca, honduras.",
            telefono: "+573013179017",
            position: { lat: 13.306397241928792, lng: -87.19514412051674 },
          },
          empresa2: {
            title: "Inhisa SAS",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/HONDURAS.png",
            direccion: "San Pedro Sula - Barrio Guamilito 7 y 8 Ave. 3 y 4 calle N.O.",
            empresa: "Inhisa SAS",
            nombre: "Jacobo Mejía",
            pagina: "#",
            url: "Barrio Guamilito 7 y 8 Ave. 3 y 4 calle N.O. San Pedro Sula Honduras C.A. antiguo local de HEDMAN Allas.",
            telefono: "+573013179017",
            position: { lat: 15.511901181725074, lng: -88.02778985532873}, 
          },
        },
      },
      {
        /* peru */
        position: { lat: -10.467570912075779, lng: -75.1947761203063 },
        num_zoom: 6,
        rotate: 60,
        title: "Hidalgo",
        empresa: "Synertech Mx",
        empresas: {
          /* empresa1: {
            title: "RWL Water SAC",
            empresa: "RWL Water SAC",
            pagina: "http://rwlwater.com.pe/",
            url: "rwlwater.com.pe",
            telefono: "+511 203 3820 +511 979 223 977 - Ericka Sanchez",
            position: { lat: -12.080858217223483, lng: -76.96881965841563 },
          }, */
        },
      },
      {
        /* ecuador */
        position: { lat: -1.4596655955535303, lng: -78.64512618577692 },
        num_zoom: 6.2,
        rotate: 90,
  
        empresas: {
          empresa1: {
            title: "Wascorp S.A",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/ECUADOR.png",
            direccion: "Panamericana Sur Km 4 1/2 Cutuglagua, Barrio Santa Isabel Calle B",
            empresa: "Wascorp S.A",
            nombre: "Diana Pasaca",
            pagina: "https://wascorpsa.com/",
            url: "Panamericana Sur Km 4 1/2 Cutuglagua, Barrio Santa Isabel Calle B",
            telefono: "+573013179017",
            position: { lat: -0.38572891290994593, lng: -78.53726908466051 },
          },
        },
      },
      {
        /* estados unidos */
        position: { lat: 35.410740775487845, lng: -90.39482032582693 },
        num_zoom: 5.2,
        rotate: 210,
        title: "Hidalgo",
        empresa: "Synertech Mx",
        empresas: {
          empresa1: {
            title: "Tampa",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/USA.png",
            direccion: "Tampa - Florida: 14225 Damselfly Dr.",
            empresa: "Synertech Us",
            nombre: "Mauricio Massard",
            pagina: "https://www.synertech.us/",
            url: "Tampa - Florida: 14225 Damselfly Dr.",
            telefono: "+573013179017",
            position: { lat: 27.954360871043097, lng: -82.45910077032737 },
          },
        },
      },
      {
        /* brasil */
        position: { lat: -8.066993187928086, lng: -51.3011659922794 },
        num_zoom: 4.2,
        rotate: 80,
        title: "Brasil",
        empresa: "Synertech Mx",
        empresas: {},
      },
      {
        /* republica dominicana */
        position: { lat: 18.95026651845185, lng: -70.47624754927247 },
        num_zoom: 7,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "TECCA CARIBE",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/REPUBLICA DOMINICANA.png",
            direccion: "Santo Domingo - Avenida Bolívar 911 Oficina 301",
            empresa: "TECCA CARIBE",
            nombre: "Nelson Mena",
            pagina: "https://teccacaribe.com",
            url: "",
            telefono: "+573013179017",
            position: { lat: 18.46475234369305, lng: -69.92288313572533 },
          },
          empresa2: {
            title: "SANIFA S.R.L",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/REPUBLICA DOMINICANA.png",
            direccion: "PROLONGACION GARCIAGODOY,PRINCIAL CARRERA DUARTE VIEJA LA VEGA 41000",
            empresa: "SANIFA S.R.L",
            nombre: "Rhandy Saldivar",
            pagina: "https://synertech.com.co",
            url: "PROLONGACION GARCIAGODOY,PRINCIAL CARRERA DUARTE VIEJA LA VEGA 41000",
            telefono: "+573013179017",
            position: { lat: 19.202393756546137, lng: -70.50262837498572 },
          },
          empresa3: {
            title: "Edificio Corporativo NC, Piso 12",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/REPUBLICA DOMINICANA.png",
            direccion: "Marginal nuñez de caceres N 366 edificio corporativo nc piso 12 el millon",
            empresa: "ICA",
            nombre: "SOBEIDA PERDOMO",
            pagina: "https://www.ica.com.do",
            url: "Marginal nuñez de caceres N 366 edificio corporativo nc piso 12 el millon",
            telefono: "+573013179017",
            position: { lat: 18.461602291871053, lng: -69.95817209386526},
          },
        },
      },
      {
        /* bolivia */
        position: { lat: -16.365397713616286, lng: -64.64519336605726 },
        num_zoom: 5,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "COCHABAMBA",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/BOLIVIA.jpg",
            direccion: "Zona COÑA COÑA, calle MARTIN CARDENAS Nro. SN",
            empresa: "AFR ENERGIA",
            nombre: "Luis Fernando Gutierrez",
            pagina: "http://www.afr-energia.com.bo",
            url: "Zona COÑA COÑA, calle MARTIN CARDENAS Nro. SN, Referencias: ANTES DE LLEGAR A LA PROLONGACIÓN DORBIGNY",
            telefono: "+573013179017",
            position: { lat: -17.41599351166688, lng: -66.16130648051184 },
          },
          empresa2: {
            title: "Rolea Center 2 piso oficina 3D",
            direccion: "Santa Cruz Edificio Rolea Center 2 piso oficina 3D, Av Salvador - Equipetrol",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/BOLIVIA.jpg",
            empresa: "Sicolmex Bolivia",
            nombre: "Gisselle Kennedy",
            pagina: "https://sicolmex.com/",
            url: "Santa Cruz Edificio Rolea Center 2 piso oficina 3D, Av Salvador - Equipetrol",
            telefono: "+573013179017",
            position: { lat: -17.75723770334713, lng: -63.19860620207125 }, 
          },
        },
      },
      {
        /* El salvador */
        position: { lat: 13.778171124607773, lng: -88.90932639384894}, 
        num_zoom: 8,
        rotate: 10,
        empresas: {
          empresa1: {
            title: "El Salvador",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/SALVADOR.png",
            direccion: "",
            empresa: "Global Ingenieria Internacional",
            nombre: "Alvaro Anaya B",
            pagina: "#",
            url: "",
            telefono: "+573013179017",
            position: { lat: 13.693244646422425, lng: -89.22206268904107}, 
          },
        },
      },
    ];
    let abierto; // Variable para almacenar la referencia del setTimeout

    /* listar empresas iniciales */
    let empresas=[];
    for (let i = 0; i < tourStops.length; i++) {
      let listEmpresas =  Object.values(tourStops[i].empresas);
      for (let j = 0; j < listEmpresas.length; j++) {
        empresas.push(listEmpresas[j])
      }       
  
    }
      let num_zoom = 2;
      let heading = 90;
      let tilt = 45;
      let rotate_var = 0;
      let ubicacion = {lat: 8.191593488953123, lng: -73.7505189276769};
    // Si hay un temporizador en ejecución, cáncelalo
    if (abierto) {
      clearTimeout(abierto);
    }
    

    // Crea el marcador
    crear_marcador(ubicacion, empresas, num_zoom, heading, tilt, rotate_var);
    /* fin listar empresas iniciales */
  
    $(".btnEstados").click(function () {
      let id = $(this).data("id");
      let ubicacion = tourStops[id].position;
      let empresas = tourStops[id].empresas;
      let num_zoom = tourStops[id].num_zoom;
      let heading = tourStops[id].heading;
      let tilt = tourStops[id].tilt;
      let rotate_var = tourStops[id].rotate;
  
      // Si hay un temporizador en ejecución, cáncelalo
      if (abierto) {
        clearTimeout(abierto);
      }
  
      // Crea el marcador
      crear_marcador(ubicacion, empresas, num_zoom, heading, tilt, rotate_var);
  
      // Configura un nuevo temporizador para cerrar el marcador después de 15 segundos
      /* abierto = setTimeout(() => {
        for (let i = 0; i < markers.length; i++) {
          cerrar_marcador(markers[i]);
        }
        map.setCenter({ lat: -9.045656336049568, lng: -68.00976565470837 });
        zoom(2);
        rotate(0);
        markers = [];
        abierto = null; Limpia la referencia del temporizador después de cerrar los marcadores
      }, 15000); */
    });
  }else{
    /* ejecutar solo segundo mapa en pantalla pequeña*/
    /*------------------ mapa 2 -----------*/
    const map1 = new google.maps.Map(document.getElementById("map2"), {
      zoom: 3.8,
      center: { lat: 8.191593488953123, lng: -73.7505189276769 },
      mapId: "2edbdbc0e869a4ed",
      disableDefaultUI: true,
      heading: 90,
      tilt: 45,
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
  
    // Create an info window to share between markers.
  
    const marker1 = null;
    let markers1 = [];
  
    function rotate1(numero) {
      var heading = map1.getHeading() || 0;
      map1.setHeading(numero);
    }
  
    function cerrar_marcador1(marker1) {
      marker1.setMap(null);
    }
  
    function zoom1(numero) {
      map1.setZoom(numero);
    }
    
  
    function instancia_marcador1(title, position, info) {
      let marker1 = new google.maps.Marker({
        position: position,
        map:map1,
        icon: 'https://www.nyfdecolombia.com/images/puntero.png',
        animation: google.maps.Animation.DROP,
        title: `${title}`,
      });
      marker1.addListener("click", () => {
        info.open({
          anchor: marker1,
          map:map1,
        });
      });
      markers1.push(marker1);
      /* marker.setAnimation(google.maps.Animation.BOUNCE);  */
    }
  
    // Create the markers.
    function crear_marcador1(
      position,
      empresas,
      num_zoom,
      heading,
      tilt,
      num_rotate
    ) {
      //disminuye el zoom al inicio
      zoom1(3);
  
      //se cambia el centro del mapa tomando el punto del nuevo marcador
      map1.setCenter(position);
  
      //rota el mapa segun el parametro
      setTimeout(() => {
        rotate1(num_rotate);
      }, 100);
  
      //convierte empresas en un array
      empresas = Object.values(empresas);
  
      //si hay marcadores antes se cierran y se vacía el array markers
      if (markers1.length > 0) {
        for (let i = 0; i < markers1.length; i++) {
          cerrar_marcador1(markers1[i]);
        }
  
        markers1 = [];
        markerClustere.setMap(null);
      }
  
      //se recorren todas las empresas
      for (let i = 0; i < empresas.length; i++) {
        //se crea el html del mensaje que se muestra al dar click en el marcador
        const contentString1 = 
          '<div class="container-fluid p-0" id="content">' +
          '<div id="siteNotice" >' +
          "</div>" +
          '<div class=" justify-content-center"><h5 id="firstHeading" class="firstHeading text-center col-12">' +
          empresas[i].nombre +
          "</h5></div>" +  
          '<div class="container-fluid p-0">'+
          '<div class="d-flex flex-column align-items-center">'+
          '<img class="col-12" src="'+ empresas[i].bandera +'" style="width: 23%">'+
          '<p class="text-center pt-2"><b>'+ empresas[i].direccion +'</b></p>'+
          '</div></div> '+
          '<div class="container-fluid p-0" id="bodyContent">' +
          "<div class=' justify-content-center'>"+
          
          '<a href="https://nyfdecolombia.com/contacto.html" class="col-12 btn btn-primary text-center btn-mapa" >Contáctanos Ahora</a></div>' +
          "</div>" +
          "</div>" ;
  
        /* se crea la instancia de la ventana para el mensaje */
        var info1 = new google.maps.InfoWindow({
          content: contentString1,
          maxWidth: 300,
          width: 300
        });
  
        //llama funcion que crea el marcador y la info al dar click en marcador
        instancia_marcador1(empresas[i].title, empresas[i].position, info1);
      }
      markerClustere = new markerClusterer.MarkerClusterer({ map:map1, markers:markers1 });
  
      // se hace el zoom final segun el parametro del marcador
      setTimeout(() => {
        zoom1(num_zoom);
      }, 250);
  
      
    }
    const tourStops1 = [
      {
        /* Colombia */
        position: { lat: 7.06018159358857, lng: -73.95078678799158 },
        num_zoom: 4,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "Barranquilla",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/COLOMBIA.png",
            direccion: "Barranquilla Carrera 70 No. 75 - 78",
            empresa: "Synertech",
            pagina: "https://www.synertech.com.co/",
            url: "Barranquilla Carrera 70 No. 75 - 78",
            telefono: "+573013179017",
            position: { lat: 11.010136879062534, lng: -74.79608068072052 },
          },
          empresa2: {
            title: "Cali",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/COLOMBIA.png",
            direccion: "Cali Carrera 100 # 5-169. CC Unicentro Torre B Pasoancho - Piso 6",
            empresa: "EKOA INGENIERIA SAS",
            pagina: "https://ekoaingenieria.com",
            url: "Carrera 100 # 5-169. CC Unicentro Torre B Pasoancho - Piso 6",
            telefono: "+573013179017",
            position: { lat: 3.4025269097843394, lng: -76.53656634870448 }, 
          },
          empresa3: {
            title: "Pereira",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/COLOMBIA.png",
            direccion: "Pereira / Risaralda Manzana 4 Casa 15 Jardín – Etapa 2",
            empresa: "ESSAM",
            nombre: "CARLOS SABAS RAMIREZ",
            pagina: "https://especialistasambientales.co/",
            url: "Manzana 4 Casa 15 Jardín – Etapa 2 Pereira / Risaralda",
            telefono: "+573013179017",
            position: { lat: 4.801813745387454, lng: -75.72389471909027 },
          },
          empresa4: {
            title: "Bogotá",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/COLOMBIA.png",
            direccion: "Bogotá CR 70 D NO. 64 G 31",
            empresa: "ESPAVICONCRETOS SAS SAM",
            nombre:"DILAN CORONADO",
            pagina: "#",
            url: "CR 70 D NO. 64 G 31",
            telefono: "+573013179017",
            position: { lat: 4.676827923755543, lng: -74.09859247857645},  
          },
          empresa5: {
            title: "Bucaramanga",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/COLOMBIA.png",
            direccion: "Bucaramanga CALLE 23 # 9-65",
            empresa: "SQAINGENIERIA",
            nombre: "ANDRES BUSTAMANTE",
            pagina: "#",
            url: "CALLE 23 # 9-65",
            telefono: "+573013179017",
            position: { lat: 7.1244168217351636, lng: -73.133278373833},
          },
          empresa6: {
            title: "Tolima",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/COLOMBIA.png",
            direccion: "Ibagué Tolima. CL 18 4 - 67 BRR EL CARMEN",
            empresa: "INERGAS ESP",
            nombre: "Mauricio Medina",
            pagina: "https://www.facebook.com/p/Inergas-sas-esp-100084824073108/",
            url: "CL 18 4 - 67 BRR EL CARMEN, Ibagué Tolima. ",
            telefono: "+573013179017",
            position: { lat: 4.442167598853088, lng: -75.2346310880017}, 
          },
        },
      },
      {
        /* Chile */
        position: { lat: -26.550085762696817, lng: -70.32778273784264 },
        num_zoom: 5,
        rotate: 90,
        empresas: {
          empresa1: {
            title: "Hidrosolution SPA",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/CHILE.png",
            direccion: "Iquique, Chile. Tarapacá 589. Edificio Beper",
            empresa: "Hidrosolution SPA",
            nombre: "Gonzalo Vera",
            pagina: "https://www.hydrosolution.cl/",
            url: "Tarapacá 589. Edificio Beper, Iquique, Chile. ",
            telefono: "+573013179017",
            position: { lat: -20.21397880976446, lng: -70.14945160980706 },
          },
          /* empresa2:{
                                   title: "Hidrosolution SPA",
                                   empresa: "Hidrosolution SPA",
                                   pagina: "https://www.hydrosolution.cl/",
                                   url: "www.hydrosolution.cl",
                                   telefono: "+56 9 4434 7465",
                                   position: {lat: -33.41588383314638, lng: -70.59907045766975} 
                                } */
        },
      },
      {
        /* Panama */
        position: { lat: 8.522218074807634, lng: -80.04617909678211 },
        num_zoom: 7.1,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "Aqua Global",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/PANAMA.png",
            direccion: "Via España Edif Dominó ofic. #3",
            empresa: "Aqua Global",
            nombre: "Leo Watemberg",
            pagina: "https://www.aquagreenlatam.com",
            url: "Via España Edif Dominó ofic. #3",
            telefono: "+573013179017",
            position: { lat: 8.957619455879387, lng: -79.54064544694114 },
          },
        },
      },
      {
        /* Mexico */
        position: { lat: 23.837256216772275, lng: -102.49183667257056 },
        num_zoom: 4.5,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "Comsyp SAS",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/MEXICO.png",
            direccion: "Saltillo, Coahuila Calle Villa Magna N 133 Fraccionamiento Real de Villas de la Aurora, CP 25296.",
            empresa: "Comsyp SAS",
            nombre: "Ing. Carlos Serrano",
            pagina: "https://comsyp.com/",
            url: "Calle Villa Magna N 133 Fraccionamiento Real de Villas de la Aurora, CP 25296. Saltillo, Coahuila, México. ",
            telefono: "+573013179017",
            position: { lat: 25.41618986060173, lng: -100.95144040244323 },
          },
          empresa2: {
            title: "Green City Business México",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/MEXICO.png",
            direccion: "Topógrafos de Echeveste No. 322, colonia, Hacienda Echeveste, CP 37100",
            empresa: "Green City Business México",
            nombre: "JULIO LOVIO",
            pagina: "https://www.greencitybusiness.com.mx",
            url: "Topógrafos de Echeveste No. 322, colonia, Hacienda Echeveste, CP 37100,",
            telefono: "+573013179017",
            position: { lat: 21.171041767266008, lng: -101.70381325477813 }, 
          },
          empresa3: {
            title: "MARVIRJIM",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/MEXICO.png",
            direccion: "Estado de México Prolongación 16 de septiembre número 5 Barrio Santiaguito",
            empresa: "MARVIRJIM",
            nombre: "David Maldonado",
            pagina: "https://marvirjim.com/",
            url: "Prolongación 16 de septiembre número 5 Barrio Santiaguito, Tultitlán Estado de México, Código Postal 54900",
            telefono: "+573013179017",
            position: { lat: 19.653358286796053, lng: -99.16846894519425},   
          },
        },
      },
      {
        /* guatemala */
        position: { lat: 15.83758268714898, lng: -90.01026131849049 },
        num_zoom: 7,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "Guater Control S.A",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/GUATEMALO.png",
            direccion: "FRAIJANES - KM 21.5 CARRETERA A EL SALVADOR, LOMAS DE SAN NICOLAS, 3-60, ZONA 0",
            empresa: "Guater Control S.A",
            nombre: "Daniel Conrado",
            pagina: "https://www.facebook.com/profile.php?id=100091265314500",
            url: "KM 21.5 CARRETERA A EL SALVADOR, LOMAS DE SAN NICOLAS, 3-60, ZONA 0, FRAIJANES, GUATEMALA",
            telefono: "+573013179017",
            position: { lat: 14.521302863770124, lng: -90.47047000980571 },
          },
          empresa2: {
            title: "GLOBAL INGENIERÍA INTERNACIONAL",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/GUATEMALO.png",
            direccion: "Comercial 26 Avenida 26-43 Zona 12",
            empresa: "GLOBAL INGENIERÍA INTERNACIONAL",
            nombre: "Alvaro Anaya",
            pagina: "#",
            url: "Comercial 26 Avenida 26-43 Zona 12, Santa Eliza industrial Guatemala, guatemala ",
            telefono: "+573013179017",
            position: { lat: 14.622148803952205, lng: -90.54384433626473 },
          }
        },
      },
      {
        /* honduras */
        position: { lat: 14.334508268323437, lng: -86.74314548048899 },
        num_zoom: 7.1,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "Hcc Company",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/HONDURAS.png",
            direccion: "choluteca - col. venecia, 2da. Entrada, 3 calles al sur, 1/2 calle al este",
            empresa: "Hcc Company",
            nombre: "David Zepeda",
            pagina: "#",
            url: "col. venecia, 2da. Entrada, 3 calles al sur, 1/2 calle al este, choluteca, honduras.",
            telefono: "+573013179017",
            position: { lat: 13.306397241928792, lng: -87.19514412051674 },
          },
          empresa2: {
            title: "Inhisa SAS",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/HONDURAS.png",
            direccion: "San Pedro Sula - Barrio Guamilito 7 y 8 Ave. 3 y 4 calle N.O.",
            empresa: "Inhisa SAS",
            nombre: "Jacobo Mejía",
            pagina: "#",
            url: "Barrio Guamilito 7 y 8 Ave. 3 y 4 calle N.O. San Pedro Sula Honduras C.A. antiguo local de HEDMAN Allas.",
            telefono: "+573013179017",
            position: { lat: 15.511901181725074, lng: -88.02778985532873}, 
          },
        },
      },
      {
        /* peru */
        position: { lat: -10.467570912075779, lng: -75.1947761203063 },
        num_zoom: 6,
        rotate: 60,
        title: "Hidalgo",
        empresa: "Synertech Mx",
        empresas: {
          /* empresa1: {
            title: "RWL Water SAC",
            empresa: "RWL Water SAC",
            pagina: "http://rwlwater.com.pe/",
            url: "rwlwater.com.pe",
            telefono: "+511 203 3820 +511 979 223 977 - Ericka Sanchez",
            position: { lat: -12.080858217223483, lng: -76.96881965841563 },
          }, */
        },
      },
      {
        /* ecuador */
        position: { lat: -1.4596655955535303, lng: -78.64512618577692 },
        num_zoom: 6.2,
        rotate: 90,
  
        empresas: {
          empresa1: {
            title: "Wascorp S.A",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/ECUADOR.png",
            direccion: "Panamericana Sur Km 4 1/2 Cutuglagua, Barrio Santa Isabel Calle B",
            empresa: "Wascorp S.A",
            nombre: "Diana Pasaca",
            pagina: "https://wascorpsa.com/",
            url: "Panamericana Sur Km 4 1/2 Cutuglagua, Barrio Santa Isabel Calle B",
            telefono: "+573013179017",
            position: { lat: -0.38572891290994593, lng: -78.53726908466051 },
          },
        },
      },
      {
        /* estados unidos */
        position: { lat: 38.910740775487845, lng: -90.99482032582693 },
        num_zoom: 3.2,
        rotate: 20,
        title: "Hidalgo",
        empresa: "Synertech Mx",
        empresas: {
          empresa1: {
            title: "Tampa",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/USA.png",
            direccion: "Tampa - Florida: 14225 Damselfly Dr.",
            empresa: "Synertech Us",
            nombre: "Mauricio Massard",
            pagina: "https://www.synertech.us/",
            url: "Tampa - Florida: 14225 Damselfly Dr.",
            telefono: "+573013179017",
            position: { lat: 27.954360871043097, lng: -82.45910077032737 },
          },
        },
      },
      {
        /* brasil */
        position: { lat: -8.066993187928086, lng: -51.3011659922794 },
        num_zoom: 4.2,
        rotate: 80,
        title: "Brasil",
        empresa: "Synertech Mx",
        empresas: {},
      },
      {
        /* republica dominicana */
        position: { lat: 18.95026651845185, lng: -70.47624754927247 },
        num_zoom: 7,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "TECCA CARIBE",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/REPUBLICA DOMINICANA.png",
            direccion: "Santo Domingo - Avenida Bolívar 911 Oficina 301",
            empresa: "TECCA CARIBE",
            nombre: "Nelson Mena",
            pagina: "https://teccacaribe.com",
            url: "Avenida Bolívar 911 Oficina 301 - Santo Domingo",
            telefono: "+573013179017",
            position: { lat: 18.46475234369305, lng: -69.92288313572533 },
          },
          empresa2: {
            title: "SANIFA S.R.L",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/REPUBLICA DOMINICANA.png",
            direccion: "PROLONGACION GARCIAGODOY,PRINCIAL CARRERA DUARTE VIEJA LA VEGA 41000",
            empresa: "SANIFA S.R.L",
            nombre: "Rhandy Saldivar",
            pagina: "https://synertech.com.co",
            url: "PROLONGACION GARCIAGODOY,PRINCIAL CARRERA DUARTE VIEJA LA VEGA 41000",
            telefono: "+573013179017",
            position: { lat: 19.202393756546137, lng: -70.50262837498572 },
          },
          empresa3: {
            title: "Edificio Corporativo NC, Piso 12",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/REPUBLICA DOMINICANA.png",
            direccion: "Marginal nuñez de caceres N 366 edificio corporativo nc piso 12 el millon",
            empresa: "ICA",
            nombre: "SOBEIDA PERDOMO",
            pagina: "https://www.ica.com.do",
            url: "Marginal nuñez de caceres N 366 edificio corporativo nc piso 12 el millon",
            telefono: "+573013179017",
            position: { lat: 18.461602291871053, lng: -69.95817209386526},
          },
        },
      },
      {
        /* bolivia */
        position: { lat: -16.365397713616286, lng: -64.64519336605726 },
        num_zoom: 5,
        rotate: 0,
        empresas: {
          empresa1: {
            title: "COCHABAMBA",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/BOLIVIA.jpg",
            direccion: "Zona COÑA COÑA, calle MARTIN CARDENAS Nro. SN",
            empresa: "AFR ENERGIA",
            nombre: "Luis Fernando Gutierrez",
            pagina: "http://www.afr-energia.com.bo",
            url: "Zona COÑA COÑA, calle MARTIN CARDENAS Nro. SN, Referencias: ANTES DE LLEGAR A LA PROLONGACIÓN DORBIGNY",
            telefono: "+573013179017",
            position: { lat: -17.41599351166688, lng: -66.16130648051184 },
          },
          empresa2: {
            title: "Rolea Center 2 piso oficina 3D",
            direccion: "Santa Cruz Edificio Rolea Center 2 piso oficina 3D, Av Salvador - Equipetrol",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/BOLIVIA.jpg",
            empresa: "Sicolmex Bolivia",
            nombre: "Gisselle Kennedy",
            pagina: "https://sicolmex.com/",
            url: "Santa Cruz Edificio Rolea Center 2 piso oficina 3D, Av Salvador - Equipetrol",
            telefono: "+573013179017",
            position: { lat: -17.75723770334713, lng: -63.19860620207125 }, 
          },
        },
      },
      {
        /* El salvador */
        position: { lat: 13.778171124607773, lng: -88.90932639384894}, 
        num_zoom: 8,
        rotate: 10,
        empresas: {
          empresa1: {
            title: "El Salvador",
            bandera: "https://nyfdecolombia.com/aguas-residuales/images/banderas/SALVADOR.png",
            direccion: "",
            empresa: "GLOBAL INGENIERÍA INTERNACIONAL",
            nombre: "Alvaro Anaya",
            pagina: "#",
            url: "",
            telefono: "+573013179017",
            position: { lat: 13.693244646422425, lng: -89.22206268904107}, 
          },
        },
      },
    ];
    let abierto1;
    /* listar empresas iniciales */
    let empresas=[];
    for (let i = 0; i < tourStops1.length; i++) {
      let listEmpresas =  Object.values(tourStops1[i].empresas);
      for (let j = 0; j < listEmpresas.length; j++) {
        empresas.push(listEmpresas[j])
      }
    }
      let num_zoom = 2;
      let heading = 90;
      let tilt = 45;
      let rotate_var = 0;
      let ubicacion = {lat: 8.191593488953123, lng: -73.7505189276769};
    // Si hay un temporizador en ejecución, cáncelalo
    if (abierto1) {
      clearTimeout(abierto);
    }
    

    // Crea el marcador
    crear_marcador1(ubicacion, empresas, num_zoom, heading, tilt, rotate_var);
    /* fin listar empresas iniciales */
    $("#selectMap").on("change", function () {
      var id1 = $(this).val();
      // Si hay un temporizador en ejecución, cáncelalo
      if (abierto1) {
        clearTimeout(abierto1);
      }
      let ubicacion1 = tourStops1[id1].position;
      let empresas1 = tourStops1[id1].empresas;
      let num_zoom1 = tourStops1[id1].num_zoom;
      let heading1 = tourStops1[id1].heading;
      let tilt1 = tourStops1[id1].tilt;
      let rotate_var1 = tourStops1[id1].rotate;
  
        // Crea el marcador
        crear_marcador1(ubicacion1, empresas1, num_zoom1, heading1, tilt1, rotate_var1);
  
        // Configura un nuevo temporizador para cerrar el marcador después de 15 segundos
        /* abierto1 = setTimeout(() => {
          for (let i = 0; i < markers1.length; i++) {
            cerrar_marcador1(markers1[i]);
          }
          map1.setCenter({ lat: 24.058693020662364, lng: -102.77997499612468 });
          zoom1(3.8);
          markers1 = [];
          abierto1 = null; 
        }, 15000); */
      
    });
  }


  
  }