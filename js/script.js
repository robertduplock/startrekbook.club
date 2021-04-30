/**
 * Scripts for trek books.
 */
(function() {

  var app = {};

  /**
   * Easter eggs that console log out.
   */
  app.easterEggs = function(timeout) {
    console.log('Q: How do you stop from falling out of a Bird of Prey?');
    console.log('A: You just have to Klingon!');

    setTimeout(function() {
      console.warn('Hey man, are you checking out my logs!?');
    }, timeout);
  }

  // Call the methods.
  app.easterEggs(30000);

})();
