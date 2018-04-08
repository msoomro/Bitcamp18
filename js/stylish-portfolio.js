(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

$("#startbtn").click(function (event) 
{
  event.preventDefault();
    $("#timerscreen").show();
    $("#startscreen").hide();
    var timeleft = 4;

    function f()
    {
      timeleft--;
      console.log(timeleft);
      $("#countdowntimer").html(timeleft);
      setTimeout(function(){
       if(timeleft > 1)
       { 
        f();
       }
       else if(timeleft == 1)
       {
        $("#countdowntimer").hide();
        $("#cat").show();
        //window.location.replace("webcam.html");

          // cp-ed from testing123.html
          /*(function() {
          'use strict';
          var video = document.querySelector('video')
            , canvas;
          
          //  generates a still frame image from the stream in the <video>
          //  appends the image to the <body>
           
          function takeSnapshot() {
            var img = document.querySelector('img') || document.createElement('img');
            var context;
            var width = video.offsetWidth
              , height = video.offsetHeight;
            canvas = canvas || document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, width, height);
            img.src = canvas.toDataURL('image/png');
            document.body.appendChild(img);
          }
          // use MediaDevices API
          // docs: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
          if (navigator.mediaDevices) {
            // access the web cam
            navigator.mediaDevices.getUserMedia({video: true})
            // permission granted:
              .then(function(stream) {
                video.src = window.URL.createObjectURL(stream);
                video.addEventListener('click', takeSnapshot);
              })
              // permission denied:
              .catch(function(error) {
                document.body.textContent = 'Could not access the camera. Error: ' + error.name;
              });
          }
        })();*/
       }
      },1000);
    }

    f();
});

})(jQuery); // End of use strict

// JS for random song generation
var numberOfSongs = 3;
var sound = new Array(numberOfSongs)
sound[0]= "music/ChibiNinja.mp3";
sound[1]= "music/Arpanauts.mp3";
sound[2]= "music/AllofUs.mp3";
function randomNumber()
{
  var randomLooper = -1
  while (randomLooper < 0 || randomLooper > numberOfSongs || isNaN(randomLooper))
  { 
    randomLooper = parseInt(Math.random()*(numberOfSongs));
  }
  return randomLooper;
}
var randomAudio=$("#random3");
$("#random3").attr("src", sound[randomNumber()]);
randomAudio[0].play();

var randomsub = randomNumber()

var soundFile = sound[randomsub]
document.write ('<EMBED src= "' + soundFile + '" hidden=true autostart=true loop=true>');

// JS for webcam display
var video = document.querySelector("#videoElement");
 
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
if (navigator.getUserMedia) {       
    navigator.getUserMedia({video: true}, handleVideo, videoError);
}
 
function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
}
 
function videoError(e) {
    // ah an error, do something
}

