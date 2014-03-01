javascript:(function(){ 
   $("div.RadGrid_Default,div.RadTreeView_Default").each(function() {
        $(this).find("a").each(function() {
            var link = $(this).attr("href").split("="),
            text = $(this).text(),
            curURL = window.location.href;
            if (curURL.indexOf("CustomContent_ItemList.aspx") != -1) {
                $(this).text(text + " - " + link[2].replace("&ValueID", ""));
            } else if (curURL.indexOf("WebForms.aspx") != -1) {
                $(this).text(text + " - " + link[1]);
            } else {
                $(this).text(text + " - " + link[1].replace("&A", "")
                    .replace("&CustomContent", "")
                    .replace("WebFormID", "")
                    .replace("&ValueID", ""));
            }
        });
    }); 
})();