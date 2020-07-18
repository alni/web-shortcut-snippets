// Snippets for Jysk Online Store

// "*www.jysk.no*"
// "*www.jysk.dk*"
// And maybe others...
/*
 * Fix no before price (when product is discounted) not displaying on Jysk 
 * sites other than the Swedish site
 * 
 * This snippet will add the missing _before_ price to the viewed product
 * 
 * NOTE: the product need to be viewed at least once, and then reload the page
 *       before use
 */
(function() {
    var $sameHistoryElement = jQuery("#GetUserHistory div[data-wss_id='" + jQuery("article.node-product").attr("data-wss_id") + "']");
    if (!$sameHistoryElement || !$sameHistoryElement.length) {
        /* Reload the page if the same product not found in the recent history */
        /* This will make it appear in the recent history */
        window.location.reload();
        return;
    }
    if (jQuery("article.node-product .product-price").hasClass("offerprice")) {
        jQuery("article.node-product .product-price-support")
            .addClass("price-before beforeprice")
            .text([
                "Pr. Stk. ", /* Change me to the correct phrase of the language to be used */
                $sameHistoryElement.attr("data-price"),
                ",-" /* Change me to the correct format of the language used */
            ].join("") );
    }
})();
