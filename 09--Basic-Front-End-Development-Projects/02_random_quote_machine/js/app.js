function getQuote() {
    return mitchQuotes[Math.floor(Math.random() * mitchQuotes.length)];
}

$(document).ready(function() {
    $('#attribution').hide();
    $('#twitter').hide();
  	$('#generate').on('click', function() {
	  	var thisQuote = getQuote();
      $('#quote').text(thisQuote);
		  $('#attribution').show();
      $('#twitter-button').attr('href', "https://twitter.com/intent/tweet?text=" + thisQuote + " -- Mitch Hedberg");
      $('#twitter').show();
	});
});

