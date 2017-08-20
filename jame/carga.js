//región y comuna

$(document).ready(function (){
	var regionesList = [];
	var comunasList = [];
	var comunaPorRegion = [];
	(function(){
		$.getJSON( "regionesList.json", function( data ) {
			 //console.log(data);
			regionesList = data;
			 //console.log(regionesList);
			for(i = 0; i < regionesList.length; i++){
				var option = '<option value="' + regionesList[i].codigo + '">' + regionesList[i].nombre + '</option>'
				$('#ingreso_region_select').append(option);	
			}
		});
	})();

	(function(){
		$.getJSON( "comunasList.json", function( data ) {
			 //console.log(data);
			comunasList = data;
			//console.log(comunasList);
		});
	})();
	

	$('#ingreso_region_select').change(function(){

		comunaPorRegion = [];
		$('#ingreso_comuna_select').val('');
		$( '#ingreso_comuna_select option' ).remove();
		$('#ingreso_comuna_select').append('<option value="" default>Elije una opción</option>');	
		var region = $(this).val();
		if($(this).val()){
			comunaPorRegion = comunasList.filter(function(comunasList){
			  return comunasList.data == region;
			});
		}

		for(i = 0; i < comunaPorRegion.length; i++){
			var option = '<option value="' + comunaPorRegion[i].value + '">' + comunaPorRegion[i].value + '</option>'
			$('#ingreso_comuna_select').append(option);	
		}
		
	});
});

