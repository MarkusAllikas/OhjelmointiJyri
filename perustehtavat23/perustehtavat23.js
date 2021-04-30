
//viikko 2 osa 1

// Tehtävä 1

function jarjesta()
{
var luku1, luku2, luku3;
luku1 = parseInt(document.getElementById('eka').value);
luku2 = parseInt(document.getElementById('toka').value);
luku3 = parseInt(document.getElementById('kolmas').value);
document.write("Annoit luvut: " + luku1 + ' ' + luku2 + ' ' + luku3 + "<br>");
if(luku1 < luku2 && luku1 < luku3)
{
  if(luku2 < luku3)
  {
    document.write("Lukujen järjestys: " + luku1 + ' ' + luku2 + ' ' + luku3);
  }
  else {
    document.write("Lukujen järjestys: " + luku1 + ' ' + luku3 + ' ' + luku2);
  }
}
else if(luku2 < luku1 && luku2 < luku3)
{
  if(luku1<luku3)
  {
    document.write("Lukujen järjestys: " + luku2 + ' ' + luku1 + ' ' + luku3);
  }
  else {
    document.write("Lukujen järjestys: " + luku2 + ' ' + luku3 + ' ' + luku1);

  }
}
else if(luku3 < luku1 && luku3 < luku2)
  {
    if(luku1 < luku2)
    {
      document.write("Lukujen järjestys: " + luku3 + ' ' + luku1 + ' ' + luku2);
    }
    else {
      document.write("Lukujen järjestys: " + luku3 + ' ' + luku2 + ' ' + luku1);

    }
  }
}


//tehtävä 2

function etsiSuurin()
{
  var l1, l2, l3, l4, l5, suurin;
  l1 = parseInt(document.getElementById('luku1').value);
  l2 = parseInt(document.getElementById('luku2').value);
  l3 = parseInt(document.getElementById('luku3').value);
  l4 = parseInt(document.getElementById('luku4').value);
  l5 = parseInt(document.getElementById('luku5').value);
  if(l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2)
  {
    suurin = l2;
  }
  else if(l1 < l3 && l4 < l3 && l5 < l3)
  {
    suurin = l3;
  }
  else if(l1 < l4 && l5 < l4)
  {
    suurin = l4;
  }
  else if(l1 < l5)
  {
    suurin = l5;
  }
  else {
    suurin = l1;
  }
  document.write("Annoit luvut: " + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ' ' + l5);
  document.write("<br>Suurin niistä on: " + suurin);
}



//tehtävä 3

  function paritonParillinen()
  {
    var arvo;
    arvo = parseInt(document.getElementById('luku').value);
    document.write("Antamasi luku: " + arvo);
    if(arvo%2 == 0)
    {
      document.write("<br>Luku on parillinen");
    }
    else {
      document.write("<br>Luku on pariton");
    }
  }



  //tehtävä 4

  function ajoneuvo()
  {
    var age = parseInt(document.getElementById('ika').value);
    if(age < 16)
    {
      document.write("Voit ajaa polkupyörällä");
    }
    else if(age < 18)
    {
      document.write("Voit ajaa mopolla");
    }
    else {
      document.write("Voit ajaa autolla");
    }
  }



  //tehtävä 5

  function kaanna()
  {
    var lang = document.getElementById('kieli').value;
    if(lang == 'eng')
    {
      document.write("Hello world!");
    }
    else if(lang == 'swe')
    {
      document.write("Hej världen!");
    }
    else {
      document.write("Tere maailm!");
    }
  }



  //viikko 2 osa 2
  // Kesken!

  //tehtävä 1
/*
  function posNeg(luku){

    if (luku >= 0)
    {
    document.write("luku on positiivinen");
    }
    else
    {
    document.write("luku on negatiivinen");
    }
  }

  //tehtävä 2

  function vkoPaiva()
  {
    var paiva = 0;
    var paiva = document.getElementById('paiva').value;
    {
      switch (paiva[i]) {
        case '1':
         "maanantai";
          break;
        case '2':
          "tiistai";
          break;
        case '3':
          "keskiviikko";
          break;
        case '4':
          "torstai";
          break;
        case '5':
          "perjantai";
          break;
        case '6':
          "lauantai";
          break;
        case '7':
          "sunnuntai";
          break;
        default:
          "syötä luku 1-7";
      }
      document.getElementById('qwe').innerHTML = <p>"Tänään on "+ paiva </p>;
    }
  }


//tehtävä 3
//ohjelma joka tarkistaa onko karkausvuosi
function karkausVuosi()
{
  var karkaus = 0;
  if (true)
  {
    for (var i /4; i < karkaus.length; i++)
    {
      array[i]
      return "Vuosi on karkausvuosi";
    }
  } else if (true) {
    for (var i / 400; i < karkaus.length; i++)
    {
      array[i]
      return "Vuosi on karkausvuosi";
    }
  } else
  {
    return "Vuosi ei ole karkausvuosi";
  }
}
*/


//viikko 3 osa 1

// tehtävä 1

  function tulostaParilliset()
{
  var karvo = parseInt(document.getElementById('pluku').value);
  var jono = "<p>";
  for(var i = 2; i <= karvo; i= i+2)
  {
    jono+=i;
    jono+=" ";
  }
  jono+="</p>";
    document.getElementById('parilliset').innerHTML = jono;
}



//tehtävä 2

function muutaSalasanaksi()
{
  var ksana = document.getElementById('ksana').value;
  var salasana = "<p>";
  for(var j = 0; j < ksana.length; j++)
  {
    salasana += ksana[j] + 'Ö';
  }
  salasana += "</p>";
  document.getElementById('salasana').innerHTML = salasana;
}


//tehtävä 3

function tarkistaKirjain()
{
  var annettuSana = document.getElementById('tsana').value;
  var vastaus = 'ei ole';
  for(var k = 0; k < annettuSana.length; k++)
  {
    if(annettuSana[k] == 'ö' || annettuSana[k] == 'Ö')
    {
      vastaus = 'on';
    }
  }
  document.getElementById('vastaus').innerHTML = '<p>' + vastaus + '</p>';
}


//tehtävä 4

function laskeKertoma()
{
  var kerLuku = document.getElementById('kertoma').value;
  var laskettu = 1;
  for(var z = 1; z <= kerLuku; z++)
  {
    laskettu*=z;
  }
  document.getElementById('kertomaVastaus').innerHTML = '<p>Luvun ' + kerLuku + ' kertoma on '+laskettu + '</p>';
}


//tehtävä 5

function hipHeijaa()
{
  var tuloste = '';
  for(var y = 1; y <= 100; y++)
  {
    if(y%3==0 && y%5==0)
    {
      tuloste+='Hip Heijaa ';
    }
    else if(y%5 == 0)
    {
      tuloste+='Heijaa ';
    }
    else if(y%3 == 0)
    {
      tuloste+='Hip ';
    }
    else {
      tuloste+=y+' ';
    }
    document.getElementById('lukujenTulostus').innerHTML = tuloste;
  }
}

//tehtävä 6

function ekatKymmenen()
{
  var kym = '<p>';
  for(var e = 1; e <=10; e++)
  {
    kym += e + ' ';
  }
  kym += '</p>';
  document.getElementById('lukujenTulostus10').innerHTML = kym;
}



//tehtävä 7

function yhteen()
{
  yhteensa = 0;
  for(var y = 1; y <=10; y++)
  {
    yhteensa += y;
  }
  document.getElementById('lukujenTulostusY').innerHTML = '<p>'+ yhteensa + '</p>';
}


//tehtävä 8

function potenssi()
{
  var koro = document.getElementById('kor').value;
  var pote = document.getElementById('pot').value;
  yht = koro;
  for(var p = 1; p < pote; p++)
  {
    yht *= koro;
  }
  document.getElementById('lukujenTulostusP').innerHTML = '<p>' + yht + '</p>';
}



//tehtävä 9

function etsiSuurinPienin()
{
  var taulu = [], temp;
  for(var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taulukko['+x+']').value;
    temp = parseInt(temp);
    taulu.push(temp);
    //alert(taulu);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('lukujenTulostusT').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}


//tehtävä 10

function muokkaaSalasana()
{
  var pw = '';
  var eka, toka;
  pw = document.getElementById('salis').value;
  alert(pw);
  var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'Ã¥', 'Ã¤', 'Ã¶', 'w'];
  var temp = [];
  var lop='';
  for(var s = 0; s < pw.length; s++)
  {
    eka = pw[s];
    //alert[pw];
    //alert[eka];
    temp.push(eka);
    //alert(eka);
    var lisa = Math.floor(Math.random()*taulu.length);
    toka = taulu[lisa];
    temp.push(toka);
    //alert(toka);
  }
  lop = temp.join('');
  document.getElementById('lukujenTulostusS').innerHTML = lop;
}


//tehtävä 11

function llisettomat()
{
  var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
  nro1 = parseInt(document.getElementById('pnro').value);
  nro2 = document.getElementById('inro').value;
  if(nro1%2 == 0)
  {
    palku = nro1;
  }
  else {
    palku = nro1+1;
  }
  for(var b = palku; b<=nro2; b+=2)
  {
    pluvut += b + ' ';
    psumma += b;
    //alert(pluvut + ' ' + psumma);
  }
  if(nro1%2 == 0)
  {
    ralku = nro1+1;
  }
  else {
    ralku = nro1;
  }
  for(var r = ralku; r<=nro2; r+=2)
  {
    rluvut += r + ' ';
    rsumma += r;
  }
  document.getElementById('lukujenTulostusPari').innerHTML = '<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
}

// Viikko 3 osa 2

//tehtävä 1

function laskePisteet()
{
  var pisteet = 0;
  var annettuSana = document.getElementById('scsana').value;
  for(var i = 0; i < annettuSana.length; i++)
  {
    switch (annettuSana[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'n':
      case 's':
      case 't':
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
        pisteet++;
        break;
      case 'o':
      case 'Ã¤':
      case 'k':
      case 'l':
      case 'O':
      case 'Ã„':
      case 'K':
      case 'L':
        pisteet+=2;
        break;
      case 'u':
      case 'm':
      case 'U':
      case 'M':
        pisteet+=3;
        break;
      case 'y':
      case 'h':
      case 'j':
      case 'p':
      case 'r':
      case 'v':
      case 'Y':
      case 'H':
      case 'J':
      case 'P':
      case 'R':
      case 'V':
        pisteet+=4;
        break;
      case 'Ã¶':
      case 'd':
      case 'Ã–':
      case 'D':
        pisteet+=7;
        break;
      case 'b':
      case 'f':
      case 'g':
      case 'B':
      case 'F':
      case 'G':
        pisteet+=8;
        break;
      case 'c':
      case 'C':
        pisteet+=10;
        break;
      default:
        pisteet+=12;
    }
    document.getElementById('tscrabble').innerHTML = "<p>Sanan " + annettuSana + " pisteet ovat: " + pisteet + "</p>";
  }
}


//tehtävä 2

function arvoLotto()
{
  var lnumerot = [];
  var temp;
  for(var lotto = 0; lotto < 7; lotto++)
  {
    temp = Math.floor(Math.random()*40)+1;
    lnumerot[lotto] = temp;
  }
  lnumerot.sort(/*function(a, b){return a-b}*/);

  document.getElementById('ltaulu').innerHTML = '<p>'+lnumerot+'</p>';
}


//tehtävä 3

function muunnaTaulukoksi()
{
  var jono = [];
  jono = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  var taulu = '<table border="1">';
  for(var j = 0; j < jono.length; j++)
  {
    taulu += '<tr>';
    for(var k = 0; k < jono[j].length; k++)
    {
      taulu += '<td>' + jono[j][k] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('ttaulu').innerHTML = taulu;
}


//tehtävä 4

function arvoKortit()
{
  var pakka = [''];
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  //var maat = ['pa','ri','ru', 'he']
  var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskuri = 0;
  for(m = 0; m < maat.length; m++)
  {
    for(n = 0; n < numerot.length; n++)
    {
      if(m == maat.length-1 && n == numerot.length-1)
      {
        pakka[laskuri] = maat[m] + numerot[n];
      }
      else {
        pakka[laskuri] = maat[m]+numerot[n];
        laskuri++;
      }

    }
  }
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
      temp = pakka[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
  document.getElementById('pakka').innerHTML = '<p>'+kortit+'</p>';
}
