var body = '';
$(document).ready(function () {
  $('ul > li > a').click(function () {
    $('ul > li > a').removeClass('active');
    $(this).addClass('active');
  });
  $.each(myProject, function (i, value) {
    var slide = '';
    $.each(value.img, function (j, val) {
      var aktif = '';
      if (j == 0) aktif = 'active';
      slide += '\
            <div class="carousel-item ' + aktif + '">\
            <img src="img/' + val + '" class="d-block w-100" alt="img' + j + '">\
          </div>';
    });

    var html =
      ' <div class="col-sm-4 py-2">\
            <div div class="card" >\
          <div id="slide' +
      i +
      '" class="carousel slide" data-bs-ride="carousel">\
            <div class="carousel-inner">\
            ' +
      slide +
      '\
            </div>\
            <button class="carousel-control-prev" type="button" data-bs-target="#slide' +
      i +
      '" data-bs-slide="prev">\
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
              <span class="visually-hidden">Previous</span>\
            </button>\
            <button class="carousel-control-next" type="button" data-bs-target="#slide' +
      i +
      '" data-bs-slide="next">\
              <span class="carousel-control-next-icon" aria-hidden="true"></span>\
              <span class="visually-hidden">Next</span>\
            </button>\
          </div>\
\
          <div class="card-body">\
            <h5 class="card-title">' +
      value.title +
      '</h5>\
            <p class="card-text">' +
      value.text +
      '</p>\
          </div>\
        </div>\
      </div > ';
    body += html;
  });
  $('#rowProject').html(body);
});
