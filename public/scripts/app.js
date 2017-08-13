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

        let count = `<h5>Found ${response.length} matching aircraft</h5>`
        $('.search_results').append(count);

        let tableHead = `
        <table id="results-table" class="u-full-width">
          <thead>
          <tr>
            <th>Fin</th>
            <th>Registration</th>
            <th>Type</th>
            <th>Operator</th>
          </tr>
          </thead>`

        $('.search_results').append(tableHead);

        response.forEach((element) => {

          if (element.operator === 'Air Canada') {
            var logo = `<img src="favicon.ico" height="15px" title="Air Canada (Mainline)"/>`
          } else if (element.operator === 'Rouge'){
            var logo = `<img src="images/rouge.png" height="15px" title="Rouge"/>`
          };

          $('#results-table').append(`
            <tr>
              <td>${element.id}</td>
              <td>${element.reg}</td>
              <td>${element.specific_type}</td>
              <td>${logo}</td>
            </tr>`)
        });

        let tableEnd =
        `</tbody>
        </table>`

        $('.results-table').append(tableEnd);
      });
    };
  });
});
