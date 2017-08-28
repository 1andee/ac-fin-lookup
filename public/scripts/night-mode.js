$(() => {

  var d = new Date()
  var currentMonth = d.getMonth();
  var currentHour = d.getHours();

  function timeCheck() {

    if (currentMonth <= 1) {
      if (currentHour < 8 || currentHour >= 17) {
        document.documentElement.classList.add('night');
      };
    } else if (currentMonth >= 2 && currentMonth <= 3) {
      if (currentHour < 7 || currentHour >= 20) {
        document.documentElement.classList.add('night');
      };
    } else if (currentMonth >= 4 && currentMonth <= 7) {
      if (currentHour < 6 || currentHour >= 21) {
        document.documentElement.classList.add('night');
      };
    } else if (currentMonth >= 8 && currentMonth <= 10) {
      if (currentHour < 7 || currentHour >= 18) {
        document.documentElement.classList.add('night');
      };
    } else if (currentMonth >= 10) {
      if (currentHour < 8 || currentHour >= 17) {
        document.documentElement.classList.add('night');
      };
    } else {
      document.documentElement.classList.add('day');
    }
  };

  timeCheck();

});
