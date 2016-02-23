jQuery LiveType plugin
======================

This is a jQuery plugin to provide the "typewriter" effect. More precisely, it makes content on your website look like it's being typed right at the moment the visitor is looking to the page.

Usage
-----

Usage is pretty straightforward. Either download the files using the link at the top of this page or clone this repository to your project folder.

Write the content that you want to have typed live in a `div` or a `p` and include jQuery and this plugin js files in your html document:

```html
<body>
    <div class="example">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Possimus error fuga ad voluptate quibusdam.
        Deserunt minus reiciendis maiores accusantium in error voluptatem eos
        quibusdam harum nobis dolor alias quasi modi?
    </div>

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
    <script src="js/jquery.liveType.min.js"></script>

    <script type="text/javascript">
        $(document).ready(function(){
            $('.example').liveType({
                typeSpeed: 50
            });
        })
    </script>
</body>
```

No CSS required: you style things as you please.

Options
-------

There are several options to customize the plugin. Use it like so:

```js
$(document).ready(function(){
    $('.example').liveType({
        // options
    });
})
```

Here are all the options, with their default values:

```js
typeSpeed          : 50,                                // Time between each character typed
pauseEvery         : 40,                                // Number of characters between each pause. Only used when pauseOnPunctuation is set to false
pauseTime          : 1500,                              // The duration of pause
pauseOnPunctuation : true,                              // If the pause should be on punctuation characters
punctuationChars   : ['.', '.', '?', '!', ':', ';'],    // An array of characters to pause on
cursorEffect       : true,                              // "True" for smooth blinking, "false" for plain blinking
cursorSpeed        : 500,                               // Cursor blinking speed
cursor             : '|',                               // Cursor type
cursorClass        : 'cursor'                           // The classname for the cursor element
```

TODO
----

Add randomizer (scramble function then backspace erase and retyping on the last word) to add even more realism.

LICENSE
-------

This plugin is licenced under the <a href="LICENSE" title="check license">MIT license</a>

Contact & infos
---------------

For any questions or comment feel free to contact me at tobalsan (a) gmail.com
