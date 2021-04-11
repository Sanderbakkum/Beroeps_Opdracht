const startGrafiek3 = () => {
    // Hier komt de jouw code die na het laden van de pagina wordt uitgevoerd
    laadJSON3("php/water2json.php");
};

const laadJSON3 = (url) => {
  
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
          labels.push(meterstand.item);
          serie1.push(parseInt(meterstand.stand));
      });

      data["labels"] = labels
      data["series"] = serie1

      
      console.log(data);
      maakGrafiek3(data);
      

    }
  };
  var options = {
    labelInterpolionFnc: function(value){
      return value[0]
    }
  };

  var responsiveOptions = [
    ['screen and (min-width: 640px)', {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'expode',
      labelInterpolionFnc: function(value){
        return value;
      }
    }],
    ['screen and min-width:1024px',{
      labelOffset: 80,
      chartPadding:20
    }]
  ]
  aanvraag.open("GET", url, true);

  aanvraag.send();
};

const maakGrafiek3 = (data) => {
    // Hier gaan we de chart maken

    new Chartist.Pie('#grafiek3', data,  );
}

// Wacht tot de pagina is geladen, dan pas de startGrafiek functie uitvoeren
window.addEventListener('DOMContentLoaded', startGrafiek3);
