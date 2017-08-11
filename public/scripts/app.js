$(() => {

  $( "#search_bar .button" ).click(function() {

    preventDefault();

    $('.search_results').empty();

    $.ajax({
      url: '/',
      type: 'POST',
      success: ((result) => {
        for (i in result ) {
           $('.search_results').append(`<div>${i}</div>`);
        };
      });
    });
  });
});
