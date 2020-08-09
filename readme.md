# TO DO app
I built this as an exercise in DOM manipulation with jQuery and vanilla js and as an extension, I link it to a database.

The app has three dimensions as follows.

### jQuery
This is a jQuery demo which is run in the browser as a stand alone to do app. The purpose here is to drill jQuery methods. Key methods used here are 

- The use of event.stopPropagation is applied to a 'trash' icon in a span. This is to _prevent_ deletion of the parent li when anything _other than the span_ is clicked.

```
$('ul').on('click', 'span', function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

```

- The use of event [keypress](https://api.jquery.com/keypress/) with [event.which](https://api.jquery.com/event.which/#event-which1) to capture the user action of pressing the enter key.

```
$('input').keypress(function (event) {
  if (event.which === 13) {
    let newTask = $(this).val();
    $(this).val('');
    $('ul').append(
      '<li><span> <i class="fa fa-trash"></i></span>' + newTask + '</li>'
    );
  }
});

```
In order to avoid conflicts between the jQuery and vanilla versions, element id's are prefixed with id's '*method-tagname*' as in '*jq-input*' and '*van-input*'.

### Refactor to vanilla JS
Here I remove jQuery and replicate the original app functions with vanilla JavaScript.

### Persistence with MondoDB
Last I persist data to a non-relational database.
