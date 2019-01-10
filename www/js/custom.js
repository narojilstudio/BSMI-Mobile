$mapboxkey='pk.eyJ1IjoibmFyb2ppbCIsImEiOiJjanFqa3c5NGg2Y2drNDJ1bDZ5cXoyNjJkIn0.OSNBp6nQ7K1w9fHM8yc8Fw';
$mapboxurl='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+$mapboxkey;
$fetchapi='https://script.google.com/macros/s/AKfycbx4VrE_EYbxRkY67ggrOFN359E_X3sUJxB9JrZ_XXUxXqZZ9-A/exec?url='; //https://api.allorigins.ml/get?url=
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function extractData(data, startStr, endStr)
{
subStrStart = data.indexOf(startStr) + startStr.length
return data.substring(subStrStart,
subStrStart + data.substring(subStrStart).indexOf(endStr));
}
///////////////////////////////////////////////////////////////////////

function standard_time(x) {
        if (!x) {
            return
        }
        var a = x;
        //a = $.trim(a);
        a = a.replace(/\.\d\d\d+/, "");
        a = a.replace(/-/, "/").replace(/-/, "/");
        a = a.replace(/T/, " ").replace(/Z/, " UTC");
        a = a.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
        var b = new Date(a);
        return b;
    }
//////////////////////////////////////////
function dateString(data)
{
var m = standard_time(data);
var dateString = m.getFullYear() +"/"+ (m.getMonth()+1) +"/"+ m.getDate() + " " + m.getHours() + ":" + m.getMinutes() + ":" + m.getSeconds();
return dateString;
}
///////////////////////////////////////////////////////////////    
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
//////////////////////////////////////////////////////////////////////////////
function date_indo(data)
{
date = new Date(data);
year = date.getFullYear();
month = date.getMonth();
months = new Array('Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember');
d = date.getDate();
day = date.getDay();
days = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu');
h = date.getHours();
if(h<10)
{
        h = "0"+h;
}
m = date.getMinutes();
if(m<10)
{
        m = "0"+m;
}
s = date.getSeconds();
if(s<10)
{
        s = "0"+s;
}
result = ''+days[day]+', '+d+' '+months[month]+' '+year+' '+h+':'+m+':'+s;
return result;
}
//////////////////////////////////////////////////////////////////////////////
function date_time(id)
{
date = new Date;
year = date.getFullYear();
month = date.getMonth();
months = new Array('Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember');
d = date.getDate();
day = date.getDay();
days = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu');
h = date.getHours();
if(h<10)
{
        h = "0"+h;
}
m = date.getMinutes();
if(m<10)
{
        m = "0"+m;
}
s = date.getSeconds();
if(s<10)
{
        s = "0"+s;
}
result = ''+days[day]+', '+d+' '+months[month]+' '+year+' '+h+':'+m+':'+s;
document.getElementById(id).innerHTML = result;
setTimeout('date_time("'+id+'");','1000');
return true;
}  
//////////////////////////////////////////////////////////////////////////////////////
hijriplus=0;var a=new Date;a.setHours(1);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);a.setTime(a.getTime()+6E4*a.getTimezoneOffset());var f=new Date(96,1,3,16,15,0);lunarPeriod=2551443E3;moonPhaseTime=(a.getTime()-f.getTime())%lunarPeriod;percentRaw=moonPhaseTime/lunarPeriod;percent=Math.round(100*percentRaw)/100;percentBy2=Math.round(200*percentRaw);x=(lunarPeriod-moonPhaseTime)/864E5;x=Math.round(10*x)/10;v=x-Math.floor(x);vv=Math.round(1E8*v)/1E8;v=Math.round(v);0==v?(x=Math.round(x),1==x?d=13:2==x?d=12:3==x?d=11:4==x?d=10:5==x?d=9:6==x?d=8:7==x?d=7:8==x?d=6:9==x?d=5:10==x?d=4:11==x?d=3:12==x?d=2:13==x?d=1:14==x?d=30:15==x?d=29:16==x?d=28:17==x?d=27:18==x?d=26:19==x?d=25:20==x?d=24:21==x?d=23:22==x?d=22:23==x?d=21:24==x?d=20:25==x?d=19:26==x?d=18:27==x?d=17:28==x?d=16:29==x?d=15:30==x&&(d=14)):.6<=vv?(x=Math.round(x),--x,0>=x&&(x+=29),d=0):(x=Math.round(x),x-=2,0>=x&&(x+=29),1==x?d=12:2==x?d=11:3==x?d=10:4==x?d=9:5==x?d=8:6==x?d=7:7==x?d=6:8==x?d=5:9==x?d=4:10==x?d=3:11==x?d=2:12==x?d=1:13==x?d=29:14==x?d=28:15==x?d=27:16==x?d=26:17==x?d=25:18==x?d=24:19==x?d=23:20==x?d=22:21==x?d=21:22==x?d=20:23==x?d=19:24==x?d=18:25==x?d=17:26==x?d=16:27==x?d=15:28==x?d=14:29==x?d=13:30==x&&(d=12));function g(){var b=0,e=new Date;b&&(adjustmili=864E5*b,todaymili=e.getTime()+adjustmili,e=new Date(todaymili));day=e.getDate();month=e.getMonth();year=e.getFullYear();m=month+1;y=year;3>m&&(--y,m+=12);a=Math.floor(y/100);c=2-a+Math.floor(a/4);1583>y&&(c=0);1582==y&&(10<m&&(c=-10),10==m&&(c=0,4<day&&(c=-10)));jd=Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+c-1524;c=0;2299160<jd&&(a=Math.floor((jd-1867216.25)/36524.25),c=1+a-Math.floor(a/4));bb=jd+c+1524;cc=Math.floor((bb-122.1)/365.25);dd=Math.floor(365.25*cc);ee=Math.floor((bb-dd)/30.6001);day=bb-dd-Math.floor(30.6001*ee);month=ee-1;13<ee&&(cc+=1,month=ee-13);year=cc-4716;wd=b?((jd+1-b)%7+7)%7+1:((jd+1)%7+7)%7+1;iyear=10631/30;epochastro=1948084;epochcivil=1948085;shift1=.1335;z=jd-epochastro;cyc=Math.floor(z/10631);z-=10631*cyc;j=Math.floor((z-shift1)/iyear);iy=30*cyc+j;z-=Math.floor(j*iyear+shift1);im=Math.floor((z+28.5001)/29.5);13==im&&(im=12);id=z-Math.floor(29.5001*im-29);b=Array(8);b[0]=day;b[1]=month-1;b[2]=year;b[3]=jd-1;b[4]=wd-1;b[5]=id;b[6]=im-1;b[7]=iy;return b[5]}0!=d&&(hijriplus=d-g());3<Math.abs(hijriplus)&&(hijriplus=0);


function gmod(n,m){
	return ((n%m)+m)%m;
}

function kuwaiticalendar(adjust){
	var today = new Date();
	if(adjust) {
		adjustmili = 1000*60*60*24*adjust; 
		todaymili = today.getTime()+adjustmili;
		today = new Date(todaymili);
	}
	day = today.getDate();
	month = today.getMonth();
	year = today.getFullYear();
	m = month+1;
	y = year;
	if(m<3) {
		y -= 1;
		m += 12;
	}

	a = Math.floor(y/100.);
	b = 2-a+Math.floor(a/4.);
	if(y<1583) b = 0;
	if(y==1582) {
		if(m>10)  b = -10;
		if(m==10) {
			b = 0;
			if(day>4) b = -10;
		}
	}

	jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;

	b = 0;
	if(jd>2299160){
		a = Math.floor((jd-1867216.25)/36524.25);
		b = 1+a-Math.floor(a/4.);
	}
	bb = jd+b+1524;
	cc = Math.floor((bb-122.1)/365.25);
	dd = Math.floor(365.25*cc);
	ee = Math.floor((bb-dd)/30.6001);
	day =(bb-dd)-Math.floor(30.6001*ee);
	month = ee-1;
	if(ee>13) {
		cc += 1;
		month = ee-13;
	}
	year = cc-4716;

	if(adjust) {
		wd = gmod(jd+1-adjust,7)+1;
	} else {
		wd = gmod(jd+1,7)+1;
	}

	iyear = 10631./30.;
	epochastro = 1948084;
	epochcivil = 1948085;

	shift1 = 8.01/60.;
	
	z = jd-epochastro;
	cyc = Math.floor(z/10631.);
	z = z-10631*cyc;
	j = Math.floor((z-shift1)/iyear);
	iy = 30*cyc+j;
	z = z-Math.floor(j*iyear+shift1);
	im = Math.floor((z+28.5001)/29.5);
	if(im==13) im = 12;
	id = z-Math.floor(29.5001*im-29);

	var myRes = new Array(8);

	myRes[0] = day; //calculated day (CE)
	myRes[1] = month-1; //calculated month (CE)
	myRes[2] = year; //calculated year (CE)
	myRes[3] = jd-1; //julian day number
	myRes[4] = wd-1; //weekday number
	myRes[5] = id; //islamic date
	myRes[6] = im-1; //islamic month
	myRes[7] = iy; //islamic year

	return myRes;
}

function writeIslamicDate(adjustment) {
	var wdNames = new Array("Ahad","Itsnayn","Tsalaatsa","Arba'a","Khamis","Jumu'ah","Sabt");
	var iMonthNames = new Array("Muharram","Safar","Rabi'ul Awal","Rabi'ul Akhir",
	"Jumadil Awal","Jumadil Akhir","Rajab","Sya'ban",
	"Ramadhan","Syawal","Dzulkaidah","Dzulhijjah");
	var iDate = kuwaiticalendar(adjustment);
	var outputIslamicDate = wdNames[iDate[4]] + ", " 
	+ iDate[5] + " " + iMonthNames[iDate[6]] + " " + iDate[7] + " H";
	return outputIslamicDate;
}

function date_time_hijri(id)
{
document.getElementById(id).innerHTML = writeIslamicDate();
}
/////////////////////////////////////////////////////////////////////////////////////
function gempadirasakan()
{
      $.ajax({
        dataType: "json",
        url: $fetchapi+'http%3A//data.bmkg.go.id/lastgempadirasakan.xml',
        type:'GET',
        error: function(){$("#gempadirasakandiv").hide();},
        success: function(data) {
          xmlDoc = $.parseXML( data.contents ),
          $xml = $( xmlDoc ),
          $tanggal = $xml.find( "Tanggal" ).text();
          $jam = $xml.find( "Jam" ).text();
          $tanggaljam = $tanggal.split('/');$tanggaljam = $tanggaljam[1]+'/'+$tanggaljam[0]+'/'+$tanggaljam[2]+' '+$jam.replace('WIB','');
          $keterangan = $xml.find( "Keterangan" ).text();
          $magnitude = $xml.find( "Magnitude" ).text();
          $kedalaman = $xml.find( "Kedalaman" ).text();
          $dirasakan = $xml.find( "Dirasakan" ).text();
          $lintang = $xml.find( "Lintang" ).text();$lintang = $lintang.split(" ");$lintang = $lintang[0];
          $bujur = $xml.find( "Bujur" ).text();$bujur = $bujur.split(" ");$bujur = $bujur[0];
          //$( "#gempadirasakan" ).append("Tanggal : "+$tanggal +"</br>Jam : "+$jam+"</br>Koordinat : "+$lintang+ "LS - "+$bujur+" BT</br>Magnitude : "+$magnitude+"</br>Kedalaman : "+$kedalaman+"</br>Keterangan : "+$keterangan+"</br>Dirasakan : "+$dirasakan );
          // Create the map
          var map = L.map('mapgempadirasakan', {attributionControl: true}).setView([-$lintang, $bujur], 7);
          // Set up the OSM layer
          map.attributionControl.setPrefix('');
          L.tileLayer($mapboxurl, {
            maxZoom: 18,
            attribution: "Tanggal : "+$tanggal +" | Jam : "+$jam+" | Koordinat : -"+$lintang+ " LS , "+$bujur+" BT | Magnitudo : "+$magnitude+" | Kedalaman : "+$kedalaman+" | Keterangan : "+$keterangan+" | Dirasakan : "+$dirasakan,
            id: 'mapbox.streets'
          }).addTo(map);
          L.marker([-$lintang, $bujur]).addTo(map)
            .bindPopup('Gempa bumi M '+$magnitude+'</br>'+relative_time(dateString($tanggaljam)))
            .openPopup(); 
        }
      });
}
////////////////////////////////////////////////////////////////////////////////////
function gempadirasakanfull()
{
      $.ajax({
        dataType: "json",
        url: $fetchapi+'http%3A//data.bmkg.go.id/lastgempadirasakan.xml',
        type:'GET',
        //error: function(){$("#gempadirasakandiv").hide();},
        success: function(data) {
          xmlDoc = $.parseXML( data.contents ),
          $xml = $( xmlDoc ),
          $tanggal = $xml.find( "Tanggal" ).text();
          $jam = $xml.find( "Jam" ).text();
          $tanggaljam = $tanggal.split('/');$tanggaljam = $tanggaljam[1]+'/'+$tanggaljam[0]+'/'+$tanggaljam[2]+' '+$jam.replace('WIB','');
          $keterangan = $xml.find( "Keterangan" ).text();
          $magnitude = $xml.find( "Magnitude" ).text();
          $kedalaman = $xml.find( "Kedalaman" ).text();
          $dirasakan = $xml.find( "Dirasakan" ).text();
          $lintang = $xml.find( "Lintang" ).text();$lintang = $lintang.split(" ");$lintang = $lintang[0];
          $bujur = $xml.find( "Bujur" ).text();$bujur = $bujur.split(" ");$bujur = $bujur[0];
          //$( "#gempadirasakan" ).append("Tanggal : "+$tanggal +"</br>Jam : "+$jam+"</br>Koordinat : "+$lintang+ "LS - "+$bujur+" BT</br>Magnitude : "+$magnitude+"</br>Kedalaman : "+$kedalaman+"</br>Keterangan : "+$keterangan+"</br>Dirasakan : "+$dirasakan );
          // Create the map
          var map = L.map('mapgempadirasakanfull').setView([-$lintang, $bujur], 7);
          // Set up the OSM layer
          map.attributionControl.setPrefix('');
          L.tileLayer($mapboxurl, {
            maxZoom: 18,
            attribution: "Tanggal : "+$tanggal +" | Jam : "+$jam+" | Koordinat : -"+$lintang+ " LS , "+$bujur+" BT | Magnitudo : "+$magnitude+" | Kedalaman : "+$kedalaman+" | Keterangan : "+$keterangan+" | Dirasakan : "+$dirasakan,
            id: 'mapbox.streets'
          }).addTo(map);
          L.marker([-$lintang, $bujur]).addTo(map)
            .bindPopup('Gempa bumi M '+$magnitude+'</br>'+relative_time(dateString($tanggaljam)))
            .openPopup();  
        }
      });
}
///////////////////////////////////////////////////
function gempaterkini()
{
      $.ajax({
        dataType: "json",
        url: $fetchapi+'http%3A//data.bmkg.go.id/autogempa.xml',
        type:'GET',
        error: function(){$("#gempaterkinidiv").hide();},
        success: function(data) {
          xmlDoc = $.parseXML( data.contents ),
          $xml = $( xmlDoc ),
          $tanggal = $xml.find( "Tanggal" ).text();
          $jam = $xml.find( "Jam" ).text();
          $tanggaljam = $tanggal.split('-');$tanggaljam = $tanggaljam[0]+' '+$tanggaljam[1]+' '+$tanggaljam[2]+' '+$jam.replace('WIB','');
          $lokasi = $xml.find( "Wilayah1" ).text();
          $magnitude = $xml.find( "Magnitude" ).text();
          $kedalaman = $xml.find( "Kedalaman" ).text();
          $potensi = $xml.find( "Potensi" ).text();
          $koordinat = $xml.find( "coordinates" ).text();
          $lintang = $koordinat.split(",");$lintang = $lintang[1];
          $bujur = $koordinat.split(",");$bujur = $bujur[0];
          //$( "#gempaterkini" ).append("Tanggal : "+$tanggal +"</br>Jam : "+$jam+ "</br>Lokasi : "+$lokasi+ "</br>Koordinat : "+$koordinat+ "</br>Magnitude : "+$magnitude+"</br>Kedalaman : "+$kedalaman+"</br>Potensi : "+$potensi );
          // Create the map
          var map = L.map('mapgempaterkini').setView([$lintang, $bujur], 7);
          map.attributionControl.setPrefix('');
          // Set up the OSM layer
          L.tileLayer($mapboxurl, {
            maxZoom: 18,
            attribution: "Tanggal : "+$tanggal +" | Jam : "+$jam+ " | Lokasi : "+$lokasi+ " | Koordinat : "+$lintang+ " LS , "+$bujur+" BT | Magnitudo : "+$magnitude+" | Kedalaman : "+$kedalaman+" | Potensi : "+$potensi,
            id: 'mapbox.streets'
          }).addTo(map);
          L.marker([$lintang, $bujur]).addTo(map)
            .bindPopup('Gempa bumi M '+$magnitude+'</br>'+relative_time(dateString($tanggaljam)))
            .openPopup();
        }
      });
}
//////////////////////////////////////////////////////
function gempaterkinifull()
{
      $.ajax({
        dataType: "json",
        url: $fetchapi+'http%3A//data.bmkg.go.id/autogempa.xml',
        type:'GET',
        //error: function(){$("#gempaterkinidiv").hide();},
        success: function(data) {
          xmlDoc = $.parseXML( data.contents ),
          $xml = $( xmlDoc ),
          $tanggal = $xml.find( "Tanggal" ).text();
          $jam = $xml.find( "Jam" ).text();
          $tanggaljam = $tanggal.split('-');$tanggaljam = $tanggaljam[0]+' '+$tanggaljam[1]+' '+$tanggaljam[2]+' '+$jam.replace('WIB','');
          $lokasi = $xml.find( "Wilayah1" ).text();
          $magnitude = $xml.find( "Magnitude" ).text();
          $kedalaman = $xml.find( "Kedalaman" ).text();
          $potensi = $xml.find( "Potensi" ).text();
          $koordinat = $xml.find( "coordinates" ).text();
          $lintang = $koordinat.split(",");$lintang = $lintang[1];
          $bujur = $koordinat.split(",");$bujur = $bujur[0];
          //$( "#gempaterkini" ).append("Tanggal : "+$tanggal +"</br>Jam : "+$jam+ "</br>Lokasi : "+$lokasi+ "</br>Koordinat : "+$koordinat+ "</br>Magnitude : "+$magnitude+"</br>Kedalaman : "+$kedalaman+"</br>Potensi : "+$potensi );
          // Create the map
          var map = L.map('mapgempaterkinifull').setView([$lintang, $bujur], 7);
          map.attributionControl.setPrefix('');
          // Set up the OSM layer
          L.tileLayer($mapboxurl, {
            maxZoom: 18,
            attribution: "Tanggal : "+$tanggal +" | Jam : "+$jam+ " | Lokasi : "+$lokasi+ " | Koordinat : "+$lintang+ " LS , "+$bujur+" BT | Magnitudo : "+$magnitude+" | Kedalaman : "+$kedalaman+" | Potensi : "+$potensi,
            id: 'mapbox.streets'
          }).addTo(map);
          L.marker([$lintang, $bujur]).addTo(map)
            .bindPopup('Gempa bumi M '+$magnitude+'</br>'+relative_time(dateString($tanggaljam)))
            .openPopup();
        }
      });     
}
////////////////////////////////////////////////////////
function test()
{
alert('test');
}
////////////////////////////////////////////////////
function openBrowser()
{
                $(document).on("click", ".openBrowser", function() {
                    var url = $(this).attr('href');
                    window.open(url, "_blank", "location=yes");
                })
}
/////////////////////////////////////////////////////////
function openBrowser1()
{ 
    // Open dynamic popup
    $(document).on("click", ".openBrowser", function() {
      var url = $(this).attr('href');
      var dynamicPopup = app.popup.create({
        content: '<div class="popup"><div class="block"><p><a href="#" class="link popup-close">Close me</a></p></div>'+
                    '<iframe src="'+url+'" width="100%" height="100%"></iframe>'+
                      '<p>Popup created dynamically.'+url+'</p>'+
                      ''+
                    ''+
                  '</div>',
        // Events

      });      
      dynamicPopup.open();
    });
}
///////////////////////////////////////////////////////////
function openBrowser2()
{ 
    // Open dynamic popup
    $(document).on("click", ".openBrowser", function() {
      var url = $(this).attr('href');
      var dynamicPopup = app.popup.create({
        content: '<div class="popup"><div class="block"><p><a href="#" class="link popup-close">Close me</a></p></div>'+
                    '<div class="page-content"><div class="block"><div id="datapopup"><center>Loading ...</center></div></div></div>'+
                      '<p>Popup created dynamically.'+url+'</p>'+
                      ''+
                    ''+
                  '</div>',
        // Events

      });      
      dynamicPopup.open();
      
      var feed = "https://api.allorigins.ml/get?url="+url;
	
      $.ajax(feed, {
        dataType:"json",
        success:function(data) {
          $("#datapopup").html(data.contents);
        }	
      });
	      
    });
}
///////////////////////////////////////////////////////////
function beritaterbaru()
{
	var feed = "https://script.google.com/macros/s/AKfycbyMwyyuZbB-FDd9jyEwrJVe0cB8AT5fblIHiYRQTfVXS_nQzkAb/exec";	
	$.ajax(feed, {
		dataType:"json",
		//error: function(){},
		success:function(data) {
      //console.log(data);
      data.sort(function(a, b){return new Date(a.timestamp) - new Date(b.timestamp)});
      for (var i = data.length - 1; i > 0; i--) {
        if (i === data.length - 16) {break;}
        s=data[i].description;
        a=s.indexOf("<img");   
        b=s.indexOf("src=\"",a);
        c=s.indexOf("\"",b+5);   
        d=s.substr(b+5,c-b-5);img ="";
        if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img='<img src="'+d+'" width="100%"/>';
        $("#beritaterbaru").append('<div class="card demo-facebook-card"><div class="card-header"><div class="demo-facebook-avatar"><img src="img/logo50bulat.png" width="34" height="34"/></div><div class="demo-facebook-name">'+data[i].feedtitle+'</div><div class="demo-facebook-date">'+date_indo(standard_time(data[i].timestamp).toUTCString())+'</div></div><div class="card-content card-content-padding"><a href="'+data[i].link+'" class="openBrowser">'+data[i].title+img+'</a></div><div class="card-footer">'+relative_time(data[i].timestamp)+'<a href="'+data[i].link+'" class="openPreview"><button class="col button button-fill color-red">Baca</button></a></div></div>');
      } 
		}	
	});
}
//////////////////////////////////////////////////////////////
function openPreview()
{ 
    // Open dynamic popup
    $(document).on("click", ".openPreview", function() {
      var url = $(this).attr('href');
      var dynamicPopup = app.popup.create({
        content: '<div class="popup"><div class="block"><p><a href="#" class="link popup-close"><button class="col button button-fill color-red">Keluar</button></a></p></div>'+
                    '<div class="page-content"><div class="block"><div id="datapopup"><center>Loading ...</center></div></div></div>'+
                  '</div>',
        // Events

      });      
      dynamicPopup.open();
      
      var feed = "https://script.google.com/macros/s/AKfycbwca_nP1bfrJFXCZwAyNkRDPhfegruRI27uNNSfWnD0VHFpotwZ/exec?url="+url;
      $.ajax(feed, {
        dataType:"json",
        success:function(data) {
          $("#datapopup").html(data.contents+"</br></br></br></br></br></br></br>");
        }	
      });
	      
    });
}
///////////////////////////////////////////////////////////////
function openPreview2()
{ 
    // Open dynamic popup
    $(document).on("click", ".openPreview", function() {
      var url = $(this).attr('href');
      var dynamicPopup = app.popup.create({
        content: '<div class="popup"><div class="block"><p><a href="#" class="link popup-close"><button class="col button button-fill color-red">Keluar</button></a></p></div>'+
                    '<div class="page-content"><div class="block"><div id="datapopup"><center>Loading ...</center></div></div></div>'+
                  '</div>',
        // Events

      });     
      dynamicPopup.open();
      
      var feed = "https://script.google.com/macros/s/AKfycbz7nyKpxG7aiEeMl98UIfMSjwEk8muKFIaF24Vemh1gb2CKb-mN/exec?url="+url;
      $.ajax(feed, {
        dataType:"json",
        //error: function(){$("#datapopup").html("Ops , terjadi kesalahan mohon diulangi")},
        success:function(data) { //console.log(data);
          var hasil = JSON.parse(data.contents);//console.log(hasil);
          var berita = hasil.content;
          $("#datapopup").html("<h3><b>"+hasil.title+"</b></h3></br>"+hasil.content+"</br></br></br></br></br></br></br>");
        }	
      });
	      
    });
}
///////////////////////////////////////////////////
function explorenews()
{
	var feed = "https://script.google.com/macros/s/AKfycbyMwyyuZbB-FDd9jyEwrJVe0cB8AT5fblIHiYRQTfVXS_nQzkAb/exec";	
	$.ajax(feed, {
		dataType:"json",
		//error: function(){},
		success:function(data) {
      //console.log(data);
      data.sort(function(a, b){return new Date(a.timestamp) - new Date(b.timestamp)});
      for (var i = data.length - 1; i > 0; i--) {
        //if (i === data.length - 16) {break;}
        s=data[i].description;
        a=s.indexOf("<img");   
        b=s.indexOf("src=\"",a);
        c=s.indexOf("\"",b+5);   
        d=s.substr(b+5,c-b-5);img ="";
        if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img='<img src="'+d+'" width="100%"/>';
        $("#explorenews").append('<div class="card demo-facebook-card"><div class="card-header"><div class="demo-facebook-avatar"><img src="img/logo50bulat.png" width="34" height="34"/></div><div class="demo-facebook-name">'+data[i].feedtitle+'</div><div class="demo-facebook-date">'+date_indo(standard_time(data[i].timestamp).toUTCString())+'</div></div><div class="card-content card-content-padding"><a href="'+data[i].link+'" class="openBrowser">'+data[i].title+img+'</a></div><div class="card-footer">'+relative_time(data[i].timestamp)+'<a href="'+data[i].link+'" class="openPreview"><button class="col button button-fill color-red">Baca</button></a></div></div>');
      } 
		}	
	});
}
//////////////////////////////////////////////////////////
function openLiveTV()
{ 
    // Open dynamic popup
    $(document).on("click", ".openLiveTV", function() {
      var url = $(this).attr('href');
      var dynamicPopup = app.popup.create({
        content: '<div class="popup"><div class="tv-close"><img src="img/fancy_close.png" class="link popup-close"></div>'+
                    '<div id="datapopup" style="height:100%"><center>Loading ...</center></div>'+
                  '</div>',
        // Events

      });     
      dynamicPopup.open();
      
      var feed = $fetchapi+url;
      $.ajax(feed, {
        dataType:"json",
        //error: function(){$("#datapopup").html("Ops , terjadi kesalahan mohon diulangi")},
        success:function(data) { 
          var hasil = data.contents;
          var urlstreaming = extractData(hasil, '<source src="', '" type="application/x-mpegURL">');
          //http://www.convertstring.com/id/EncodeDecode/HtmlEncode
          var htmliframe = '&lt;html&gt; &lt;head&gt;       &lt;link href=&quot;https://unpkg.com/video.js/dist/video-js.css&quot; rel=&quot;stylesheet&quot;&gt;     &lt;script src=&quot;https://unpkg.com/video.js/dist/video.js&quot;&gt;&lt;/script&gt;     &lt;script src=&quot;https://unpkg.com/videojs-flash/dist/videojs-flash.js&quot;&gt;&lt;/script&gt;     &lt;script src=&quot;https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js&quot;&gt;&lt;/script&gt;  &lt;/head&gt; &lt;body style=&quot;padding:0px 0px;margin:0px 0px;&quot;&gt; &lt;video id=&quot;video-player&quot;  style=&quot;width:100%;height:100%&quot; class=&quot;embed-responsive-item video-js vjs-default-skin vjs-big-play-centered&quot; controls&gt; &lt;source src=&quot;'+urlstreaming+'&quot; type=&quot;application/x-mpegURL&quot;&gt; &lt;/video&gt; &lt;script&gt; var video = videojs(&quot;video-player&quot;, {autoplay: &quot;play&quot;}); &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;'; //muted or play
          $("#datapopup").html('<iframe width="100%" height="100%" src="data:text/html;charset=utf-8,'+htmliframe+'"></iframe>');
        }	
      });
	      
    });
}

////////////////////////////////////////////////////////////////
function openLiveTV2()
{ 
    // Open dynamic popup
    $(document).on("click", ".openLiveTV", function() {
      var url = $(this).attr('href');
      var dynamicPopup = app.popup.create({
        content: '<div class="popup"><div class="tv-close"><img src="img/fancy_close.png" class="link popup-close"></div>'+
                    '<div id="datapopup" style="height:100%"><center>Loading ...</center></div>'+
                  '</div>',
        // Events

      });     
      dynamicPopup.open();
      $("#datapopup").html('<iframe width="100%" height="100%" style="border:0px;" src="app/tv/tvone.html"></iframe>');
	      
    });
}