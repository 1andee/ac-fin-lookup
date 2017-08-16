$(() => {

  var d = new Date()
  var currentMonth = d.getMonth();
  var currentHour = d.getHours();

  function timeCheck() {

    if (currentMonth >= 1 && currentMonth <= 2) {
      if (currentHour < 8 || currentHour >= 17) {
        document.documentElement.classList.add('night');
      };
    } else if (currentMonth >= 3 && currentMonth <= 4) {
      if (currentHour < 7 || currentHour >= 20) {
        document.documentElement.classList.add('night');
      };
    } else if (currentMonth >= 5 && currentMonth <= 8) {
      if (currentHour < 6 || currentHour >= 21) {
        document.documentElement.classList.add('night');
      };
    } else if (currentMonth >= 9 && currentMonth <= 11) {
      if (currentHour < 7 || currentHour >= 18) {
        document.documentElement.classList.add('night');
      };
    } else if (currentMonth >= 11) {
      if (currentHour < 8 || currentHour >= 17) {
        document.documentElement.classList.add('night');
      };
    } else {
      document.documentElement.classList.add('day');
    }
  };

  timeCheck();

});
