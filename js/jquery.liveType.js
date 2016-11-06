/*!
 * jQuery LiveType 0.3.0
 *
 * Copyright 2016, Tobal San (http://www.smartrock.fr)
 * Licensed under the MIT license.
 *
 */
(function () {
    'use strict';

    $.fn.liveType = function(opts) {
        var $this = this,
            defaults = {
                typeSpeed          : 50,                                // Time between each character typed
                pauseEvery         : 40,                                // Number of characters between each pause. Only used when pauseOnPunctuation is set to false
                pauseTime          : 1500,                              // The duration of pause
                pauseOnPunctuation : true,                              // If the pause should be on punctuation characters
                punctuationChars   : ['.', '.', '?', '!', ':', ';'],    // An array of characters to pause on
                cursorEffect       : true,                              // "True" for smooth blinking, "false" for plain blinking
                cursorSpeed        : 500,                               // Cursor blinking speed
                cursor             : '|',                               // Cursor type
                cursorClass        : 'cursor'                           // The classname for the cursor element
            },
            settings = $.extend(defaults, opts),

            text = $this.html(),
            cursor = 0,

            typingTimeout,


            cursorTemplate = function() {
                return '<span class="' + settings.cursorClass + '">' + settings.cursor + '</span>';
            },


            animateCursor = function () {
                setInterval(function () {
                    if (settings.cursorEffect) {
                        $('.' + settings.cursorClass, $this).animate({
                          opacity: 0
                        }, "fast", 'swing').animate({
                          opacity: 1
                        }, "fast", 'swing');
                    } else {
                        if ($('.' + settings.cursorClass, $this).is(':visible')) {
                            $('.' + settings.cursorClass, $this).hide();
                        } else {
                            $('.' + settings.cursorClass, $this).show();
                        }
                    }
                }, settings.cursorSpeed);
            },


            startTyping = function () {
                typingTimeout = setTimeout(typing, settings.typeSpeed);
            },

            stopTyping = function () {
                clearTimeout(typingTimeout);
            },

            pauseTyping = function () {
                stopTyping();
                cursor += 1;
                typingTimeout = setTimeout(typing, settings.pauseTime);
            },


            onPunctuationChar = function () {
                return settings.punctuationChars.indexOf(text.substr(cursor - 2, 1)) > -1
            },


            typing = function () {
                cursor += 1;

                if (cursor <= text.length) {
                    if (settings.pauseOnPunctuation) {
                        if (onPunctuationChar()) {
                            pauseTyping();
                        } else {
                            $this.html(text.substr(0, cursor) + cursorTemplate());
                            startTyping();
                        }
                    } else {
                        if(cursor % settings.pauseEvery) {
                            $this.html(text.substr(0, cursor) + cursorTemplate());
                            startTyping();
                        } else {
                            pauseTyping();
                        }
                    }
                }
            },


            init = function () {
                $this.empty();
                $this.append(cursorTemplate());

                animateCursor();

                startTyping();
            };

        init();
    };

})();
