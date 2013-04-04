javascript: (function(e, a, g, h, f, c, b, d) {
    if (!(f = e.jQuery) || g > f.fn.jquery || h(f)) {
        c = a.createElement("script");
        c.type = "text/javascript";
        c.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + g + "/jquery.min.js";
        c.onload = c.onreadystatechange = function() {
            if (!b && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                h((f = e.jQuery).noConflict(1), b = 1);
                f(c).remove()
            }
        };
        a.documentElement.childNodes[0].appendChild(c)
    }
})(window, document, "1.3.2", function($, L) {
    jQuery("iframe[name='hybrid']").contents().find("div.RadGrid_Default,div.RadTreeView_Default").each(function() {
        jQuery(this).find("a").each(function() {
            var link  = jQuery(this).attr("href");
            var text  = jQuery(this).text();
            var curURL  = window.location.href;
            link  = link.split("="); 
            if (curURL.indexOf("CustomContent_ItemList.aspx")  !=  - 1) {
                jQuery(this).text(text + " - " + link[2].replace("&ValueID", ""));
            } else {
                jQuery(this).text(text + " - " + link[1].replace("&A", "").replace("&CustomContent", "").replace("&ValueID", ""));
            }
        });
    });
});