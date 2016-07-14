//Visszaszámláló

//Hónapok
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

//Visszaszámláló függvény
function countdown(yr,m,d,di,hr,hri,min,mini,seci,texti){
	theyear=yr;
	themonth=m;
	theday=d;
	thehour=hr;
	theminute=min;

	d_i=di;
	hr_i=hri;
	min_i=mini;
	sec_i=seci;
	text_i=texti;

	var today=new Date(); //mai dátum
	//A mai dátum elemeit egyenként eltároljuk egy-egy változóban
	var todayy=today.getFullYear();
	var todaym=today.getMonth();
	var todayd=today.getDate();
	var todayh=today.getHours();
	var todaymin=today.getMinutes();
	var todaysec=today.getSeconds();

	//Összeépítjük a mai dátumot a megfelelő formátumra, majd konvertáljuk UNIX formátumba
	var todaystring1=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec;	
	var todaystring=Date.parse(todaystring1);
	
	//A fenti lépéseket alkalmazzuk a céldátumra is
	var futurestring1=(montharray[m-1]+" "+d+", "+yr+" "+hr+":"+min);
	var futurestring=Date.parse(futurestring1);

	//Vsszük a két dátum különbségét
	var dd=futurestring-todaystring;
	//Visszaalakítjuk megjeleníthető formátumra
	var dday=Math.floor(dd/(60*60*1000*24)*1);
	var dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1);
	var dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
	var dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

	//Megvizsgálja lejárt-e az idő. Ha igen eltünteti a számokat és megjeleníti az üzenetet, ha nem, akkor pedig rekurzívan folytatja a számlálást
	if(dday<=0 && dhour<=0 && dmin<=0 && dsec<=0){
		document.getElementById(text_i).style.display="none";
		return;
	}
	else {
		document.getElementById(di).innerHTML=dday;
		document.getElementById(hri).innerHTML=dhour;
		document.getElementById(mini).innerHTML=dmin;
		document.getElementById(seci).innerHTML=dsec;

		console.log("meghivodik a fv?");

		setTimeout("countdown(theyear,themonth,theday,d_i,thehour,hr_i,theminute,min_i,sec_i,text_i)",1000);
	}
}