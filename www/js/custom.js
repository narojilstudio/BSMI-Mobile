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
        url: 'https://api.allorigins.ml/get?url=http%3A//data.bmkg.go.id/lastgempadirasakan.xml&callback=?',
        type:'GET',
        error: function(){$("#gempadirasakandiv").hide();},
        success: function(data) {
          xmlDoc = $.parseXML( data.contents ),
          $xml = $( xmlDoc ),
          $tanggal = $xml.find( "Tanggal" ).text();
          $jam = $xml.find( "Jam" ).text();
          $keterangan = $xml.find( "Keterangan" ).text();
          $magnitude = $xml.find( "Magnitude" ).text();
          $kedalaman = $xml.find( "Kedalaman" ).text();
          $dirasakan = $xml.find( "Dirasakan" ).text();
          $lintang = $xml.find( "Lintang" ).text();$lintang = $lintang.split(" ");$lintang = $lintang[0];
          $bujur = $xml.find( "Bujur" ).text();$bujur = $bujur.split(" ");$bujur = $bujur[0];
          //$( "#gempadirasakan" ).append("Tanggal : "+$tanggal +"</br>Jam : "+$jam+"</br>Koordinat : "+$lintang+ "LS - "+$bujur+" BT</br>Magnitude : "+$magnitude+"</br>Kedalaman : "+$kedalaman+"</br>Keterangan : "+$keterangan+"</br>Dirasakan : "+$dirasakan );
          // Create the map
          var map = L.map('mapgempadirasakan').setView([-$lintang, $bujur], 10);
          // Set up the OSM layer
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: "BMKG | Tgl : "+$tanggal +" | Jam : "+$jam+" | XY : -"+$lintang+ " LS , "+$bujur+" BT | M : "+$magnitude+" | Ked : "+$kedalaman+" | Ket : "+$keterangan+" | Dirasakan : "+$dirasakan,
            id: 'mapbox.streets'
          }).addTo(map);
          L.marker([-$lintang, $bujur]).addTo(map)
            .bindPopup('Gempa bumi dirasakan')
            .openPopup();  
        }
      });
}
////////////////////////////////////////////////////////////////////////////////////
function gempadirasakanfull()
{
      $.ajax({
        dataType: "json",
        url: 'https://api.allorigins.ml/get?url=http%3A//data.bmkg.go.id/lastgempadirasakan.xml&callback=?',
        type:'GET',
        //error: function(){$("#gempadirasakandiv").hide();},
        success: function(data) {
          xmlDoc = $.parseXML( data.contents ),
          $xml = $( xmlDoc ),
          $tanggal = $xml.find( "Tanggal" ).text();
          $jam = $xml.find( "Jam" ).text();
          $keterangan = $xml.find( "Keterangan" ).text();
          $magnitude = $xml.find( "Magnitude" ).text();
          $kedalaman = $xml.find( "Kedalaman" ).text();
          $dirasakan = $xml.find( "Dirasakan" ).text();
          $lintang = $xml.find( "Lintang" ).text();$lintang = $lintang.split(" ");$lintang = $lintang[0];
          $bujur = $xml.find( "Bujur" ).text();$bujur = $bujur.split(" ");$bujur = $bujur[0];
          //$( "#gempadirasakan" ).append("Tanggal : "+$tanggal +"</br>Jam : "+$jam+"</br>Koordinat : "+$lintang+ "LS - "+$bujur+" BT</br>Magnitude : "+$magnitude+"</br>Kedalaman : "+$kedalaman+"</br>Keterangan : "+$keterangan+"</br>Dirasakan : "+$dirasakan );
          // Create the map
          var map = L.map('mapgempadirasakanfull').setView([-$lintang, $bujur], 10);
          // Set up the OSM layer
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: "BMKG | Tgl : "+$tanggal +" | Jam : "+$jam+" | XY : -"+$lintang+ " LS , "+$bujur+" BT | M : "+$magnitude+" | Ked : "+$kedalaman+" | Ket : "+$keterangan+" | Dirasakan : "+$dirasakan,
            id: 'mapbox.streets'
          }).addTo(map);
          L.marker([-$lintang, $bujur]).addTo(map)
            .bindPopup('Gempa bumi dirasakan')
            .openPopup();  
        }
      });
}
///////////////////////////////////////////////////
function gempaterkini()
{
      $.ajax({
        dataType: "json",
        url: 'https://api.allorigins.ml/get?url=http%3A//data.bmkg.go.id/autogempa.xml&callback=?',
        type:'GET',
        error: function(){$("#gempaterkinidiv").hide();},
        success: function(data) {
          xmlDoc = $.parseXML( data.contents ),
          $xml = $( xmlDoc ),
          $tanggal = $xml.find( "Tanggal" ).text();
          $jam = $xml.find( "Jam" ).text();
          $lokasi = $xml.find( "Wilayah1" ).text();
          $magnitude = $xml.find( "Magnitude" ).text();
          $kedalaman = $xml.find( "Kedalaman" ).text();
          $potensi = $xml.find( "Potensi" ).text();
          $koordinat = $xml.find( "coordinates" ).text();
          $lintang = $koordinat.split(",");$lintang = $lintang[1];
          $bujur = $koordinat.split(",");$bujur = $bujur[0];
          //$( "#gempaterkini" ).append("Tanggal : "+$tanggal +"</br>Jam : "+$jam+ "</br>Lokasi : "+$lokasi+ "</br>Koordinat : "+$koordinat+ "</br>Magnitude : "+$magnitude+"</br>Kedalaman : "+$kedalaman+"</br>Potensi : "+$potensi );
          // Create the map
          var map = L.map('mapgempaterkini').setView([$lintang, $bujur], 10);
          // Set up the OSM layer
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: "BMKG | Tgl : "+$tanggal +" | Jam : "+$jam+ " | Lokasi : "+$lokasi+ " | XY : "+$lintang+ " LS , "+$bujur+" BT | M : "+$magnitude+" | Ked : "+$kedalaman+" | Potensi : "+$potensi,
            id: 'mapbox.streets'
          }).addTo(map);
          L.marker([$lintang, $bujur]).addTo(map)
            .bindPopup('Gempa bumi terkini M &ge; 5,0')
            .openPopup();
        }
      });
}
//////////////////////////////////////////////////////
function gempaterkinifull()
{
      $.ajax({
        dataType: "json",
        url: 'https://api.allorigins.ml/get?url=http%3A//data.bmkg.go.id/autogempa.xml&callback=?',
        type:'GET',
        //error: function(){$("#gempaterkinidiv").hide();},
        success: function(data) {
          xmlDoc = $.parseXML( data.contents ),
          $xml = $( xmlDoc ),
          $tanggal = $xml.find( "Tanggal" ).text();
          $jam = $xml.find( "Jam" ).text();
          $lokasi = $xml.find( "Wilayah1" ).text();
          $magnitude = $xml.find( "Magnitude" ).text();
          $kedalaman = $xml.find( "Kedalaman" ).text();
          $potensi = $xml.find( "Potensi" ).text();
          $koordinat = $xml.find( "coordinates" ).text();
          $lintang = $koordinat.split(",");$lintang = $lintang[1];
          $bujur = $koordinat.split(",");$bujur = $bujur[0];
          //$( "#gempaterkini" ).append("Tanggal : "+$tanggal +"</br>Jam : "+$jam+ "</br>Lokasi : "+$lokasi+ "</br>Koordinat : "+$koordinat+ "</br>Magnitude : "+$magnitude+"</br>Kedalaman : "+$kedalaman+"</br>Potensi : "+$potensi );
          // Create the map
          var map = L.map('mapgempaterkinifull').setView([$lintang, $bujur], 10);
          // Set up the OSM layer
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: "BMKG | Tgl : "+$tanggal +" | Jam : "+$jam+ " | Lokasi : "+$lokasi+ " | XY : "+$lintang+ " LS , "+$bujur+" BT | M : "+$magnitude+" | Ked : "+$kedalaman+" | Potensi : "+$potensi,
            id: 'mapbox.streets'
          }).addTo(map);
          L.marker([$lintang, $bujur]).addTo(map)
            .bindPopup('Gempa bumi terkini M &ge; 5,0')
            .openPopup();
        }
      });     
}
////////////////////////////////////////////////////////
function test1()
{
alert();
}