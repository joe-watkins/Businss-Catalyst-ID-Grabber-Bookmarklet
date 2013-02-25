javascript: jQuery("iframe[name='hybrid']").contents().find("div.RadGrid_Default,div.RadTreeView_Default").each(function(){
	jQuery(this).find("a").each(function(){
	
		var link = jQuery(this).attr("href");
		var text = jQuery(this).text();
		var curURL = window.location.href;
		
		link = link.split("=");
		
		/* check to see if we are on web app list view */
		if(curURL.indexOf("CustomContent_ItemList.aspx") != -1){
			jQuery(this).text(text+" - "+link[2].replace("&ValueID",""));	
		}else{
			jQuery(this).text(text+" - "+link[1].replace("&A","").replace("&CustomContent","").replace("&ValueID",""));
		}
	
	});
});