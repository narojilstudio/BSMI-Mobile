/*********************************************************************
 * #### jQuery htmlfromrss.js V.0.001 ####
 * Coded by Ican Bachors 2016.
 * http://ibacor.com/labs/htmlfromrssjs
 * Updates will be posted to this site.
 *********************************************************************/
 
 $.fn.htmlfromrss = function(f) {
    $(this).each(function(i, a) {
        $(this).html('<div class="htmlfromrss"><ul id="htmlfromrss' + i + '"></ul></div>');
        rsstohtml($(this).data('htmlfromrss'), i)
    });

    function rsstohtml(d, i) {
	//feed to parse
      var feed = "https://api.allorigins.ml/get?url="+d;
	
      $.ajax(feed, {
        dataType:"json",
        success:function(data) {
          xmlDoc = $.parseXML( data.contents ),
          $xml = $( xmlDoc ),
          //$("#div1").append($xml.text());
          $($xml).find("item").each(function () { // or "item" or whatever suits your feed
            var el = $(this);
            //console.log("------------------------");
            //console.log("title      : " + el.find("title").text());
            //console.log("link       : " + el.find("link").text());
            //console.log("date       : " + el.find("pubDate").text());
            //console.log("description: " + el.find("description").text());
            $title = el.find("title").text();
            $link = el.find("link").text();
            $pubDate = el.find("pubDate").text();
            $description = el.find("description").text();
            $('.htmlfromrss ul#htmlfromrss' + i).append("<div class='card'><div class='card-header'><a class='openBrowser' target='_blank' href='"+$link+"' >"+$title+"</a></div><div class='card-footer'>"+relative_time($pubDate)+"</div><div class='card-content card-content-padding'>"+$description+"</div></div>");
            //$('.htmlfromrss ul#htmlfromrss' + i).html(s)
            $('.htmlfromrss ul#htmlfromrss' + i).find('img').each(function(n,image){var image = $(image); image.attr('width','80%');image.attr('height','auto');});
          });
      

        }	
      });
	
    }

    function relative_time(x) {
        if (!x) {
            return
        }
        var a = x;
        a = $.trim(a);
        a = a.replace(/\.\d\d\d+/, "");
        a = a.replace(/-/, "/").replace(/-/, "/");
        a = a.replace(/T/, " ").replace(/Z/, " UTC");
        a = a.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
        var b = new Date(a);
        var c = (arguments.length > 1) ? arguments[1] : new Date();
        var d = parseInt((c.getTime() - b) / 1000);
        d = (d < 2) ? 2 : d;
        var r = '';
        if (d < 60) {
            r = 'Baru saja dipublikasikan'
        } else if (d < 120) {
            r = 'a min'
        } else if (d < (45 * 60)) {
            r = (parseInt(d / 60, 10)).toString() + ' menit yang lalu'
        } else if (d < (2 * 60 * 60)) {
            r = 'an hr'
        } else if (d < (24 * 60 * 60)) {
            r = '' + (parseInt(d / 3600, 10)).toString() + ' jam yang lalu'
        } else if (d < (48 * 60 * 60)) {
            r = 'a day'
        } else {
            r = (parseInt(d / 86400, 10)).toString() + ' hari yang lalu'
        }
        return (r.match('NaN') ? x : r)
    }
}