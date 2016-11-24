(function() {
    'use strict';

    // Open and close the nav bar
    $('.button-collapse').sideNav();

    // Make table elements
    let table = getElementsByTagName('table');
    let tbody = document.createElement('tbody');

    // Event listener for cards
    let cards = getElementsByClassName('className');
    $$each(cards, function(card) {
        card.addEventListener('click', function(event) {
            if (event.target === card) {
                console.log("this is the card", card);
            }
        });

    })

})();
