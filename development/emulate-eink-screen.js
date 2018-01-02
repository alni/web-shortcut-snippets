/**
 * Emulate grayscale E-Ink Screen
 */
(function() {
    /* Toggle grayscale */
    if (document.documentElement.style.filter.indexOf("grayscale(100%)") >= 0) {
        document.documentElement.style.filter = "";
    } else {
        /* Saturate the colours by "6.25" (16 shades-of-gray - "100/16"), then
           make all colours grayscale */
        document.documentElement.style.filter = "saturate(6.25) grayscale(100%)";
    }
})();
