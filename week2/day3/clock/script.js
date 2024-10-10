function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
  setInterval( function() {
      var time = getSecondsSinceStartOfDay();
      console.log(time);
      document.getElementById("seconds").style.transform = "rotate("+(time)+"deg)";
  }, 1000);
  