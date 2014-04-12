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
        //console.log(tweets);
        var x = tweets.length;
        var n = 0;
        var element = $(".tweets");
        var list= '';
        while(n < x) {
          list += '<li>' + tweets[n] + '</li>';
          n++;
        }
        $('.widget-area').addClass('tweets-loaded');
        element.html(list);
        $('.loading').hide();
    }

    
    // ---------------------------------------------------------------------------
    // Mobile Navigation

    $('.menu-icon').on('click', function(event) {
        $('.brand-wrapper').toggleClass('open');
        $('body').toggleClass('push');
        $('.page-wrap').toggleClass('scale');
    });


    // ---------------------------------------------------------------------------
    // ScrollReveal

    var config = {
      viewportFactor: 0
    };

    window.scrollReveal = new scrollReveal(config);

    // ---------------------------------------------------------------------------
    // Codeivate
   
    var breakStatus = [
    'Taking a break.',
    'Grabbing some coffee.', 
    'afk.', 
    'Gaming.',
    'Watching TV.'
    ];

    var programmingStatus = [
    'Is programming right now in ',
    'Coding up a storm in ',
    'Saving lives using ',
    'Coding this instant in ',
    'Crafting the next best thing using '
    ];

    var randomNum = Math.floor((Math.random() * 10000));
    var breakStatusSelect = randomNum % breakStatus.length,
        programmingStatusSelect = randomNum % programmingStatus.length;

    $.getJSON('http://codeivate.com/users/jishaal.json?callback=?', function data(data) {
        var status;
        //console.dir(data);
        $('#name').html(data.name);

        if(data.programming_now) {
          status = programmingStatus[programmingStatusSelect];
          status += '<strong>'+ data.current_language + "</strong>.";
        } else {
          status = breakStatus[breakStatusSelect];
        }
        $('.status-tag-codeivate a').html(status);
            
    });


    // ---------------------------------------------------------------------------
    // Last.fm

    $.get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=j-dawg-bo&api_key=9d92732638e517cb06c246ca143e766e&format=json', function(data) {
        //console.dir(data);

        var isPlaying = data.recenttracks.track[0]['@attr'];
        var lastfmTag = $('.status-tag-lastfm a');

        if(isPlaying) {
            var songName = data.recenttracks.track[0].name,
                songArtist = data.recenttracks.track[0].artist['#text'],
                status = "Listening to <strong>" + songName + '</strong> by <strong>' +songArtist + '</strong> on Spotify';
            lastfmTag.html(status);
        }
    }); 
  
});


