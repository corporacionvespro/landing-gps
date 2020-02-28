
const getRemainingTime = deadline => {
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  const countdown = (deadline) => {
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      // el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        $('#promocion').css('display','none')
        // el.innerHTML = finalMessage;
      }else{
        animacion('seg', '60', t.remainSeconds);
        animacion('min', '60', t.remainMinutes);
        animacion('hora', '8', t.remainHours);
        animacion('dia', '0', t.remainDays);
      }

    }, 1000)
  };
  
// countdown('Jan 04 2020 13:30:00 GMT-0500');
  // countdown(fecha);

  const animacion= (elem, max, value)=>{
    var el = document.getElementById(elem);
    
    $(el).circleProgress(
      { 
        max: max,
        value:value, // color pintado
        textFormat: function(value, max) {
          return value + ' '; //texto que muestra
        },
        animationDuration:500, //tiempo de la animacion
      }
    );
  }

  $(document).ready(function() {
      var require=[
          {
              name: "nombres",
              validation: [
                  ["required","Nombre necesario"],
                  ["max","100", "Nombre no debe ser mayor a 100 carácteres "],
              ]
          },
          {
              name: "whatsapp",
              validation: [
                  ["required","whatsapp necesario"],
                  ["max","12", "whatsapp no debe ser mayor a 12 números "],
              ]
          },
          {
              name: "email",
              validation: [
                  ["required","Mail necesario"],
                  ["email","Ingresar un E-mail valido"],
                  ["max","100", "Nombre no debe ser mayor a 100 carácteres "],
              ]
          },
      ];
      function validation_form() {
          var v_continue=true;
          $('.form-group').removeClass('error');
          $('.form-group span').remove();
          for (let i = 0; i < require.length; i++) {
              const data = require[i];
              for (let j = 0; j < data.validation.length; j++) {
                  const validation = data.validation[j];
                  var error=false;
                  switch (validation[0]) {
                      case "required":
                          
                          if ($('[name='+data.name+']').val().trim()==="") {
                              $('[name='+data.name+']').parent().addClass('error').append('<span>'+validation[1]+'</span>');                        
                              error=true;
                          }
                          break;
                      case "email":
                          if (($('[name='+data.name+']').val()).search('@')==-1) {
                              $('[name='+data.name+']').parent().addClass('error').append('<span>'+validation[1]+'</span>');                        
                              error=true;
                          }
                          break;
                      case 'max':
                          if (($('[name='+data.name+']').val()).length>validation[1]) {
                              $('[name='+data.name+']').parent().addClass('error').append('<span>'+validation[2]+'</span>');                        
                              error=true;
                          }
                          break;
                  }
                  if (error) {
                      v_continue=false;
                      break;
                  };
              }
              
          }
          return v_continue;
      }

      $('#frm-contacto').submit(function(e) {
          e.preventDefault();
          if (validation_form()) {
              $('#contacto').LoadingOverlay('show',
                  {
                      image       : "http://gps.vespro.ml/img/icon.png",
                      imageAnimation: "2000ms fadein",
                  }
              );

              $.ajax({
                  type: 'POST',
                  url: $(this).attr('action'),
                  data: $(this).serialize(),
                  success: function(data) {
                      var respuesta=data;
                      $('#contacto').LoadingOverlay('hide');
                      // var respuesta = JSON.parse(data);
                      if (respuesta.status == "OK"){
                          $('#frm-contacto')[0].reset();
                          $('#modal-contacto').modal('show');
                      }else{
                          $('#modal-error').modal('show');
                          $('#error').text(respuesta.data);
                      }

                  }
              }) 
          }
      })     
      
      $("body").on("click", "#btn-promocion", function(){
          $('#codigo-promocion').val('gps-vespro');
      })

      $.ajax({
        url:'mostrar_data.php',
        success:function(data){
         var fecha =new Date(("29-02-2020"));
                 
          var anio = fecha.getFullYear();
          $('.descuento').text(data[0].descuento+'%'); 
          $('.header-promocion').text('Promoción '+data[0].mes+ ' ' +anio ); 
          $('.mes').text(data[0].mes);   
          
          countdown(fecha);
        }
      })
  });

     