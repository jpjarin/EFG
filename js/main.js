(function() {

    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            // console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
        };
    }

})();

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
            var vh = window.innerHeight * 0.01;
            // Then we set the value in the --vh custom property to the root of the document
            document.documentElement.style.setProperty('--vh', '${vh}px');

            // We listen to the resize event
            window.addEventListener('resize', function() {
              // We execute the same script as before
              var vh = window.innerHeight * 0.01;
              document.documentElement.style.setProperty('--vh', '${vh}px');
            });

$(window).on('load',function() {      
      $('.intro-section').animate({ opacity: 1 }, 500);
      $('#nav').addClass('animated fadeInUp');
      }); 

$(document).ready(function(){
        $('a.nav-link').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
          // $('#navbar-menu').collapse('hide');
        });
        $('.menu a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
          $('#menu').toggleClass("menuClicked");   
         $(".fa").toggleClass("fa-bars fa-times");       
        });
                      
  $(".fa").click(function() {  
          $('#menu').toggleClass("menuClicked");   
         $(".fa").toggleClass("fa-bars fa-times");       
    });

  $(window).scroll('scroll', function() {
    var navHeight = $(window).height() - 10;
        if ($(window).scrollTop() > navHeight) {
            $('#menu').removeClass('hidden');
            $('#menu').addClass('rotateIn');
            
        } else {
            $('#menu').addClass('hidden');
            $('#menu').removeClass('menuClicked');
            if ($("#fa").hasClass("fa-times")) {
                $(".fa").toggleClass("fa-bars fa-times");
            }
            
        }

  });

  if (Modernizr.mq('screen and (min-width: 320px) and (max-width: 767px)')) {
    $(window).scroll('scroll', function() {
            if($(window).scrollTop() + $(window).height() == $(document).height()) {
               $('#menu').css({"top":"0"});
                }else{
                    $('#menu').css({"top":"auto"});
                }
    });
    }


// END OF DOC READY FUNCTION  
});
      

// $(window).scroll(function(){
//     $("#large-header").css("opacity", 1 - $(window).scrollTop() / 250);
//   });

