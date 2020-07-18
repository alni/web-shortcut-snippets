/**
 * Show images from _saved to HTML_ Imgur post
 * 
 * Tip: only save the HTML, not the entire page ;)
 */

(function() {
    var x = document.querySelectorAll(".post-image-container");
    for (var i = 0; i < x.length; i++) {
        var y = x[i] && x[i].querySelector(".post-image");
        if (y) {
            y.innerHTML = "<img src='https://i.imgur.com/" + x[i].getAttribute("id") + ".jpg' />"
        }
    }
})();