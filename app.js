$( document ).ready(function() {
  var input = $('.main-input');
  var gifsList = $('.gifs-list');
  var inputValue = '';
  var gifs = [];

  input.on('keyup', function(event) {
    inputValue = input.val();

    var url = 'http://api.giphy.com/v1/gifs/search?q=' + inputValue + '&api_key=dc6zaTOxFJmzC';

    if (event.keyCode === 13) {
      gifsList.html('')
      $.get(url).then(function(response) {
          response.data.forEach(function(item) {
            gifs.push(
                {
                  html: '<li style="display: block;float:left">' +
                  '<video class="video" autoplay loop>' +
                  '<source src="' + item.images.preview.mp4 +
                  '" type="video/mp4">' + '</video>' + '<div class="buttons">' +
                  '<input class="button" type="submit" value="Add point">' +
                  '<input class="button" type="submit" value="Subtract point">'
                  + '</div>' + '</li>',
                  counter: 0,
              });
          });
          gifs.forEach(function(itemObject) {
            gifsList.append(itemObject.html)
          });
        }, function(error) {
          console.log(error);
        }
      );
    }
  });
});