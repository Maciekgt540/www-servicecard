function zegar(){
    
    now = new Date();
    var godzina = now.getHours();
    var minuta = now.getMinutes();
    var sekunda = now.getSeconds();
	
	
    
    if (godzina < 10) godzina = "0" + godzina;
    if (minuta < 10) minuta = "0" + minuta;
    if (sekunda < 10) sekunda = "0" + sekunda;
    
    document.getElementById('czas').innerHTML = godzina + ":" + minuta + ":" + sekunda;
        
    setTimeout("zegar()", 1000);
} 

function data(){

now = new Date();
var dzien = (now.getDate()+0);
var miesiac = (now.getMonth()+1);
var rok = (now.getFullYear()+0);

    document.getElementById('data').innerHTML = dzien + "/" + '<span style="color:#FF0000">' + miesiac + '</span>' + "/" + rok;
        
    setTimeout("zegar()", 1000);

}

function onClickChanger(){
now = new Date();
var dni = ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Październik", "Listopad", "Grudzień"];
var dzien = (now.getDate()+0);
var miesiac = (now.getMonth()+1);
var rok = (now.getFullYear()+0);
var dniNapis;

if (miesiac == 12)
	dniNapis=dni[11];
	else if(miesiac==11)
	dniNapis=dni[10];
	else if(miesiac==10)
	dniNapis=dni[9];
	else if(miesiac==9)
	dniNapis=dni[8];
	else if(miesiac==8)
	dniNapis=dni[7];
	else if(miesiac==7)
	dniNapis=dni[6];
	else if(miesiac==6)
	dniNapis=dni[5];
	else if(miesiac==5)
	dniNapis=dni[4];
	else if(miesiac==4)
	dniNapis=dni[3];
	else if(miesiac==3)
	dniNapis=dni[2];
	else if(miesiac==2)
	dniNapis=dni[1];
	else if(miesiac==1)
	dniNapis=dni[0];
	
var dzien_tygodnia_nazwa = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota" ];
var dzien_tygodnia_liczba = (now.getDay() + 1);
var dzien_tyg;

if (dzien_tygodnia_liczba == 1)
	dzien_tyg=dzien_tygodnia_nazwa[0];
	else if (dzien_tygodnia_liczba == 2)
		dzien_tyg=dzien_tygodnia_nazwa[1];
	else if (dzien_tygodnia_liczba == 3)
		dzien_tyg=dzien_tygodnia_nazwa[2];
	else if (dzien_tygodnia_liczba == 4)
		dzien_tyg=dzien_tygodnia_nazwa[3];
	else if (dzien_tygodnia_liczba == 5)
		dzien_tyg=dzien_tygodnia_nazwa[4];
	else if (dzien_tygodnia_liczba == 6)
		dzien_tyg=dzien_tygodnia_nazwa[5];
	else if (dzien_tygodnia_liczba == 7)
		dzien_tyg=dzien_tygodnia_nazwa[6];

	
	document.getElementById('data').innerHTML = '<span style="color:Blue">' + dzien_tyg + '</span>';
	//document.getElementById('data').innerHTML = dzien + "/" + '<span style="color:#FF0000">' + dniNapis + '</span>' + "/" + rok;

	    setTimeout("zegar()", 1000);



}

