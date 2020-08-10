$('#jq-ul').on('click', 'li', function () {
  $(this).toggleClass('completed');
});

$('#jq-ul').on('click', 'span', function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$('#jq-input').keypress(function (event) {
  if (event.which === 13) {
    let newTask = $(this).val();
    $(this).val('');
    $('#jq-ul').append(
      '<li><span> <i class="fa fa-trash"></i></span>' + newTask + '</li>'
    );
  }
});

$('.fa-plus').click(function () {
  $('#jqinput').fadeToggle();
});
