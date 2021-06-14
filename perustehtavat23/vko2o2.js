

//Viikko 2 osa 2
// Tehtävä 1
  function tarkista()
  {

    const posNeg = parseInt(prompt("Anna luku: "));

    if (posNeg > 0) {
    document.write("Luku on positiivinen");
    }

    else if (posNeg == 0) {
    document.write("Luku on 0");
    }

    else {
    document.write("Luku on negatiivinen");
    }

  }

//tehtävä 2

function vkoPva()
{
  const paiva = parseInt(prompt("Anna luku(1-7): "));

  if (paiva == 1) { document.write("Maanantai");
  } else if (paiva == 2) { document.write("tiistai");
  } else if (paiva == 3) { document.write("keskiviikko");
  } else if (paiva == 4) { document.write("torstai");
  } else if (paiva == 5) { document.write("perjantai");
  } else if (paiva == 6) { document.write("lauantai");
  } else if (paiva == 7) { document.write("sunnuntai");
  } else { document.write("syötä luku 1-7!");
}

}

//tehtävä 3


function karVuo()
{

  const karkaus = parseInt(prompt("Anna luku: "));

  if (karkaus % 4 == 0) {
  document.write("Vuosi on karkausvuosi");
  }
  else if (karkaus % 100 != 0) {
    document.write("Vuosi ei ole karkausvuosi")
  }

  else if (karkaus % 400 == 0) {
  document.write("Vuosi on karkausvuosi");
  }

  else {
  document.write("Vuosi ei ole karkausvuosi");
}

}

//tehtävä 4

function sumKesk()
{
  var l1, l2, l3, l4, l5, suurin;
  l1 = parseInt(document.getElementById('luku1').value);
  l2 = parseInt(document.getElementById('luku2').value);
  l3 = parseInt(document.getElementById('luku3').value);
  l4 = parseInt(document.getElementById('luku4').value);
  l5 = parseInt(document.getElementById('luku5').value);
  var summa = l1 + l2 + l3 + l4 + l5;
  document.write("Annoit luvut: " + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ' ' + l5);
  document.write("<br>Summa: " + summa);
  document.write("<br>Keskiarvo: " + summa / 5);
}


//tehtävä 5

function lauseMuuttuja()
{
  const luku = parseInt(prompt("Anna luku: "));

  var lause =
  lause += luku + " x 1 = " + luku * 1 + "<br>";
  lause += luku + " x 2 = " + luku * 2 + "<br>";
  lause += luku + " x 3 = " + luku * 3 + "<br>";
  lause += luku + " x 4 = " + luku * 4 + "<br>";
  lause += luku + " x 5 = " + luku * 5 + "<br>";
  lause += luku + " x 6 = " + luku * 6 + "<br>";
  lause += luku + " x 7 = " + luku * 7 + "<br>";
  lause += luku + " x 8 = " + luku * 8 + "<br>";
  lause += luku + " x 9 = " + luku * 9 + "<br>";
  lause += luku + " x 10 = " + luku * 10;

  document.write(lause);

}
