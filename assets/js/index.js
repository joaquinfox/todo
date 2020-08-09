$('#jqul').on('click', 'li', function () {
  $(this).toggleClass('completed');
});

$('#jqul').on('click', 'span', function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$('#jqinput').keypress(function (event) {
  if (event.which === 13) {
    let newTask = $(this).val();
    $(this).val('');
    $('#jqul').append(
      '<li><span> <i class="fa fa-trash"></i></span>' + newTask + '</li>'
    );
  }
});

$('.fa-plus').click(function () {
  $('#jqinput').fadeToggle();
});
