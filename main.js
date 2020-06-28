// Attraverso una chiamata ajax all’Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.


$(document).ready(function() {

  // handlebars sintassi, seleziono il template
  var htmlTemplate = $("#album-template").html();
  var template = Handlebars.compile(htmlTemplate);

	$.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data){
      // valore dell oggetto dell api è un array

      //valore contenuto nell array
      var arrayCd = data.response;

      for (var i = 0; i < arrayCd.length; i++) {
        // singolo elemento dell array (cd)
        var singoloCd = arrayCd[i];
        // console.log(singoloCd);
        // al template di hendlebars associo il valore del singolo cd
        var htmlGenerato = template(singoloCd);
        // appnedo al container il singolo cd generato con l html
        $(".cds-container").append(htmlGenerato);
      }
    },

    error: function(){
      alert("ERRORE");
    }


  });

  $(".selezione-genere").change(function () {
    var genereSelezionato = $(this).val();
    console.log(genereSelezionato);
    var str = "";
    $(".cd .genre").each(function() {
      str += $( this ).text();
      var genereCdSelezionato = $(this).text();
      console.log(genereCdSelezionato);
      if (genereCdSelezionato.includes(genereSelezionato) ) {
        $(this).parent().show();
        // console.log($(this).parent());
      }else {
        $(this).parent().hide();
      }
    });
  })
});
