/*!
 * jQuery LiveType 0.1
 *
 * Copyright 2013, Tobal San (http://www.smartrock.fr)
 * Licensed under the MIT license.
 *
 */

$.fn.liveType = function(opts){
    var $this = this,
        defaults = {
            typeSpeed          : 50,                                // Time between each character typed
            pauseEvery         : 40,                                // Number of characters between each pause. Only used when pauseOnPunctuation is set to false
            pauseTime          : 1500,                              // The duration of pause
            pauseOnPunctuation : true,                              // If the pause should be on punctuation characters
            punctuationChars   : ['.', '.', '?', '!', ':', ';'],    // An array of characters to pause on
            cursorEffect       : true,                              // "True" for smooth blinking, "false" for plain blinking
            cursorSpeed        : 500,                               // Cursor blinking speed
            cursor             : '|'                                // Cursor type
        },
        settings = $.extend(defaults, opts);

    text = $this.html();
    $this.empty().append('<span class="cursor">' + settings.cursor + '</span>');

    cursor = 0

    setInterval(cursorAnimation, settings.cursorSpeed);
    t = setTimeout(type, settings.typeSpeed);

    function cursorAnimation() {
        if (settings.cursorEffect) {
            $("span.cursor", $this).animate({
              opacity: 0
            }, "fast", 'swing').animate({
              opacity: 1
            }, "fast", 'swing');
        } else {
            if ($('span.cursor', $this).is(':visible')) {
                $('span.cursor', $this).hide();
            } else {
                $('span.cursor', $this).show();
            }
        }
    }


    function type() {
        cursor++;
        if(cursor <= text.length) {
            if (settings.pauseOnPunctuation) {
                if(settings.punctuationChars.indexOf(text.substr(cursor-2, 1)) > -1) {
                    clearTimeout(t);
                    cursor++;
                    setTimeout(type, settings.pauseTime);
                } else {
                    $this.html(text.substr(0, cursor) + '<span class="cursor">' + settings.cursor + '</span>');
                    setTimeout(type, settings.typeSpeed)
                }
            } else {
                if(cursor % settings.pauseEvery) {
                    $this.html(text.substr(0, cursor) + '<span class="cursor">' + settings.cursor + '</span>');
                    setTimeout(type, settings.typeSpeed)
                } else {
                    clearTimeout(t);
                    cursor++;
                    setTimeout(type, settings.pauseTime);
                }
            }
        }
    }
}