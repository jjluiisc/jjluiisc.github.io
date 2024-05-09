$('#mainContent').empty();
$(".site-header").show();


var menu = [hoja_1];
var max = 40;

function cargaMenu(){
	
	var salida = '';
	for(var x=0; x < menu.length; x++){
		var hoja = menu[x];
		
		salida += '<div class="row" style="background: url(img/'+hoja.img+'.jpg); background-repeat:no-repeat; background-size:100% 100%; background-attachment: fixed; min-height="100%">'
			productos = hoja.productos;
			salida += '<div class="col-sm-12 col-md-12 col-lg-12" align="center"><font style="color: #D43854; font-family: Pussycat, Algerian, Broadway; font-size: 4rem;">MEN&Uacute;</font></div>' +
				      '<div class="col-sm-12 col-md-12 col-lg-12" align="center"><font style="color: #D43854; font-family: Pussycat, Algerian, Broadway; font-size: 3rem;">'+hoja.nombre+'</font></div>' ;
			for(var y=0; y < productos.length; y++){
				var producto = productos[y];
				var largo = producto.nombre.length;
				var renglones = 1;
				if (largo > max){
					renglones = Math.round(largo / max); 
					renglones += 1;
				}
				var nombre = producto.nombre;				
				var puntos = completaCadena(nombre);				
				
				salida += '<div class="col-sm-1 col-md-1 col-lg-1">&nbsp;</div>'+
						  '<div class="col-sm-7 col-md-7 col-lg-7"  style="padding-left:4em">'+
								'<font style="color: #D43854; font-family: '+"'"+'Algeria'+"'"+', sans-serif; font-size: 1.9rem;">'+nombre+'</font>'+
								'<font style="color: #FE1D17; font-family: '+"'"+'Algeria'+"'"+', sans-serif; font-size: 1.8rem;">&nbsp;'+puntos+'</font>'+								
								'<font style="color: #D43854; font-family: '+"'"+'Algeria'+"'"+', sans-serif; font-size: 1.9rem;">&nbsp;$'+producto.precio+'</font>'+
						  '</div>' +
				          '<div class="col-sm-4 col-md-4 col-lg-4">&nbsp;</div>'+
						  '<div class="col-sm-1 col-md-1 col-lg-1">&nbsp;</div>'+
						  '<div class="col-sm-4 col-md-4 col-lg-4">'+
								'<font style="color: #DE697A; font-family: Areal; font-size: 1.4rem;">'+producto.descripcion+'</font>'+
						  '</div>' +
				          '<div class="col-sm-7 col-md-7 col-lg-7">&nbsp;</div>';
			}
	    salida += '</div>';
		
	}
	
	
	$('#mainContent').append(salida);
	
}

function completaCadena(nombre){
	var cadena = "";	
	var largo = nombre.length;
	var faltantes = max - largo;
	for(var x=0; x < faltantes; x++){
		cadena+="." 
	}
	return cadena; 
}


cargaMenu();

document.addEventListener("contextmenu", function(event){
	event.preventDefault();
}, false);

document.addEventListener("copy", function(event){
	// Change the copied text if you want
	event.clipboardData.setData("text/plain", "No se permite copiar en esta página web");
	// Prevent the default copy action
	event.preventDefault();
}, false);
