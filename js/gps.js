
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
  
  countdown('Dec 31 2019 18:17:40 GMT-0500');

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