var body = '';
$.each(myProject, function (index, val) {
  var laoding = '';
  laoding = '<img src="img/Spinner-1s-200px.svg" style="max-width: 30%" id="loading' + index + '"/>';
  $('#rowProject').append(laoding);
});
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
            <div div class="card text-dark fs-5 border border-3 shadow rounded" >\
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
            <h5 class="card-title fs-4">' +
      value.title +
      '</h5>\
            <p class="card-text">' +
      value.text +
      '</p>\
          </div>\
        </div>\
      </div > ';
    $('#loading' + i).remove();
    $('#rowProject').append(html);
  });
  $.each(customer, function (i, value) {
    var html =
      '<div class="card col-sm-2 py-2 bg-body border-white">\
    <img src="img/' + value.logo + '" class="card-img-top" alt="...">\
    <div class="card-body">\
      <h5 class="card-title fs-4">' + value.name + '</h5>\
    </div>\
  </div>';
    $('#rowCustomer').append(html);
  });
  $.each(skills, function (i, value) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);


    var html = '<div class="d-flex flex-row my-2 mx-5">';
    html += '<div class="p-2 w-1/2 md:w-1/5 lg:w-1/6">' + value.name + '</div>';
    html += '<div class="h-1/6"><img src="img/' + value.logo + '" alt="Logo ' + value.name + '"></div>';

    html += '<div class="p-2 w-full">';
    html += '<div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">';

    html += '<div class="' + value.bgClass + ' text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style = "width: ' + value.persentage + '%"> ' + value.persentage + ' %</div > ';

    html += '</div">';
    html += '</div">';
    html += '</div>';

    $('#skill').append(html);

  })
});
$(document).ready(function () {
  $.ajax({
    url: 'https://api.github.com/users/ahmadsofuwan/repos',
    type: 'get',
    dataType: 'json',
  })
    .done(function (repo) {
      $('#cout-repo').text(repo.length)
      $.each(repo, function (i, val) {
        $('#repo').append(`<li><span class="font-black">${i + 1}.</span> ${val.name}</li>`)

      });
    })


});
