/*viikko 2
Tehtävä 1
Tee ohjelma, joka pyytää käyttäjältä kolmea numeroa
Ja laittaa ne järjestykseen.*/
/*function jarjesta(){
  var luku1, luku2, luku3;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  luku3 = parseInt(document.getElementById('kolmas').value);
  document.write("Annoit luvut: " + luku1 + '' + luku2 + '' + luku3);
  if(luku1 < luku2 && luku1 < luku3){
    if (luku2 < luku3){
      document.write("lukujen järjestys: " + luku1 + ' ' + luku2 + ' ' + luku3);
    } else {
      document.write("lukujen järjestys: " + luku1 + ' ' + luku3 + ' ' + luku2);
    }
  } else if (luku2 < luku1 && luku2 < luku3){
    if(luku1 < luku3) {
      document.write("lukujen järjestys: " + luku2 + ' ' + luku1 + ' ' + luku3);
    } else {
      document.write("lukujen järjestys: " + luku2 + ' ' + luku3 + ' ' + luku1);
    }
  } else if (luku3 < luku1 && luku3 < luku2){
    if (luku1 < luku2)
    {
      document.write("lukujen järjestys: " + luku3 + ' ' + luku1 + ' ' + luku2);
    } else {
      document.write("lukujen järjestys: " + luku3 + ' ' + luku2 + ' ' + luku1);
    }
  }
}*/

/*function jarjesta()
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
      document.write("Lukujen jÃ¤rjestys: " + luku1 + ' ' + luku2 + ' ' + luku3);
    }
    else {
      document.write("Lukujen jÃ¤rjestys: " + luku1 + ' ' + luku3 + ' ' + luku2);
    }
  }
  else if(luku2 < luku1 && luku2 < luku3)
  {
    if(luku1<luku3)
    {
      document.write("Lukujen jÃ¤rjestys: " + luku2 + ' ' + luku1 + ' ' + luku3);
    }
    else {
      document.write("Lukujen jÃ¤rjestys: " + luku2 + ' ' + luku3 + ' ' + luku1);

    }
  }
  else if(luku3 < luku1 && luku3 < luku2)
    {
      if(luku1 < luku2)
      {
        document.write("Lukujen jÃ¤rjestys: " + luku3 + ' ' + luku1 + ' ' + luku2);
      }
      else {
        document.write("Lukujen jÃ¤rjestys: " + luku3 + ' ' + luku2 + ' ' + luku1);

      }
    }
  }*/

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
      document.write("Lukujen jÃ¤rjestys: " + luku1 + ' ' + luku2 + ' ' + luku3);
    }
    else {
      document.write("Lukujen jÃ¤rjestys: " + luku1 + ' ' + luku3 + ' ' + luku2);
    }
  }
  else if(luku2 < luku1 && luku2 < luku3)
  {
    if(luku1<luku3)
    {
      document.write("Lukujen jÃ¤rjestys: " + luku2 + ' ' + luku1 + ' ' + luku3);
    }
    else {
      document.write("Lukujen jÃ¤rjestys: " + luku2 + ' ' + luku3 + ' ' + luku1);

    }
  }
  else if(luku3 < luku1 && luku3 < luku2)
    {
      if(luku1 < luku2)
      {
        document.write("Lukujen jÃ¤rjestys: " + luku3 + ' ' + luku1 + ' ' + luku2);
      }
      else {
        document.write("Lukujen jÃ¤rjestys: " + luku3 + ' ' + luku2 + ' ' + luku1);

      }
    }
  }
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
    document.write("<br>Suurin niistÃ¤ on: " + suurin);
  }
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
