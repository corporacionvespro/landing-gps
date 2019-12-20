
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
  
  const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
      animacion('seg', '60', t.remainSeconds);
      animacion('min', '60', t.remainMinutes);
      animacion('hora', '24', t.remainHours);
      animacion('dia', '60', t.remainDays);

    }, 1000)
  };
  
  countdown('Dec 20 2019 21:34:40 GMT-0500', 'palo', '¡Ya empezó!');

  // new CircleProgress('.dia', {
  //   max: 100,
  //   value: 60,
  //   textFormat: 'percent',
  // });
  // new CircleProgress('.dia', {
  //   max: 60,
  //   value: 38, // color pintado
  //   textFormat: function(value, max) {
  //     return value + ' '; //texto que muestra
  //   },
  //   animationDuration:5000, //tiempo de la animacion
  // });


  const animacion= (elem, max, value)=>{
    var el = document.getElementById(elem);
    // console.log(el);
    // console.log($('#hora'));
    // console.log($(el));
    
    
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

// animacion('hora', '24', '12');
// animacion('min', '60', '15');
// animacion('seg', '60', '45');
  
  // new CircleProgress('.hora', {
  //   max: 100,
  //   value: 60,
  //   textFormat: 'percent',
  // });
  // new CircleProgress('.min', {
  //   max: 100,
  //   value: 60,
  //   textFormat: 'percent',
  // });
  // new CircleProgress('.seg', {
  //   max: 100,
  //   value: 60,
  //   textFormat: 'percent',
  // });


  // var bar = new ProgressBar.Circle(seg, {
  //   color: '#b01f16',  //texto
  //   strokeWidth: 4,
  //   trailWidth: 10, //ancho fondo
  //   trailColor: 'rgba(176, 31, 22, 0.2)', // color fondo 
  //   easing: 'easeInOut',
  //   duration: 60000,
  //   text: {
  //     autoStyleContainer: false //anulas lo que tiene por defecto positio relative
  //   },
  //   from: { color: '#b01f16', width: 5 }, // circle animation inicio
  //   to: { color: '#b01f16', width: 8 },   // circle animation fin
  //   // Set default step function for all animate calls
  //   step: function(state, circle) {
  //     circle.path.setAttribute('stroke', state.color);
  //     circle.path.setAttribute('stroke-width', state.width);
  //     // console.log(circle.value());
      
  //     var value = Math.round(circle.value() * 60);
  //     if (value === 0) {
  //       circle.setText('');
  //     } else {
  //       circle.setText(value);
  //     }
  
  //   }
  // });
  // // bar.text.style.fontFamily = 'Montserrat-regular';
  // bar.text.style.fontSize = '2rem';
  
  // bar.animate(1.0);




  // var bar = new ProgressBar.Circle(min, {
  //   color: '#aaa',
  //   strokeWidth: 4,
  //   trailWidth: 1,
  //   easing: 'easeInOut',
  //   duration: 60*1000,
  //   text: {
  //     autoStyleContainer: false
  //   },
  //   from: { color: '#aaa', width: 1 },
  //   to: { color: '#333', width: 4 },
  //   // Set default step function for all animate calls
  //   step: function(state, circle) {
  //     circle.path.setAttribute('stroke', state.color);
  //     circle.path.setAttribute('stroke-width', state.width);
  
  //     var value = Math.round(circle.value() * 60);
  //     if (value === 0) {
  //       circle.setText('');
  //     } else {
  //       circle.setText(value);
  //     }
  
  //   }
  // });
  // bar.text.style.fontFamily = 'Montserrat-regular';
  // bar.text.style.fontSize = '2rem';
  
  // bar.animate(1.0);
  // var bar = new ProgressBar.Circle(hora, {
  //   color: '#aaa',
  //   strokeWidth: 4,
  //   trailWidth: 1,
  //   easing: 'easeInOut',
  //   duration: 60*60*1000,
  //   text: {
  //     autoStyleContainer: false
  //   },
  //   from: { color: '#aaa', width: 1 },
  //   to: { color: '#333', width: 4 },
  //   // Set default step function for all animate calls
  //   step: function(state, circle) {
  //     circle.path.setAttribute('stroke', state.color);
  //     circle.path.setAttribute('stroke-width', state.width);
  
  //     var value = Math.round(circle.value() * 100);
  //     if (value === 0) {
  //       circle.setText('');
  //     } else {
  //       circle.setText(value);
  //     }
  
  //   }
  // });
  // bar.text.style.fontFamily = 'Montserrat-regular';
  // bar.text.style.fontSize = '2rem';
  
  // bar.animate(1.0);
  // var bar = new ProgressBar.Circle(dia, {
  //   color: '#aaa',
  //   strokeWidth: 4,
  //   trailWidth: 1,
  //   easing: 'easeInOut',
  //   duration: 24*60*60*1000,
  //   text: {
  //     autoStyleContainer: false
  //   },
  //   from: { color: '#aaa', width: 1 },
  //   to: { color: '#333', width: 4 },
  //   // Set default step function for all animate calls
  //   step: function(state, circle) {
  //     circle.path.setAttribute('stroke', state.color);
  //     circle.path.setAttribute('stroke-width', state.width);
  
  //     var value = Math.round(circle.value() * 100);
  //     if (value === 0) {
  //       circle.setText('');
  //     } else {
  //       circle.setText(value);
  //     }
  
  //   }
  // });
  // bar.text.style.fontFamily = 'Montserrat-regular';
  // bar.text.style.fontSize = '2rem';
  
  // bar.animate(1.0);