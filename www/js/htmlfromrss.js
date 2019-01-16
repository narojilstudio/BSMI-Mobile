
 
 $.fn.htmlfromrss = function(f) {
    $(this).each(function(i, a) {
        $(this).html('<div class="htmlfromrss"><ul id="htmlfromrss' + i + '"></ul></div><div class="htmlfromrssloading' + i + '">Loading ...</div>');
        rsstohtml($(this).data('htmlfromrss'), i,$(this).data('namacabang'))
    });

    function rsstohtml(d, i,j) {
	//feed to parse
      var feed = "https://script.google.com/macros/s/AKfycbx4VrE_EYbxRkY67ggrOFN359E_X3sUJxB9JrZ_XXUxXqZZ9-A/exec?url="+d;
	
      $.ajax(feed, {
        dataType:"json",
        tryCount : 0,
        retryLimit : 10,
        error: function(xhr, textStatus, errorThrown){this.tryCount++; if (this.tryCount <= this.retryLimit) { $.ajax(this); return; }},        
        success:function(data) {
          xmlDoc = $.parseXML( data.contents ),
          $xml = $( xmlDoc ),
          $($xml).find("item").each(function () { 
            var el = $(this);
            $title = el.find("title").text();
            $link = el.find("link").text();
            $pubDate = el.find("pubDate").text();
            $description = el.find("description").text();
            //$('.htmlfromrss ul#htmlfromrss' + i).append("<div class='card'><div class='card-header'><a class='openBrowser' target='_blank' href='"+$link+"' >"+$title+"</a></div><div class='card-footer'>"+relative_time($pubDate)+"</div><div class='card-content card-content-padding'>"+$description+"</div></div>");
            $('.htmlfromrssloading' + i).html('');
            //$('.htmlfromrss ul#htmlfromrss' + i).find('img').each(function(n,image){var image = $(image); image.attr('width','80%');image.attr('height','auto');});
            
            s=$description;
            a=s.indexOf("<img");   
            b=s.indexOf("src=\"",a);
            c=s.indexOf("\"",b+5);   
            d=s.substr(b+5,c-b-5);img ="";
            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img='<img src="'+d+'" width="100%"/>';
            $('.htmlfromrss ul#htmlfromrss' + i).append('<div class="card demo-facebook-card"><div class="card-header"><div class="demo-facebook-avatar"><img src="img/logo50bulat.png" width="34" height="34"/></div><div class="demo-facebook-name">'+j+'</div><div class="demo-facebook-date">'+date_indo(standard_time($pubDate).toUTCString())+'</div></div><div class="card-content card-content-padding"><a href="'+$link+'" title="'+$title+'" class="openPreview">'+$title+img+'</a></div><div class="card-footer">'+relative_time($pubDate)+'<a href="'+$link+'" title="'+$title+'" class="openPreview"><button class="col button button-fill color-red">Baca</button></a></div></div>');            
            
            
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
            r = '1 menit yang lalu'
        } else if (d < (45 * 60)) {
            r = (parseInt(d / 60, 10)).toString() + ' menit yang lalu'
        } else if (d < (2 * 60 * 60)) {
            r = '1 jam yang lalu'
        } else if (d < (24 * 60 * 60)) {
            r = '' + (parseInt(d / 3600, 10)).toString() + ' jam yang lalu'
        } else if (d < (48 * 60 * 60)) {
            r = '1 hari yang lalu'
        } else {
            r = (parseInt(d / 86400, 10)).toString() + ' hari yang lalu'
        }
        return (r.match('NaN') ? x : r)
    }
}