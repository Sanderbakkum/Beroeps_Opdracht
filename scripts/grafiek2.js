const startGrafiek2 = () => {
    // Hier komt de jouw code die na het laden van de pagina wordt uitgevoerd
    laadJSON2("php/standen2json.php");
};

const laadJSON2 = (url) => {
  
  const aanvraag = new XMLHttpRequest();

  
  aanvraag.onreadystatechange = () => {
    if (aanvraag.readyState === 4 && aanvraag.status === 200) {
      let jsonText = aanvraag.responseText;
      let energie = JSON.parse(jsonText);
      //gegevens omzetten in de juiste structuur
      let data = [];
      let labels = [];
      let serie1 = [];

          energie.forEach(meterstand => {
          labels.push(meterstand.datum);
          serie1.push(parseInt(meterstand.stand));
      });
      console.log(data)
      data["labels"] = labels
      data["series"] = [serie1]

      
      console.log(data);
      maakGrafiek2(data);
      

    }
  };

  aanvraag.open("GET", url, true);

  aanvraag.send();
};

const maakGrafiek2 = (data) => {
    // Hier gaan we de chart maken

    new Chartist.Line('#grafiek2', data);
}

// Wacht tot de pagina is geladen, dan pas de startGrafiek functie uitvoeren
window.addEventListener('DOMContentLoaded', startGrafiek2);
