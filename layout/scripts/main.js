(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
            $('.nav-bar-shape').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
            $('.nav-bar-shape').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Progress bar
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    // Back to top button
    
    /*$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.wsp').fadeIn('slow');
        } else {
            $('.wsp').fadeOut('slow');
        }
    });*/

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 0, 'easeInOutExpo');
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.catalogo').fadeIn('slow');
        } else {
            $('.catalogo').fadeOut('slow');
        }
    });

    // Experiencias
    /* $(window).scroll(function () {
        if ($(this).scrollTop() >= 0) {
            $('.container-bar').fadeIn('fast');
        } else {
            $('.container-bar').fadeOut('fast');
        }
    });   */  
    $('.container-bar').scroll(function () {
        $('html, body').animate({scrollTop: 0}, 0, 'easeInOutExpo');
        return false;
    });

    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 35,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Related post carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);


                  var coll = document.getElementsByClassName("collapsible");
                  var i;

                  for (i = 0; i < coll.length; i++) {
                    coll[i].addEventListener("click", function() {
                      this.classList.toggle("desplazamiento");
                      var content = this.nextElementSibling;
                      if (content.style.maxHeight){
                        content.style.maxHeight = null;
                      } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                      } 
                    });
                  }
      


$("#btnExp").on('click', function(){
    $("#experienciasList").show();
  });

/* const videos = document.querySelectorAll('.videoExp');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
}); */

// @media query para video de esxperiencias

/* function myFunction(x) {
    if (x.matches) { 
        console.log(1);
        $("#video1")[0].play();
        $("#video2")[0].play();
        $("#video1")[0].autoplay=true;
        $("#video2")[0].autoplay=true;
    } else {
        $("#video1")[0].pause();
        $("#video2")[0].pause();
        $("#video1")[0].autoplay=false();
        $("#video2")[0].autoplay=false();
        
        
    }
  }
  

  var x = window.matchMedia("(max-width: 1024px)")
  

  myFunction(x);
  

  x.addEventListener("change", function() {
    myFunction(x);
  });
 */


/* cerrar lista de paises al dar click */
$('.select-wrapper ul li').on('click', function() {
    $(".select-wrapper").toggleClass("activo");
    $(".overlay").addClass("ocultar");
    
});

$(".dropdown-container").click(function(){
    $(".select-wrapper").toggleClass("activo");
    $(".overlay").removeClass("ocultar");
})


// Si el usuario hace clic fuera de la ventana, se cierra.
const overlay = document.querySelector(".overlay");
overlay.addEventListener("click",function(event) {
    $(".overlay").addClass("ocultar");
    $(".select-wrapper").removeClass("activo");
});

//validar campo telefono 
$(document).ready(function() {
    $("#phone").keyup(function(){
        var phone = $(this).val();

        if($.isNumeric(phone)){
            $(".invalid-msg").css({"visibility":"hidden"})
        }else{
            $(".invalid-msg").css({"visibility":"visible"})
        }
    });

    
})

$('#menu_numero input').on('change', function() {
    if ($('input[name="flag"]').is(':checked')) {
        $(".dropdown-container").css("border","")
        $(".dropdown-container").html("");
    }
 });

//fin validar telefono






/* boton de descarga PDF */

$("#btn_pdf").click(function(){
    var sUrl = window.location;
    sUrl = sUrl.toString();
    let productoID = $("#btn_pdf").data("producto");
    $.ajax({
        url:"https://www.synertech.mx/php.nyf/click_pdf.php",
        type:"POST",
        data:{
            sUrl:sUrl,
            producto:productoID
        }
    });
});
/* fin boton PDF */


$("#nav-horizontal .nav-link").click(function() {
    $("#nav-horizontal .nav-link").removeClass("active");
    $(this).addClass("active");
});