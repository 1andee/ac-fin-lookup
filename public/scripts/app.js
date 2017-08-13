$(() => {

  $("#search_bar .input-field").keypress((e) => {
    if(e.which == 13) {

      e.preventDefault();

      $('.search_results').empty();

      let data = {};
      data.title = "userSearch";
      data.query = $('.input-field').val();

      $.ajax({
        url: '/',
        method: 'POST',
        dataType: "json",
        data: data
      }).done((response) => {

        let count = response.length;
        let showCount = `<h5>Found ${count} matching aircraft</h5>`
        $('.search_results').append(showCount);

        let tableHead = `
        <table id="results-table" class="u-full-width">
          <thead>
          <tr>
            <th>Fin</th>
            <th>Registration</th>
            <th>Type</th>
            <th>Operator</th>
          </tr>
          </thead>
          <tbody>
          `

        $('.search_results').append(tableHead);

        createListElement(response, count);

        let tableEnd =
        `</tbody>
        </table>`

        $('.results-table').append(tableEnd);
      });



      createListElement = (response, count) => {

        var textToInsert = []
        var i = 0;

        for (var a = 0; a < count; a += 1) {
          if (response[a].operator === 'Air Canada') {
            var logo = `<img src="favicon.ico" height="15px" title="Air Canada (Mainline)" style="filter: invert(0%);" />`
          } else if (response[a].operator === 'Rouge'){
            var logo = `<img src="images/rouge.png" height="15px" title="Rouge" style="filter: invert(0%);" />`
          };

          textToInsert[i++] = `<tr><td>${response[a].id}</td><td>${response[a].reg}</td><td>${response[a].specific_type}</td><td>${logo}</td></tr>`
        };

        $('tbody').append(textToInsert);
      };

    };
  });
});
