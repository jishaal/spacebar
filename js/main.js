// twitterFetcher.fetch('431704259394932736', 'twitter', 1, true);
// twitterFetcher.fetch('431704259394932736', 'twitter', 5, true, true, false);
$(document).ready(function() {

	// ---------------------------------------------------------------------------
	// SETUP TWITTER WIDGET
	
	twitterFetcher.fetch('431704259394932736', 'twitter-list', 3, true, false, true, '', false, handleTweets, false);

	function dateFormatter(date) {
        return date.toTimeString();
      }

	function handleTweets(tweets){
		console.log(tweets);
	    var x = tweets.length;
	    var n = 0;
	    var element = $(".tweets");
	    var list= '';
	    while(n < x) {
	      list += '<li>' + tweets[n] + '</li>';
	      n++;
	    }
	    element.hide().html(list).fadeIn();
	}

	
	// ---------------------------------------------------------------------------
	// Mobile Navigation

	$('.menu-icon').on('click', function(event) {
		$('.brand-wrapper').toggleClass('open');
		$('.page-wrap').toggleClass('scale');
	});
	
	
});


