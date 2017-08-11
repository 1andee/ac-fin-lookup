$(() => {

  $("#search_bar .input-field").keypress((e) => {
    if(e.which == 13) {

      e.preventDefault();

      $('.search_results').empty();

      let data = {};
      data.title = "userSearch";
      data.query = $('.input-field').val();
      console.log(data);

      $.ajax({
        url: '/',
        method: 'POST',
        dataType: "json",
        data: data
      }).done((response) => {

        let count = `<h5>Found ${response.length} matching aircraft</h5>`
        $('.search_results').append(count);

        response.forEach((element) => {
          console.log(element);
          let aircraft = createListElement(element);
          $('.search_results').append(aircraft);

        });

      });

    };
  });

  createListElement = (element) => {

    if (element.operator === 'Air Canada') {
      var logo = `<img src="favicon.ico" height="15px" title="Air Canada (Mainline)"/>`
    } else if (element.operator === 'Rouge'){
      var logo = `<img src="images/rouge.png" height="15px" title="Rouge"/>`
    };

    let row = `
    <div class="row">
      <div class="two columns">
        <p>
          Fin ${element.id}
        </p>
      </div>
      <div class="two columns">
        <p>
          ${element.reg}
        </p>
      </div>
      <div class="two columns">
        <p>
          ${element.specific_type}
        </p>
      </div>
      <div class="two columns">
        ${logo}
      </div>
    </div>
    `
    return row;
  };

});
