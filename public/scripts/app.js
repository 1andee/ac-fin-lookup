$(() => {

  $("#settings").on("click", () => {
    $("#opr_select").slideToggle();
  })

  $("#search_bar .input-field").keypress((e) => {
    if(e.which == 13) {

      e.preventDefault();

      $('.search_results').empty();

      let data = {};
      data.query = $('.input-field').val();
      data.operator = [];

      $("input:checked").each(function() {
        data.operator.push($(this).val());
      });

      $.ajax({
        url: '/',
        method: 'POST',
        dataType: "json",
        data: data
      }).done((response) => {

        let count = 0

        for (i in response) {
          count += response[i].length;
        };

        let showCount = `<h5>Found ${count} matching aircraft</h5>`
        $('.search_results').append(showCount);

        if (count > 0) {

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

        for (i in response) {
          createListElement(response[i], count);
        }

        let tableEnd =
        `</tbody>
        </table>`

        $('.results-table').append(tableEnd);
      }
      });

      createListElement = (response, count) => {

        var textToInsert = []

        for (i = 0; i < response.length; i++) {
          if (response[i].operator === 'Air Canada') {
            var logo = `<img src="favicon.ico" height="15px" title="Air Canada (Mainline)" />`
          } else if (response[i].operator === 'Rouge') {
            var logo = `<img src="images/rouge.png" height="15px" title="Rouge" />`
          } else if (response[i].operator === 'Jazz') {
            var logo = `<img src="images/jazz.png" height="15px" title="Jazz" />`
          } else if (response[i].operator === 'Sky Regional') {
            var logo = `<img src="images/skv.png" height="15px" title="Sky Regional" />`
          } else if (response[i].operator === 'Air Georgian') {
            var logo = `<img src="images/ggn.png" height="15px" title="Air Georgian" />`
          } else if (response[i].operator === 'EVAS') {
            var logo = `<img src="images/evas.png" height="15px" title="EVAS" />`
          } else if (response[i].operator === 'CMA') {
            var logo = `<img src="images/cma.png" width="125px" title="CMA" />`
          }

          textToInsert.push(`<tr><td>${response[i].fin}</td><td>${response[i].reg}</td><td>${response[i].specific_type}</td><td>${logo}</td></tr>`)
        };
        $('tbody').append(textToInsert);
      };

    };
  });
});
