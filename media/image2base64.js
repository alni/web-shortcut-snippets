/**
 * Convert an image to Base64
 * 
 * Usage:
 * Open the image in a new window/tab and then execute this snippet
 * 
 * Example Image: https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0
 */
(function() {

    /**
     * https://stackoverflow.com/a/20285053
     * 
     * @param {string} url 
     * @param {function} callback 
     */
    function toDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }

    toDataURL(window.location.href, function(dataUrl) {
        /*console.log('RESULT:', dataUrl)*/
        prompt("Copy this to the clipboard", dataUrl);
    });
})();
