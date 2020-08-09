# TO DO app
I built this as an exercise in DOM manipulation with jQuery and vanilla js.

It has three dimensions as follows.

### jQuery
This is a jQuery demo which is run in the browser as a stand alone to do app. The purpose here is drill jQuery methods. Key methods used here are the following
* The use of event.stopPropagation is applied to a 'trash' icon in a span. This is to *prevent* deletion of the parent li when anything *other than the span* is clicked.
* The use of event [keypress](https://api.jquery.com/keypress/) with [event.which](https://api.jquery.com/event.which/#event-which1) to capture the user action of pressing the enter key.

### Refactor to vanilla JS
Here I remove jQuery and replicate the original functionality with vanilla JavaScript.



### Persistence with MondoDB
In this view I link the app to a database

