'use strict';

$(document).ready(() => {
console.log('js linked')

const searchResults = $('#results-template').html();
const searchTemplate = Handlebars.compile(searchResults);


const searchSpotify = function(name, type){
  $.ajax({
    url: `https://api.spotify.com/v1/search?q=${name}&type=${type}`,
    type: 'GET',
    dataType: 'json'
  })
  .then((data) => {
    // console.log('hello');
    console.log(data);
    $('#search-results').html(searchTemplate(data));


  })
  .catch(err => console.log('error!'));
}

$('#user-input').on('keyup', (e) => {
  console.log('hello')
  let userInput = $('#user-input').val();
  let dropdownSelection = $('#search-mode').val();
  searchSpotify(userInput, dropdownSelection);
});

});
