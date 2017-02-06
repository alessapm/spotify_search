'use strict';

$(document).ready(() => {
  console.log('js linked!');

  const searchResults = $('#results-template').html();
  const resultsTemplate = Handlebars.compile(searchResults);

  const details = $('#more-info').html();
  const overlayTemplate = Handlebars.compile(details);



  //console.log(searchResults);

  const searchSpotify = function(name,type) {
    let dropdownSelection = $('#search-mode').val();
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

  const getMoreInfo = function(id){
    let userInput = $('#user-input').val();
    let buttonID = $(id).attr('id');

    $.ajax({
      url: `https://api.spotify.com/v1/artists/${buttonID}`,
      type: 'GET',
      dataType: 'json'
    })
    .then((data) =>{
      console.log(data);
      $('#details-overlay').html(overlayTemplate(data));
    })
  }


// EVENT LISTENERS:
  $('#user-input').on('keyup', (e) => {

    let dropdownSelection = $('#search-mode').val();
    let userInput = $('#user-input').val();

    var newSearch = _.debounce(searchSpotify.bind(null, $(e.target).val(), dropdownSelection), 500)();
  });

  $('#search-results').on('click', '.more-info', (e) => {
    let buttonID = $(e.target);
    getMoreInfo($(e.target).data(buttonID))
    $('#details-overlay').css('visibility', 'visible');
  })

  $('#details-overlay').on('click', (e) => {
    $('#details-overlay').css('visibility', 'hidden');

  });

 });


//data.artists.items.name
