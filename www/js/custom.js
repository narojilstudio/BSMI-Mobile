$mapboxkey='pk.eyJ1IjoibmFyb2ppbCIsImEiOiJjanFqa3c5NGg2Y2drNDJ1bDZ5cXoyNjJkIn0.OSNBp6nQ7K1w9fHM8yc8Fw';
$mapboxurl='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+$mapboxkey;
$fetchapigs='https://script.google.com/macros/s/AKfycbx4VrE_EYbxRkY67ggrOFN359E_X3sUJxB9JrZ_XXUxXqZZ9-A/exec?url=';
//$fetchapi= 'https://api.allorigins.ml/get?url=';
$fetchapi= 'https://script.google.com/macros/s/AKfycbx4VrE_EYbxRkY67ggrOFN359E_X3sUJxB9JrZ_XXUxXqZZ9-A/exec?url=';
$needauth = 'yes';
var datatoken = '';
var datauserid = '';
//var serverhost = 'http://localhost/project/bsmi/login/';
var serverhost = 'https://bsmi.sourceforge.io/';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}
////////////////////////
function enkripsi(data,password){
var encrypted = CryptoJS.AES.encrypt(data, password);
return encrypted.toString();
}
function dekripsi(data){
var password = window.localStorage["password"];
var decrypted = CryptoJS.AES.decrypt(data, password);
return decrypted.toString(CryptoJS.enc.Utf8);
}
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
try {document.getElementById(id).innerHTML = result;}catch{}
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
        sourceurl:'http%3A//data.bmkg.go.id/lastgempadirasakan.xml',
        url: $fetchapi+'http%3A//data.bmkg.go.id/lastgempadirasakan.xml',
        type:'GET',
        tryCount : 0,
        retryLimit : 10,
        error: function(xhr, textStatus, errorThrown){this.tryCount++;if (this.tryCount == 5){this.url = $fetchapigs+this.sourceurl} if (this.tryCount <= this.retryLimit) { $.ajax(this); return; }},
        success: function(data) {
          $("#gempadirasakandiv").html('<div class="card-header">Info Gempa Bumi Dirasakan</div> <div class="card-content card-content-padding"><div tabindex="650" id="mapgempadirasakan" style="width: 100%; height: 250px;"></div></div> <div class="card-footer"><i class="material-icons color-red">book</i><a href="/gempadirasakan/" class="item-content item-link"><button class="col button button-fill color-red">Buka</button></a></div>');
          xmlDoc = $.parseXML( data.contents ),
          $xml = $( xmlDoc ),
          $tanggal = $xml.find( "Tanggal" ).text();
          $jam = $xml.find( "Jam" ).text();
          $tanggaljam = $tanggal.split('/');$tanggaljam = $tanggaljam[1]+'/'+$tanggaljam[0]+'/'+$tanggaljam[2]+' '+$jam.replace('WIB','');
          $keterangan = $xml.find( "Keterangan" ).text();
          $magnitude = $xml.find( "Magnitude" ).text();
          $kedalaman = $xml.find( "Kedalaman" ).text();
          $dirasakan = $xml.find( "Dirasakan" ).text();
          $lintang = $xml.find( "Lintang" ).text();$lintangx = $lintang.split(" ");
          if ($lintangx[1] == 'LS'){$lintangx = $lintangx[0]}else{$lintangx = -$lintangx[0]};//console.log($lintangx);
          $bujur = $xml.find( "Bujur" ).text();$bujurx = $bujur.split(" ");$bujurx = $bujurx[0];//console.log($bujurx);
          // Create the map
          var atribusi = "Tanggal : "+$tanggal +" | Jam : "+$jam+" | Koordinat : "+$lintang+ " , "+$bujur+" | Magnitudo : "+$magnitude+" | Kedalaman : "+$kedalaman+" | Keterangan : "+$keterangan+" | Dirasakan : "+$dirasakan;
          var map = L.map('mapgempadirasakan', {attributionControl: true}).setView([-$lintangx, $bujurx], 7);
          // Set up the OSM layer
          map.attributionControl.setPrefix('');
          L.tileLayer($mapboxurl, {
            maxZoom: 18,
            attribution: atribusi,
            id: 'mapbox.streets'
          }).addTo(map);
          L.marker([-$lintangx, $bujurx]).addTo(map)
            .bindPopup('<center>Gempa bumi M '+$magnitude+'</br>'+$tanggal+' '+$jam+'</br>'+relative_time(dateString($tanggaljam))+'</center>')
            .openPopup(); 
        }
      });
}
////////////////////////////////////////////////////////////////////////////////////
function gempadirasakanfull()
{
      $.ajax({
        dataType: "json",
        sourceurl:'http%3A//data.bmkg.go.id/lastgempadirasakan.xml',
        url: $fetchapi+'http%3A//data.bmkg.go.id/lastgempadirasakan.xml',
        type:'GET',
        tryCount : 0,
        retryLimit : 10,
        error: function(xhr, textStatus, errorThrown){this.tryCount++;if (this.tryCount == 5){this.url = $fetchapigs+this.sourceurl} if (this.tryCount <= this.retryLimit) { $.ajax(this); return; }},
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
          $lintang = $xml.find( "Lintang" ).text();$lintangx = $lintang.split(" ");
          if ($lintangx[1] == 'LS'){$lintangx = $lintangx[0]}else{$lintangx = -$lintangx[0]};//console.log($lintangx);
          $bujur = $xml.find( "Bujur" ).text();$bujurx = $bujur.split(" ");$bujurx = $bujurx[0];//console.log($bujurx);
          // Create the map
          var atribusi = "Tanggal : "+$tanggal +" | Jam : "+$jam+" | Koordinat : "+$lintang+ " , "+$bujur+" | Magnitudo : "+$magnitude+" | Kedalaman : "+$kedalaman+" | Keterangan : "+$keterangan+" | Dirasakan : "+$dirasakan;
          var map = L.map('mapgempadirasakanfull').setView([-$lintangx, $bujurx], 7);
          // Set up the OSM layer
          map.attributionControl.setPrefix('');
          L.tileLayer($mapboxurl, {
            maxZoom: 18,
            attribution: atribusi,
            id: 'mapbox.streets'
          }).addTo(map);
          L.marker([-$lintangx, $bujurx]).addTo(map)
            .bindPopup('<center>Gempa bumi M '+$magnitude+'</br>'+$tanggal+' '+$jam+'</br>'+relative_time(dateString($tanggaljam))+'</center>')
            .openPopup();
          var url = 'INFO GEMPA | '+atribusi+' | << BSMI >> ';
          $( ".gempadirasakan .navbar-inner" ).append('<a href="#" class="actions-open right" data-actions=".ac-preview" style="float:right;margin-right:10px"><i class="icon material-icons md-only">menu</i></a><div class="actions-modal ac-preview"><div class="block"><a href="https://api.whatsapp.com/send?text='+ encodeURIComponent(url)+'" class="openBrowser link">Share ke WhatsApp</a></br></br><a data-clipboard-text="'+url+'" class="copytoclipboard link actions-close" href="#">Copy To Clipboard</a></br></br><a href="#" class="actions-close popup-close link" data-actions=".ac-preview">Keluar</a></div></div>');  
        }
      });
}
///////////////////////////////////////////////////
function gempaterkini()
{
      $.ajax({
        dataType: "json",
        sourceurl:'http%3A//data.bmkg.go.id/autogempa.xml',
        url: $fetchapi+'http%3A//data.bmkg.go.id/autogempa.xml',
        type:'GET',
        tryCount : 0,
        retryLimit : 10,
        error: function(xhr, textStatus, errorThrown){this.tryCount++;if (this.tryCount == 5){this.url = $fetchapigs+this.sourceurl} if (this.tryCount <= this.retryLimit) { $.ajax(this); return; }},
        success: function(data) {
          $("#gempaterkinidiv").html('<div class="card-header">Info Gempa Bumi M &ge; 5,0</div> <div class="card-content card-content-padding"><div tabindex="650" id="mapgempaterkini" style="width: 100%; height: 250px;"></div></div> <div class="card-footer"><i class="material-icons color-red">book</i><a href="/gempaterkini/" class="item-content item-link"><button class="col button button-fill color-red">Buka</button></a></div>');
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
          $lintang = $xml.find( "Lintang" ).text();
          $lintangx = $koordinat.split(",");$lintangx= $lintangx[1];
          $bujur = $xml.find( "Bujur" ).text();
          $bujurx = $koordinat.split(",");$bujurx = $bujurx[0];
          // Create the map
          var atribusi = "Tanggal : "+$tanggal +" | Jam : "+$jam+ " | Lokasi : "+$lokasi+ " | Koordinat : "+$lintang+ " , "+$bujur+" | Magnitudo : "+$magnitude+" | Kedalaman : "+$kedalaman+" | Potensi : "+$potensi;
          var map = L.map('mapgempaterkini').setView([$lintangx, $bujurx], 7);
          map.attributionControl.setPrefix('');
          // Set up the OSM layer
          L.tileLayer($mapboxurl, {
            maxZoom: 18,
            attribution: atribusi,
            id: 'mapbox.streets'
          }).addTo(map);
          L.marker([$lintangx, $bujurx]).addTo(map)
            .bindPopup('<center>Gempa bumi M '+$magnitude+'</br>'+$tanggal+' '+$jam+'</br>'+relative_time(dateString($tanggaljam))+'</center>')
            .openPopup();
        }
      });
}
//////////////////////////////////////////////////////
function gempaterkinifull()
{
      $.ajax({
        dataType: "json",
        sourceurl:'http%3A//data.bmkg.go.id/autogempa.xml',
        url: $fetchapi+'http%3A//data.bmkg.go.id/autogempa.xml',
        type:'GET',
        tryCount : 0,
        retryLimit : 10,
        error: function(xhr, textStatus, errorThrown){this.tryCount++;if (this.tryCount == 5){this.url = $fetchapigs+this.sourceurl} if (this.tryCount <= this.retryLimit) { $.ajax(this); return; }},
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
          $lintang = $xml.find( "Lintang" ).text();
          $lintangx = $koordinat.split(",");$lintangx= $lintangx[1];
          $bujur = $xml.find( "Bujur" ).text();
          $bujurx = $koordinat.split(",");$bujurx = $bujurx[0];
          // Create the map
          var atribusi = "Tanggal : "+$tanggal +" | Jam : "+$jam+ " | Lokasi : "+$lokasi+ " | Koordinat : "+$lintang+ " , "+$bujur+" | Magnitudo : "+$magnitude+" | Kedalaman : "+$kedalaman+" | Potensi : "+$potensi;
          var map = L.map('mapgempaterkinifull').setView([$lintangx, $bujurx], 7);
          map.attributionControl.setPrefix('');
          // Set up the OSM layer
          L.tileLayer($mapboxurl, {
            maxZoom: 18,
            attribution: atribusi,
            id: 'mapbox.streets'
          }).addTo(map);
          L.marker([$lintangx, $bujurx]).addTo(map)
            .bindPopup('<center>Gempa bumi M '+$magnitude+'</br>'+$tanggal+' '+$jam+'</br>'+relative_time(dateString($tanggaljam))+'</center>')
            .openPopup();
          var url = 'INFO GEMPA | '+atribusi+' | << BSMI >> ';
          $( ".gempaterkini .navbar-inner" ).append('<a href="#" class="actions-open right" data-actions=".ac-preview" style="float:right;margin-right:10px"><i class="icon material-icons md-only">menu</i></a><div class="actions-modal ac-preview"><div class="block"><a href="https://api.whatsapp.com/send?text='+ encodeURIComponent(url)+'" class="openBrowser link">Share ke WhatsApp</a></br></br><a data-clipboard-text="'+url+'" class="copytoclipboard link actions-close" href="#">Copy To Clipboard</a></br></br><a href="#" class="actions-close popup-close link" data-actions=".ac-preview">Keluar</a></div></div>');
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
/*
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
*/
///////////////////////////////////////////////////////////
/*
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
*/
///////////////////////////////////////////////////////////
/*
function beritaterbaru()
{
	var feed = "https://script.google.com/macros/s/AKfycbyMwyyuZbB-FDd9jyEwrJVe0cB8AT5fblIHiYRQTfVXS_nQzkAb/exec";	
	$.ajax(feed, {
		dataType:"json",
		error: function(xhr, textStatus, errorThrown){$.ajax(this); return;},
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
*/
//////////////////////////////////////////////////////////////
/*
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
*/
///////////////////////////////////////////////////////////////
function openPreview2()
{ 
    // Open dynamic popup
    $(document).on("click", ".openPreview", function() {
      var url = $(this).attr('href');
      var title = $(this).attr('title');
      var dynamicPopup = app.popup.create({
        content: '<div class="popup"><div class="block"><a href="#" class="link popup-close"><button class="col button button-fill color-red">Keluar</button></a><a href="#" class="actions-open" data-actions=".ac-preview" style="float:right"><i class="icon material-icons md-only">menu</i></a><div class="actions-modal ac-preview"><div class="block"><a href="https://api.whatsapp.com/send?text='+ encodeURIComponent(title+" "+url)+'" class="openBrowser link">Share link ke WhatsApp</a></br></br><a href="'+url+'" class="openBrowser link">Buka link di Browser</a></br></br><a data-clipboard-text="'+title+' '+url+'" class="copytoclipboard link actions-close" href="#">Copy To Clipboard</a></br></br><a href="#" class="actions-close popup-close link" data-actions=".ac-preview">Keluar</a></div></div></div>'+
                    '<div class="page-content"><div class="block"><div id="datapopup"><center>Loading ...</center></div></div></div>'+
                  '</div>',
        // Events

      });     
      dynamicPopup.open();
     
      var feed = "https://script.google.com/macros/s/AKfycbz7nyKpxG7aiEeMl98UIfMSjwEk8muKFIaF24Vemh1gb2CKb-mN/exec?url="+url;
      $.ajax(feed, {
        dataType:"json",
        tryCount : 0,
        retryLimit : 10,
        error: function(xhr, textStatus, errorThrown){this.tryCount++; if (this.tryCount <= this.retryLimit) { $.ajax(this); return; }},
        success:function(data) { //console.log(data);
          if (data.contents == '') {$.ajax(this); return;}
          var hasil = JSON.parse(data.contents);//console.log(hasil);
          var berita = hasil.content;
          $("#datapopup").html("<h3><b>"+title+"</b></h3></br>"+hasil.content+"</br></br></br></br></br></br></br>");
          $("#datapopup").find('img').each(function(n,image){var image = $(image); image.attr('width','100%');image.attr('height','auto');});
          $("#datapopup").find('iframe').each(function(n,iframe){var iframe = $(iframe); iframe.attr('width','100%');iframe.attr('height','auto');});
          
        }	
      });
	      
    });
}
///////////////////////////////////////////////////

function explorenews() //work
{
	var feed = "https://script.google.com/macros/s/AKfycbyMwyyuZbB-FDd9jyEwrJVe0cB8AT5fblIHiYRQTfVXS_nQzkAb/exec";	
	$.ajax(feed, {
		dataType:"json",
        tryCount : 0,
        retryLimit : 10,
        error: function(xhr, textStatus, errorThrown){this.tryCount++; if (this.tryCount <= this.retryLimit) { $.ajax(this); return; }},
		success:function(data) {
      console.log('done : explorenews');
      $("#beritaterbaru").html('');
      $("#exploretopnews").html('');
      data.sort(function(a, b){return new Date(a.timestamp) - new Date(b.timestamp)});
      var top1 = Math.floor(Math.random() * data.length);
      var top2 = Math.floor(Math.random() * data.length);
      for (var i = data.length - 1; i > 0; i--) {
        //if (i === data.length - 16) {break;}
        s=data[i].description;
        a=s.indexOf("<img");   
        b=s.indexOf("src=\"",a);
        c=s.indexOf("\"",b+5);   
        d=s.substr(b+5,c-b-5);img ="";
        if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img='<img src="'+d+'" width="100%"/>';
        $("#explorenews").append('<div class="card demo-facebook-card"><div class="card-header"><div class="demo-facebook-avatar"><img src="img/logo50bulat.png" width="34" height="34"/></div><div class="demo-facebook-name">'+data[i].feedtitle+'</div><div class="demo-facebook-date">'+date_indo(standard_time(data[i].timestamp).toUTCString())+'</div></div><div class="card-content card-content-padding"><a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview">'+data[i].title+img+'</a></div><div class="card-footer">'+relative_time(data[i].timestamp)+'<a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview"><button class="col button button-fill color-red">Baca</button></a></div></div>');
        
        if (i === data.length - top1) $("#exploretopnews").append('<div class="card demo-facebook-card"><div class="card-header"><div class="demo-facebook-avatar"><img src="img/logo50bulat.png" width="34" height="34"/></div><div class="demo-facebook-name">'+data[i].feedtitle+'</div><div class="demo-facebook-date">'+date_indo(standard_time(data[i].timestamp).toUTCString())+'</div></div><div class="card-content card-content-padding"><a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview">'+data[i].title+img+'</a></div><div class="card-footer">'+relative_time(data[i].timestamp)+'<a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview"><button class="col button button-fill color-red">Baca</button></a></div></div>');
        
        if (i === data.length - top2) $("#exploretopnews").append('<div class="card demo-facebook-card"><div class="card-header"><div class="demo-facebook-avatar"><img src="img/logo50bulat.png" width="34" height="34"/></div><div class="demo-facebook-name">'+data[i].feedtitle+'</div><div class="demo-facebook-date">'+date_indo(standard_time(data[i].timestamp).toUTCString())+'</div></div><div class="card-content card-content-padding"><a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview">'+data[i].title+img+'</a></div><div class="card-footer">'+relative_time(data[i].timestamp)+'<a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview"><button class="col button button-fill color-red">Baca</button></a></div></div>');
      } 
      for (var i = data.length - 1; i > 0; i--) {
        if (i === data.length - 16) {break;}
        s=data[i].description;
        a=s.indexOf("<img");   
        b=s.indexOf("src=\"",a);
        c=s.indexOf("\"",b+5);   
        d=s.substr(b+5,c-b-5);img ="";
        if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img='<img src="'+d+'" width="100%"/>';
        $("#beritaterbaru").append('<div class="card demo-facebook-card"><div class="card-header"><div class="demo-facebook-avatar"><img src="img/logo50bulat.png" width="34" height="34"/></div><div class="demo-facebook-name">'+data[i].feedtitle+'</div><div class="demo-facebook-date">'+date_indo(standard_time(data[i].timestamp).toUTCString())+'</div></div><div class="card-content card-content-padding"><a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview">'+data[i].title+img+'</a></div><div class="card-footer">'+relative_time(data[i].timestamp)+'<a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview"><button class="col button button-fill color-red">Baca</button></a></div></div>');
      }
		}	
	});
}

//////////////////////////////////////////////////////////
function explorenews2()
{
  var RSS = [
    //{feedname:"", feedurl:"http://feeds.feedburner.com/"},
    {feedname:"DPN BSMI", feedurl:"http://feeds.feedburner.com/bsmipusat"},
    {feedname:"BSMI Bali", feedurl:"http://feeds.feedburner.com/BsmiBali"},
    {feedname:"BSMI Banten", feedurl:"http://feeds.feedburner.com/BsmiBanten"},
    {feedname:"BSMI DKI Jakarta", feedurl:"http://feeds.feedburner.com/BsmiDkiJakarta"},
    {feedname:"BSMI Jawa Barat", feedurl:"http://feeds.feedburner.com/BsmiJawaBarat"},
    {feedname:"BSMI Jawa Tengah", feedurl:"http://feeds.feedburner.com/BsmiJawaTengah"},
    {feedname:"BSMI Jawa Timur", feedurl:"http://feeds.feedburner.com/bsmijawatimur"},
    {feedname:"BSMI Kalimantan Timur", feedurl:"http://feeds.feedburner.com/BSMIKalimantanTimur"},
    {feedname:"BSMI NTB", feedurl:"http://feeds.feedburner.com/BsmiNtb"},
    {feedname:"BSMI Sulawesi Selatan", feedurl:"http://feeds.feedburner.com/BsmiSulawesiselatan"},
    {feedname:"BSMI Sumatera Utara", feedurl:"http://feeds.feedburner.com/bsmisumut"},
    {feedname:"BSMI Sumatera Barat", feedurl:"http://feeds.feedburner.com/BsmiSumateraBarat"},
    {feedname:"BSMI Papua", feedurl:"http://feeds.feedburner.com/BsmiPapua"},
  ];

  var myj = [];
  var data = [];

  for (var j = 0; j < RSS.length; j++) {
     myj[j] = $.ajax({ 
      dataType: "json",
      url: $fetchapi+RSS[j].feedurl,
      async: true,
      success: function(result) {}                     
    });
  }
  $.when.apply( $,myj ).then(function( ) { //console.log('done : explorenews2');

    $("#beritaterbaru").html('');
    $("#exploretopnews").html('');
    
    for (var j = 0; j < arguments.length; j++) {
      try{
      var dataq = arguments[ j ][0];
      xmlDoc = $.parseXML( dataq.contents ),
      $xml = $( xmlDoc ),
      $($xml).find("item").each(function () { 
        let el = $(this);
        var item = {
          feedtitle : RSS[j].feedname,
          title : el.find("title").text(),
          link : el.find("link").text(),
          timestamp : el.find("pubDate").text(),
          description : el.find("description").text()
        }
        data.push(item);
      });
      }
      catch(e){}
    }
    data.sort(function(a, b){return new Date(a.timestamp) - new Date(b.timestamp)});
      var top1 = Math.floor(Math.random() * data.length);
      var top2 = Math.floor(Math.random() * data.length);
      for (var i = data.length - 1; i > 0; i--) {
        //if (i === data.length - 16) {break;}
        s=data[i].description;
        a=s.indexOf("<img");   
        b=s.indexOf("src=\"",a);
        c=s.indexOf("\"",b+5);   
        d=s.substr(b+5,c-b-5);img ="";
        if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){d = d.replace('http://','https://');img='<img src="'+d+'" width="100%"/>';}
        $("#explorenews").append('<div class="card demo-facebook-card"><div class="card-header"><div class="demo-facebook-avatar"><img src="img/logo50bulat.png" width="34" height="34"/></div><div class="demo-facebook-name">'+data[i].feedtitle+'</div><div class="demo-facebook-date">'+date_indo(standard_time(data[i].timestamp).toUTCString())+'</div></div><div class="card-content card-content-padding"><a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview">'+data[i].title+img+'</a></div><div class="card-footer">'+relative_time(data[i].timestamp)+'<a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview"><button class="col button button-fill color-red">Baca</button></a></div></div>');
        
        if (i === data.length - top1) $("#exploretopnews").append('<div class="card demo-facebook-card"><div class="card-header"><div class="demo-facebook-avatar"><img src="img/logo50bulat.png" width="34" height="34"/></div><div class="demo-facebook-name">'+data[i].feedtitle+'</div><div class="demo-facebook-date">'+date_indo(standard_time(data[i].timestamp).toUTCString())+'</div></div><div class="card-content card-content-padding"><a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview">'+data[i].title+img+'</a></div><div class="card-footer">'+relative_time(data[i].timestamp)+'<a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview"><button class="col button button-fill color-red">Baca</button></a></div></div>');
        
        if (i === data.length - top2) $("#exploretopnews").append('<div class="card demo-facebook-card"><div class="card-header"><div class="demo-facebook-avatar"><img src="img/logo50bulat.png" width="34" height="34"/></div><div class="demo-facebook-name">'+data[i].feedtitle+'</div><div class="demo-facebook-date">'+date_indo(standard_time(data[i].timestamp).toUTCString())+'</div></div><div class="card-content card-content-padding"><a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview">'+data[i].title+img+'</a></div><div class="card-footer">'+relative_time(data[i].timestamp)+'<a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview"><button class="col button button-fill color-red">Baca</button></a></div></div>');
      } 
      for (var i = data.length - 1; i > 0; i--) {
        if (i === data.length - 16) {break;}
        s=data[i].description;
        a=s.indexOf("<img");   
        b=s.indexOf("src=\"",a);
        c=s.indexOf("\"",b+5);   
        d=s.substr(b+5,c-b-5);img ="";
        if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){d = d.replace('http://','https://');img='<img src="'+d+'" width="100%"/>';}
        //$("#beritaterbaru").append('<div class="card demo-facebook-card"><div class="card-header"><div class="demo-facebook-avatar"><img src="img/logo50bulat.png" width="34" height="34"/></div><div class="demo-facebook-name">'+data[i].feedtitle+'</div><div class="demo-facebook-date">'+date_indo(standard_time(data[i].timestamp).toUTCString())+'</div></div><div class="card-content card-content-padding"><a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview">'+data[i].title+img+'</a></div><div class="card-footer">'+relative_time(data[i].timestamp)+'<a href="'+data[i].link+'" title="'+data[i].title+'" class="openPreview"><button class="col button button-fill color-red">Baca</button></a></div></div>');
      }
  },function(e){explorenews();});
}
//////////////////////////////////////////////////////////
/*
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
*/
////////////////////////////////////////////////////////////////
function openLiveTV2()
{ 
    // Open dynamic popup
    $(document).on("click", ".openLiveTV", function() {
      var url = $(this).attr('href');
      var dynamicPopup = app.popup.create({
        content: '<div class="popup" style="background:#000000"><div class="tv-close"><img src="img/fancy_close.png" class="link popup-close"></div>'+
                    '<div id="datapopup" style="height:100%"><center>Loading ...</center></div>'+
                  '</div>',
        // Events

      });     
      dynamicPopup.open();
      $("#datapopup").html('<iframe width="100%" height="100%" style="border:0px;" src="'+url+'" allow="autoplay; encrypted-media"  allowfullscreen></iframe>');
	      
    });
}
////////////////////////
function openiframe()
{ 
    // Open dynamic popup
    $(document).on("click", ".openiframe", function() {
      var url = $(this).attr('href');
      var dynamicPopup = app.popup.create({
        content: '<div class="popup" style="background:#000000"><div class="tv-close"><img src="img/fancy_close.png" class="link popup-close"></div>'+
                    '<div id="datapopup" style="height:100%"><center>Loading ...</center></div>'+
                  '</div>',
        // Events

      });     
      dynamicPopup.open();
      $("#datapopup").html('<iframe width="100%" height="100%" style="border:0px;" src="'+url+'" allow="autoplay; encrypted-media"  allowfullscreen></iframe>');
	      
    });
}
///////////////////////////////////////////////////////////////////////////
function openBsmiTV()
{ 
    // Open dynamic popup
    $(document).on("click", ".openBsmiTV", function() {
      var url = $(this).attr('href');
      var dynamicPopup = app.popup.create({
        content: '<div class="popup" style="background:#000000"><div class="tv-banner"><div class="live-online" style="background:#ffffff;width:50px;height:17px;"><img width="50px" src="img/live-online.gif"/></div></div><div class="tv-close"><img src="img/fancy_close.png" class="link popup-close"></div>'+
                    '<div id="datapopup" style="height:100%"><center>Loading ...</center></div>'+
                  '</div>',
        // Events

      });     
      dynamicPopup.open();
      $("#datapopup").html('<iframe width="100%" height="100%" style="border:0px;" src="'+url+'" allow="autoplay; encrypted-media"  allowfullscreen></iframe>');
	      
    });
}
///////////////////////////////////////////////////////////////////////////
/*
function exploreigdetail(data)
{
          //for (var i = 0 ; i < data.graphql.hashtag.edge_hashtag_to_media.edges.length ; i++) {
          for (var i = 0 ; i < 6 ; i++) {


							$.ajax({
								dataType: "json",
								url: 'https://www.instagram.com/p/'+data.graphql.hashtag.edge_hashtag_to_media.edges[i].node.shortcode+'/?__a=1',
								type:'GET',
								success: function(dataq) { //console.log(dataq);
                    var displayurl = dataq.graphql.shortcode_media.display_url;
                    var caption = dataq.graphql.shortcode_media.edge_media_to_caption.edges[0].node.text;
                    var id = dataq.graphql.shortcode_media.id;
                    var owner_full_name = dataq.graphql.shortcode_media.owner.full_name;
                    var owner_id = dataq.graphql.shortcode_media.owner.id;
                    var owner_profile_pic = dataq.graphql.shortcode_media.owner.profile_pic_url;
                    var owner_username = dataq.graphql.shortcode_media.owner.username;
                    var shortcode = dataq.graphql.shortcode_media.shortcode;
                    var timestamp = dataq.graphql.shortcode_media.taken_at_timestamp;
                    
										//$( "#content" ).append(displayurl+'</br>'+caption+'</br>'+id+'</br>'+owner_full_name+'</br>'+owner_id+'</br>'+owner_profile_pic+'</br>'+owner_username+'</br>'+shortcode+'</br>'+timestamp+'</br></br></br>');
                    //$( "#content" ).append('<div style="width:40%;border:solid 5px #0000; padding:5px 5px;float:left;"><p>'+owner_username+'</p><p>'+owner_full_name+'</p><img width="100%" src="'+displayurl+'"/></div>');
                    $( "#exploreig" ).append('<div class="col-50"><p>'+owner_username+'</p><p>'+owner_full_name+'</p><img width="100%" src="'+displayurl+'"/></div>');
								}
							});  
           
          }
}
*/
////////////////////////////////////////////////////////////////////////////////////
function exploreig()
{
//https://www.instagram.com/p/Bsao9S2hDrd/?__a=1
//https://www.instagram.com/explore/tags/bsmi/?__a=1      
      $.ajax({
        dataType: "json",
        sourceurl:'https://www.instagram.com/explore/tags/bsmi/?__a=1',
        tryCount : 0,
        retryLimit : 10,
        error: function(xhr, textStatus, errorThrown){this.tryCount++;if (this.tryCount == 5){this.url = $fetchapigs+this.sourceurl} if (this.tryCount <= this.retryLimit) { $.ajax(this); return; }},
        url: $fetchapi+'https://www.instagram.com/explore/tags/bsmi/?__a=1',
        type:'GET',
        success: function(dataq) { //console.log(dataq.contents);
          $("#exploreig").html('');
          $("#exploretopig").html('');
          try {var data = JSON.parse(dataq.contents);}catch{$.ajax(this); return;}
          //console.log(data.graphql.hashtag.edge_hashtag_to_media.edges[0].node.display_url);
          for (var i = 0 ; i < 4 ; i++) {
          var display_url = data.graphql.hashtag.edge_hashtag_to_media.edges[i].node.display_url;
          var caption = data.graphql.hashtag.edge_hashtag_to_media.edges[i].node.edge_media_to_caption.edges[0].node.text;          
            $( "#exploretopig" ).append('<div class="col-50"><a href="'+display_url+'" title="'+caption+'" class="fancybox" data-fancybox rel="galleryig1"><img width="100%" src="'+display_url+'"/></a></div>');
          }
          for (var i = 0 ; i < data.graphql.hashtag.edge_hashtag_to_media.edges.length ; i++) {
          var display_url = data.graphql.hashtag.edge_hashtag_to_media.edges[i].node.display_url;
          var caption = data.graphql.hashtag.edge_hashtag_to_media.edges[i].node.edge_media_to_caption.edges[0].node.text;  
            $( "#exploreig" ).append('<div class="col-50"><a href="'+display_url+'" title="'+caption+'" class="fancybox" data-fancybox rel="galleryig2"><img width="100%" src="'+display_url+'"/></a></div>');
          }
        }
      }); 
      


}
//////////////////////////////////////////////////////////////////
function fancyboxinstall()
{
    /* $(".fancybox").fancybox({
      openEffect : 'fade',
      closeEffect : 'fade'
   }); */
  $(".fancybox").fancybox({
    afterShow: function(){
      $(".fancybox-overlay").swipe( {
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
          if(direction == "left"){
            $.fancybox.next(direction);
          }else{
            $.fancybox.prev(direction);
          }
        },threshold:5
      });
    } // afterShow
  });
    
}
///////////////////////////////////////////////
function copytoclipboard()
{
  var clipboard = new ClipboardJS('.copytoclipboard');
  $(document).on("click", ".copytoclipboard", function() {
    //var clipboard = new ClipboardJS('.copytoclipboard');
    //clipboard.destroy();
    var toastCenter = app.toast.create({
      text: 'Disalin',
      position: 'center',
      closeTimeout: 2000,
    })
    toastCenter.open();
  });
}

////////////////////////////////////
function checkPreAuth() 
{

  window.localStorage["auth"] = 'no';
  $('#successauth').hide();
  //datatoken = dekripsi(window.localStorage["token"]);
  var token = window.localStorage["token"];

  $.ajax({
      type: "POST",
      data : { login: 'yes', data: token},
      url: serverhost+"tokenapi.php"
  }).done(function (data1) {
      //console.log(data1);
      datatoken = data1;//console.log(datatoken);
      try{ var dtoken = dekripsi(datatoken) } catch {}
      $.ajax({
          type: "POST",
          //url: serverhost+"loginapi.php",
          data : { token: dtoken},
          url: serverhost+"loginapi.php",
          error: function(jqXHR, textStatus, errorThrown) 
            {
            //app.dialog.alert('Error pre auth');
              $('#successauth').hide();
              $('#failedauth').show();
              app.preloader.hide();
              $('.akundata').html('');              
            },
          success: function(data, textStatus, jqXHR) 
            {
            //console.log(data);
            //app.dialog.alert('Success pre auth');
            window.localStorage["auth"] = 'yes';
            $('#successauth').show();
            $('#failedauth').hide();
            app.loginScreen.close('#my-register-screen');
            app.loginScreen.close('#my-login-screen');            
            datauserid = data;
            executeakun();
            app.preloader.hide();
            }
      }).done(function (data) {
          $('#my-register-screen')[0].reset();
          $('#my-login-screen')[0].reset();
          //console.log(data);
          //$('#4').html('JQUERY AJAX : '+data);
          //alert("Data: " + data );
      });      
  }); 
  

     
}

////////////////////////////////
function logoutbutton()
{
$$('.logout-button').on('click', function () {
                    app.preloader.show();
                    window.localStorage["auth"] = 'no';
                    window.localStorage["token"] = ''; 
                    checkPreAuth();
});
}

////////////////////////////////
function executeakun()
{
Intercooler.processNodes($('.akundata'));
}