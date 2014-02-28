javascript: jQuery("div.RadGrid_Default,div.RadTreeView_Default").each(function() {
    jQuery(this).find("a").each(function() {
        var link = jQuery(this).attr("href");
        var text = jQuery(this).text();
        var curURL = window.location.href;
        link = link.split("=");
        if (curURL.indexOf("CustomContent_ItemList.aspx") != -1) {
            jQuery(this).text(text + " - " + link[2].replace("&ValueID", ""));
        } else if (curURL.indexOf("WebForms.aspx") != -1) {
            jQuery(this).text(text + " - " + link[1]);
        } else {
            jQuery(this).text(text + " - " + link[1].replace("&A", "").replace("&CustomContent", "").replace("WebFormID", "").replace("&ValueID", ""));
        }
    });
});