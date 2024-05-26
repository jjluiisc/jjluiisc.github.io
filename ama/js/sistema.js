$('#mainContent').empty();
$(".site-header").show();


var max = 40;
var _listaproductos = [];
var _mensaje= "";
var _detalles = "";
var _currenUser = {};

function cargaMenu(){
	
	var salida = '';
	
	
	for(var x=0; x < menu.length; x++){
		var hoja = menu[x];
		
		salida += '<div class="row" style="background: url(img/'+hoja.img+'.jpg); background-repeat:no-repeat; background-size:100% 100%; background-attachment: fixed; width: fit-content;">'
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
								'					&nbsp;&nbsp;&nbsp;&nbsp;<font style="color: #D43854; font-family: '+"'"+'Algeria'+"'"+', sans-serif; font-size: '+calculaTamanio(nombre)+'rem;">'+nombre+'</font>&nbsp;&nbsp;&nbsp;&nbsp;'+
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

	var idUserLogin = localStorage.getItem('idUserLogin');
	if( idUserLogin == null || idUserLogin == "false"){
		salida += '<div class="col-sm-12 col-md-12 col-lg-12"  style="padding-left:2em;">'+
				  '		<button class="btn btn-lg btn-outline-primary btn-block" onclick="initSesion(); return false;">Iniciar Sesi&oacute;n</button>' +
			      '</div>';
	}else if (idUserLogin == 'true'){
		var _currenUser = JSON.parse(localStorage.getItem('currenUser'));
		
		var clintes = localStorage.getItem(_currenUser.user);
		var opciones = ""; 
		if(clintes != null){			
			var listaClientes = clintes.split(","); 
			for(var b = 0; b < listaClientes.length; b++){
				opciones += '<option value="'+listaClientes[b]+'">'+listaClientes[b]+'</option>';
			}
		}
		
		salida += '<div class="col-sm-12 col-md-12 col-lg-12"  style="padding-left:2em;">'+
			      '		<button class="btn btn-lg btn-outline-primary btn-block" onclick="guardarVenta(); return false;">Guardar</button>' +
			      '</div>'+
				  '<div class="col-sm-12 col-md-12 col-lg-12"  style="padding-left:2em;">'+
			      '		<button class="btn btn-lg btn-outline-primary btn-block" onclick="descargarVentas(); return false;">Descarga ventas</button>' +
			      '</div>'+				  
                  '<div class="col-sm-12 col-md-12 col-lg-12"  style="padding-left:2em;">'+
			      '		<button class="btn btn-lg btn-outline-primary btn-block" onclick="cerrarSesion(); return false;">Salir</button>' +
			      '</div>';				  
				  
		salida += '</br></br>';
				  
		salida += '<div class="col-sm-12 col-md-12 col-lg-12"  style="padding-left:2em;">'+
				  '		<label class="sr-only">Ventas '+_currenUser.nombre+'</label>' +
				  '     <select class="form-control" id="clientes" onchange="cargaVenta()"><option value="*">Selecciona cliente</option>'+opciones+
				  '     </select>'
				  '</div>';
	}
	
			  
	salida += '</br></br>';
	
	$('#mainContent').empty();	
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
	$("#nombre").val("");
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

function  initSesion(){
	
	var formulario = ""+
	'<div>'+
    '    <label class="sr-only">Usuario</label>'+
    '    <input type="text" id="usuario" class="form-control" placeholder="Usuario" required autofocus>'+
    '    <label class="sr-only">Contrase&ntilde;a</label>'+
    '    <input type="password" id="password" class="form-control" placeholder="Contrase&ntilde;a" required data-eye>'+
    '</div>';
	
	$("#modalDialogBusquedasLabel").empty().html("LOGIN");
	$("#modalDialogBusquedasBody").empty().append(formulario);
	$("#modalDialogBusquedasFooter").empty().append('<button class="btn btn-lg btn-outline-primary btn-block" onclick="iniciaSesion(); return false;">Validar</button>');
	$("#modalDialogBusquedas").modal('show');	
}

function iniciaSesion(){	
	var user = $("#usuario").val();
	var password = $("#password").val();
	
	var existeUsuario = false;
	for(var a=0; a < usuarios.length; a++){
		var usuario = usuarios[a];
		if(usuario.user == user && usuario.password == password){
			localStorage.setItem('idUserLogin','true');
			localStorage.setItem('currenUser',JSON.stringify(usuario));
			$("#modalDialogBusquedas").modal('hide');	
			existeUsuario = true;
			_currenUser = usuario;	
			break;
		}
	}
	
	if(!existeUsuario){
		alert("El usuario o password es incorrecto");
	}else{
		top.location = "/ama";
	}
}

function guardarVenta(){
	var cliente = $("#nombre").val();
	_currenUser = JSON.parse(localStorage.getItem('currenUser'));
	
	if(cliente.length <=3 || cliente.trim() == ""){
		alert("Debe capturar un nombre")
	}else{
		var fecha = new Date();	
		var sfecha = fecha.toLocaleDateString() + " " +fecha.toLocaleTimeString();
		
		var venta = {cliente:cliente, fecha:sfecha, detalles:[]};
		/////////////////////////////////////////////////////
		for(var a =0; a < _listaproductos.length; a ++){
			for(var x=0; x < menu.length; x++){
				var hoja = menu[x];
				productos = hoja.productos;
				for(var y=0; y < productos.length; y++){
					if(productos[y].id == _listaproductos[a] ){
						var cantidad = $("#c_"+productos[y].id).val() * 1;
						var detalle = {producto:productos[y].id, cantidad:cantidad}
						venta.detalles.push(detalle);
						break;
					}
				}
			}
		}
		/////////////////////////////////////////////////////
		
		var clintes = localStorage.getItem(_currenUser.user);
		// si no hay ventas registradas guarda la primera
		if(clintes == null){
			var intClientes = [];
			intClientes.push(cliente);
			localStorage.setItem(_currenUser.user,intClientes);
			localStorage.setItem(cliente,JSON.stringify(venta));
			$("#clientes").append('<option value="'+cliente+'">'+cliente+'</option>');
		}else{
			var listaClientes = clintes.split(",");
			var existeCliente = false;
			for(var z=0; z < listaClientes.length; z++){
				if(listaClientes[z] == cliente){
					existeCliente = true;
					break;
				}
			}
			//Si ya hay una venta del cliente actualiza
			if(existeCliente){
				localStorage.setItem(cliente,JSON.stringify(venta));	
			}else{ // En caso contrario agregalo a la lista
				localStorage.setItem(cliente,JSON.stringify(venta));
				listaClientes.push(cliente);			
				localStorage.setItem(_currenUser.user,listaClientes);
				
				$("#clientes").append('<option value="'+cliente+'">'+cliente+'</option>');
			}
		}
	}

	borrarMensaje();
}

function cargaVenta(){
	
	borrarMensaje();
	
	var cliente = $("#clientes").val();
	if(cliente=="*"){
		var uno = 1;
	}else{
		$("#nombre").val(cliente);
		var venta = JSON.parse(localStorage.getItem(cliente));	
		
		for(var a =0; a < venta.detalles.length; a ++){
			for(var x=0; x < menu.length; x++){
				var hoja = menu[x];
				productos = hoja.productos;
				for(var y=0; y < productos.length; y++){
					if(productos[y].id == venta.detalles[a].producto){
						_listaproductos.push(productos[y].id);
						$("#ck_"+productos[y].id).prop( "checked", true );
						$("#c_"+productos[y].id).val(venta.detalles[a].cantidad);
						break;
					}
				}
			}
		}
	}
}

function descargarVentas(){
	var data = "";
	_currenUser = JSON.parse(localStorage.getItem('currenUser'));
	var clintes = localStorage.getItem(_currenUser.user);
	var listaClientes = clintes.split(",");
	data += 'Vendedor,Cliente,Fecha,Codigo,Descripcion,Cantidad,Precio,Importe\n';
	for(var z=0; z < listaClientes.length; z++){
		/////////////////////////////////////////
		var venta = JSON.parse(localStorage.getItem(listaClientes[z]));	
	
		for(var a =0; a < venta.detalles.length; a ++){
			for(var x=0; x < menu.length; x++){
				var hoja = menu[x];
				productos = hoja.productos;
				for(var y=0; y < productos.length; y++){
					if(productos[y].id == venta.detalles[a].producto){
						var cantidad = venta.detalles[a].cantidad;
						var importe = cantidad * productos[y].precio;
						data += _currenUser.nombre+','+listaClientes[z]+','+venta.fecha+','+productos[y].id+','+productos[y].name+','+cantidad+','+productos[y].precio+','+importe+'\n';
						break;
					}
				}
			}
		}
		localStorage.removeItem(listaClientes[z]);
		/////////////////////////////////////////
	}
	localStorage.removeItem(_currenUser.user);
	$("#clientes").empty();
	
	
	 var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "Ventas_"+_currenUser.user+".csv");
	
}

function cerrarSesion(){
	localStorage.setItem('idUserLogin','false');
	localStorage.setItem('currenUser',JSON.stringify({user:"", password:"", nombre: ""}));
	cargaMenu();
	_currenUser = {};
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
