import './main.html';

Template.home.onCreated(function helloOnCreated() {

});

Template.home.rendered = function(){
  "use strict";

  $(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
  });

};

Template.home.helpers({

});

Template.navbarSecond.events({
  'click .scroll'(event, instance) {
    event.preventDefault();

    jQuery('html, body').animate({
        scrollTop: jQuery( $.attr(this, 'href') ).offset().top
    }, 500);
  },
});
