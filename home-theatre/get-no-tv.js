// Snippets for GET AS Web TV (https://www.get.no/tv)

// "*www.get.no/tv/live/*"
// "*www.get.no/tv/watch/*"
/*
 * The live TV channels page is implemented with limited navigation using the
 * left/right directional keys to select a channel (but no shortcut to start
 * playing the channel)
 * 
 * This is where the snippet below can be used
 */
(function() {
    /* Check if Live TV currently playing channel */
    if (window.location.href.indexOf("/tv/watch/") > -1) {
        /* Open/Close Quick Guide/Quick Channel zapper */
        $("#zapper-toggle-button").trigger("click");
        /* When this is open, the channels can quickly be "zapped" using the
           left/right directional keys */
    } else {
        /* Currently on the main channel selector */
        /* Open current selected channel as playing */
        window.location.href = $("a.play-button").attr("href");
    }
})();
