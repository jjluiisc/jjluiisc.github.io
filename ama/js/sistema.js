$('#mainContent').empty();
$(".site-header").show();


var max = 40;
var _listaproductos = [];
var _mensaje= "";
var _detalles = "";

function cargaMenu(){
	
	var salida = '';
	
	
	for(var x=0; x < menu.length; x++){
		var hoja = menu[x];
		
		salida += '<div class="row" style="background: url(img/'+hoja.img+'.jpg); background-repeat:no-repeat; background-size:100% 100%; background-attachment: fixed; min-height="100%; backdrop-filter: brightness(50%);">'
			productos = hoja.productos;
			if(hoja.orientacion == 'L'){
				
				//salida += '<img src="img/logo.png" style="width:100px;padding-left:2em;"/>';
				salida += '<div class="col-sm-12 col-md-12 col-lg-12" align="center">'+'<img src="img/logo.png" style="width:120px;padding-left:1em;"/>'+'<font style="color: #D43854; font-family: '+"'"+'Algeria'+"'"+', sans-serif; font-size: 4rem;">MEN&Uacute;</font></div>';
				salida += '<div class="col-sm-12 col-md-12 col-lg-12" align="center"><font style="color: #D43854; font-family: '+"'"+'Algeria'+"'"+', sans-serif; font-size: 3rem;">'+hoja.nombre+'</font></div>' ;
			}else if(hoja.orientacion == 'C'){
				salida += '<div class="col-sm-12 col-md-12 col-lg-12" align="center"><font style="color: #D43854; font-family: '+"'"+'Algeria'+"'"+', sans-serif; font-size: 3rem;">'+hoja.nombre+'</font></div>' ;	
			}
			
			salida +=   '	<div class="col-sm-11 col-md-11 col-lg-8" style="padding-left:2em;">'+
						'		<table style="width:100%;" >';
			
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
				

				if(hoja.orientacion == 'L'){
					salida +=	'		<tr style="width:100%;">'+
								'			<td style="max-width:10%;">'+
								'           	</br><input type="checkbox" id="ck_'+producto.id+'" onchange="toggleCheckbox(this,'+producto.id+')" />'+
								'			</td>'+
								'			<td style="max-width:5%;">'+
								'           	<span>&nbsp;<font style="color: #D43854; font-size: 3rem;" onclick="bajaCantidad('+producto.id+')">-</font>&nbsp;</span>'+
								'			</td>'+
								'			<td style="max-width:5%;">'+
								'           	<input type="number" name="ticketNum" value="1" id="c_'+producto.id+'" readonly style ="width:40px;">'+
								'			</td>'+
								'			<td style="max-width:5%; ">'+
								'           	<span>&nbsp;<font style="color: #D43854; font-size: 2rem;" onclick="subeCantidad('+producto.id+')">+</font>&nbsp;</span>'+
								'			</td>'+
								'			<td style="max-width:20%;">'+
								'				<div style ="width:300px; white-space:nowrap; overflow:hidden;">'+
								'					<font style="color: #D43854; font-family: '+"'"+'Algeria'+"'"+', sans-serif; font-size: '+calculaTamanio(nombre)+'rem;" onclick="verImagen('+producto.id+')">'+nombre+'</font>'+
								'					<font style="color: #FE1D17; font-family: Pussycat, Algerian, Broadway; font-size: 1.7rem;">&nbsp;'+puntos+'</font>'+																
								'				</div>'+
								'			</td>'+
								'			<td style="max-width:10%;">'+
								'					<font style="color: #D43854; font-family: '+"'"+'Algeria'+"'"+', sans-serif; font-size: 1.8rem;">'+producto.precio+'</font>'+
								'			</td>'+
								'			<td style="max-width:45%;">'+calculaEspacios()+'</td>'+
								'		</tr>'+
								'		<tr style="width:100%;">'+
								'			<td style="max-width:10%;">'+
								'				&nbsp;'+
								'			</td>'+
								'			<td style="max-width:5%;">'+
								'				&nbsp;'+
								'			</td>'+
								'			<td style="max-width:5%;">'+
								'				&nbsp;'+
								'			</td>'+
								'			<td style="max-width:5%;">'+
								'				&nbsp;'+
								'			</td>'+
								'			<td style="max-width:20%;">'+
								'				<div style ="width:300px;">'+
								'					<font style="color: #DE697A; font-family: Areal; font-size: 1.4rem;">'+producto.descripcion+'</font>'+
								'				</div>'+
								'			</td>'+
								'			<td style="max-width:10%;">'+
								'			</td>'+
								'			<td style="max-width:45%;"></td>'+
								'		</tr>';
								
				}else if(hoja.orientacion == 'C'){
					salida +=	'		<tr style="width:100%;">'+
								'			<td>'+
						        '				<div class="col-sm-12 col-md-12 col-lg-12" align="center">'+
								'					<font style="color: #D43854; font-family: '+"'"+'Algeria'+"'"+', sans-serif; font-size: '+calculaTamanio(nombre)+'rem;">'+nombre+'</font>'+
								'				</div>' ;
								'			</td>'+
								'		</tr>'
				}
				
			}
			
		salida += '		</table>'+
				  '	</div>'+
				  '	<div class="col-sm-1 col-md-1 col-lg-4"></div>';

		salida += '</br></br></br></br>';
		
		salida += '<div class="col-sm-12 col-md-12 col-lg-12"  style="padding-left:2em; align="left">'+
				  '		<font style="color: #D43854; font-family: '+"'"+'Algeria'+"'"+', sans-serif; font-size: 2rem;">HAZ TU PEDIDO: (55) 64281401 </font>'+
				  '</div>';

		salida += '<div class="col-sm-12 col-md-12 col-lg-12"  style="padding-left:2em; align="left">'+
				  '		<div style="border-radius: 5px; background: #F1B15E; width: 360px;">'+
				  '			<font style="color: #FE1D17; font-family: '+"'"+'Cooper Black'+"'"+', sans-serif; font-size: 1.5rem;">Av. Dolores S/N. Barrio Tlatilco. Teoloyucan.</font>'+
				  '		</div>'+
				  '</div>';	
				  
		salida += '<div class="col-sm-12 col-md-12 col-lg-12"  style="padding-left:2em; align="left">'+
				  '		<font style="color: #DE697A; font-family: Areal; font-size: 1.4rem;">*Referencia: arriba de tacos y hamburgesas los 3 Montoya </font>'+
				  '</div>';				  				  
				  
		salida += '</br></br></br></br>';				  
		
	    salida += '</div>';
		
  
	} 

	salida += '</br></br></br></br>';
		
	salida += '<div class="col-sm-12 col-md-12 col-lg-12"  style="padding-left:2em; align="left">'+
			  '		<label class="sr-only">Nombre</label>' +
			  '     <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Nombre" required autofocus>'+
			  '</div>'+
			  '<div class="col-sm-12 col-md-12 col-lg-12"  style="padding-left:2em; align="left">'+
			  '		<button class="btn btn-lg btn-outline-primary btn-block" onclick="cargarMensaje(); return false;">Generar</button>' +
			  '</div>'+
			  '<div class="col-sm-12 col-md-12 col-lg-12"  style="padding-left:2em; align="left">'+
			  '		<button class="btn btn-lg btn-outline-primary btn-block" onclick="borrarMensaje(); return false;">Borrar</button>' +
			  '</div>';

	salida += '</br></br>';
	
	$('#mainContent').append(salida);
	
}

function completaCadena(nombre){
	var cadena = "";	
	var largo = nombre.length;
	var faltantes = max-largo;
	for(var x=0; x < faltantes; x++){
		cadena+=" ." 
	}
	return cadena; 
}

function calculaTamanio(nombre){
	var tamanio = 1.9;	
	var largo = nombre.length;
	var faltantes = largo-10;
	if(faltantes > 0)
		tamanio = tamanio - (faltantes * 0.02 )
	return tamanio; 
}

function isMobile() {
    try{ 
        document.createEvent("TouchEvent"); 
        return true; 
    }
    catch(e){ 
        return false;
    }
}

function calculaEspacios(){
	var espacios = "&nbsp;";
	var ancho = ($(document).width()) * 1;
	var cantidad =0;
	
	if(ancho > 400 &&  ancho < 700){
		cantidad = 80;
	}else if(ancho >700){
		cantidad = 100;
	}
	
	for(var x=0; x<cantidad; x++)
			espacios += "&nbsp;";
	
	return espacios;
}

function  toggleCheckbox(objeto, id){
	if($("#ck_"+id+":checked").length == 1){
		_listaproductos.push(id);
	}else{
		var indice = _listaproductos.indexOf(id); // obtenemos el indice
		if(indice >=0 )
			_listaproductos.splice(indice,1);
	}
}

function cargarMensaje(){
	var cliente = $("#nombre").val();
	
	if(cliente.length <=3 || cliente.trim() == ""){
		alert("Debe capturar un nombre")
	}else{
		var  totalPedido = 0; 
		_mensaje = ""; 
		_mensaje = "El cliente " + cliente +' solicita los productos, ';
		_detalles = '<table>'+
		            '	<tr>'+
					'		<th>Producto</th>'+
					'		<th>Cantidad</th>'+
					'		<th>Precio</th>'+
					'		<th>Subtotal</th>'+
					'	</tr>';
		var contador = 0;
		for(var a =0; a < _listaproductos.length; a ++){
			for(var x=0; x < menu.length; x++){
				var hoja = menu[x];
				var totalProducto=0;
				productos = hoja.productos;
				for(var y=0; y < productos.length; y++){
					if(productos[y].id == _listaproductos[a] ){
						var cantidad = $("#c_"+productos[y].id).val() * 1;
						totalProducto = cantidad * productos[y].precio;
						totalPedido += totalProducto;
						if(contador == 0)
							_mensaje += 'cantidad: '+ cantidad + ' producto: '+productos[y].name+' precio: '+productos[y].precio+' subtotal: '+totalProducto;
						else
							_mensaje += ", " + 'cantidad: '+ cantidad + ' producto: '+productos[y].name+' precio: '+productos[y].precio+' subtotal: '+totalProducto;
						
						_detalles += '<tr>'+
									'	<td>'+productos[y].name+'</td>'+
									'	<td style="text-align: right;">'+cantidad+'</td>'+
									'	<td style="text-align: right;">$ '+productos[y].precio+'</td>'+
									'	<td style="text-align: right;">$ '+totalProducto+'</td>'+
									'</tr>';
						
						break;
					}
				}
			}
			contador++;	
		}
		_detalles += '</table>';
		_detalles += '</br></br>';
		_detalles += '<h2>Total a pagar: $ ' +totalPedido+'</h2>';
		_mensaje += ", Total a pagar: $ "+totalPedido;
		
		$("#modalDialogBusquedasLabel").empty().html(cliente);
		$("#modalDialogBusquedasBody").empty().append(_detalles);
		$("#modalDialogBusquedasFooter").empty().append('<button class="btn btn-lg btn-outline-primary btn-block" onclick="enviarMensaje(); return false;">Enviar</button>');
		$("#modalDialogBusquedas").modal('show');
	}
}

function borrarMensaje(){
	$("input[type=checkbox]").prop( "checked", false );
	$("input[type=number]").val(1);
	_listaproductos = [];
	_mensaje= "";
	_detalles = "";
}

function enviarMensaje(){
	window.open('https://api.whatsapp.com/send?phone=5564281401&text='+'origen:menu '+' mensaje:' +_mensaje); 
}

function verImagen(id){
	var producto = {};
	for(var x=0; x < menu.length; x++){
		var hoja = menu[x];
		productos = hoja.productos;
		for(var y=0; y < productos.length; y++){
			if(productos[y].id == id ){
				producto = productos[y];
				break;
			}
		}
	}
	$("#modalDialogBusquedasLabel").empty().html(producto.nombre);
	$("#modalDialogBusquedasBody").empty().append('<img src="img/logo.png" style="width:120px;padding-left:1em;"/>');
	$("#modalDialogBusquedasFooter").empty();
	$("#modalDialogBusquedas").modal('show');	
}


function bajaCantidad(id){
	var cantidad = $("#c_"+id).val() * 1;
	cantidad = cantidad-1;
	if(cantidad <= 0)
		$("#c_"+id).val(1);
	else
		$("#c_"+id).val(cantidad);
}

function subeCantidad(id){
	var cantidad = $("#c_"+id).val() * 1;
	cantidad = cantidad+1;
	$("#c_"+id).val(cantidad);
}

cargaMenu();
/*
document.addEventListener("contextmenu", function(event){
	event.preventDefault();
}, false);

document.addEventListener("copy", function(event){
	// Change the copied text if you want
	event.clipboardData.setData("text/plain", "No se permite copiar en esta página web");
	// Prevent the default copy action
	event.preventDefault();
}, false);*/
