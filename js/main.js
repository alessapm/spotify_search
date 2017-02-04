'use strict';

$(document).ready(() => {
  console.log('js linked!');

  const searchResults = $('#results-template').html();
  const resultsTemplate = Handlebars.compile(searchResults);

  let dropdownSelection = $('#search-mode').val();

  //console.log(searchResults);

  const searchSpotify = function(name,type) {
    $.ajax({
      url: `https://api.spotify.com/v1/search?q=${name}&type=${dropdownSelection}`,
      type: 'GET',
      dataType: 'json'
    })
    .then((data) => {
      console.log(data);
      $('#search-results').html(resultsTemplate(data));
    })
    .catch(err => console.log('error!'));
  }

  $('#user-input').on('keyup', (e) => {

    let dropdownSelection = $('#search-mode').val();
    let userInput = $('#user-input').val();

    var newSearch = _.debounce(searchSpotify.bind(null, $(e.target).val(), dropdownSelection), 500)();
  });

});

//data.artists.items.name
