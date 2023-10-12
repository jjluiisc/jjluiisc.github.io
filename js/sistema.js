$('#mainContent').empty();
$('#mainContent').load("inicio.html");
$(".site-header").show();

function cargaLibreto(){
	$(".site-header").hide();
	$('#mainContent').empty();
	
	var indice_libreto =  $("#indice");
	for(x=0; x<dias_de_actos.length; x++){
		indice_libreto.append("<h2><li>"+dias_de_actos[x].nombre+"</li></h2>");
		
		var escenas = dias_de_actos[x].escenas;
		var olI = "<ol>"
		var olF = "</ol>"
		var lis = "";
		for(y=0; y<escenas.length; y++){
			var dialogos = escenas[y].dialogos;
			var personajes = escenas[y].personajes;
			lis += "<h4><li>"+headAcordion(dias_de_actos[x].id, escenas[y].id, escenas[y].nombre, personajes, dialogos)+"</li></h4>";
		}
		indice_libreto.append(olI+lis+olF);
	}
}

function headAcordion(padre, identificador, nombre, personajes, dialogos){
var salida = 
'<div class="accordion" id="accordion_'+padre+identificador+'">'+
'	<div class="card">'+
'		<div class="card-header" id="heading_'+identificador+'">'+
'			<h2 class="mb-0">'+
'				<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse_'+identificador+'" aria-expanded="true" aria-controls="collapse_'+identificador+'">'+
'			  		<h4>'+nombre+'</h4>'+
'				</button>'+
'		  	</h2>'+
'		</div>'+
'		<div id="collapse_'+identificador+'" class="collapse" aria-labelledby="heading_'+identificador+'" data-parent="#accordion_'+padre+identificador+'">'+
'			<div class="card-body">'+
'				<ul class="nav nav-tabs">';
					for(z=0;z<personajes.length;z++){
						salida +='<li '+(z==0?'class="active"':'')+'><a data-toggle="tab" href="#personaje_'+padre+identificador+personajes[z].id+'"><h5>&nbsp;'+personajes[z].nombre+'&nbsp;</h5></a></li>'
					}
salida +=
'				</ul>'+
'				</br>'+
'				<div class="tab-content">';
					for(a=0;a<personajes.length;a++){
						salida +='<div id="personaje_'+padre+identificador+personajes[a].id+'" class="tab-pane fade'+(a==0?' in active':'')+'">'+
								 '	</br>';		
								 for(b=0;b<dialogos.length;b++){
									 var idPersonaje = dialogos[b].personaje;
									 var personaje = _personajes[idPersonaje];
									 var clase = "otrosPersonajes";
									 if(personajes[a].id > 0){
										if(idPersonaje == personajes[a].id){
											clase = "verde-normal";
										}else{
											clase = "otrosPersonajes";
										} 
									 }
									 salida +='<h5 class="'+clase+'"><B>'+personaje.nombre+': </B>';
												var parrafos = dialogos[b].parrafos;
												for(c=0;c<parrafos.length;c++){
													
													var acciones = parrafos[c].acciones;
													for(d=0;d<acciones.length;d++){
														salida +='<font color="blue">';
														if(acciones[d].orden==="I"){
															salida +=acciones[d].accion+'&nbsp;';
														}
														salida +='</font>';
													}
													
													salida +=parrafos[c].contenido+(c==0?'':'</br></br>');
													
													for(e=0;e<acciones.length;e++){
														salida +='<font color="blue">';
														if(acciones[e].orden==="F"){
															salida +='&nbsp;'+acciones[e].accion;
														}
														salida +='</font>';
													}
													
												}
											  salida +='</h5>';
								 }
								 salida +='</div>';						
					}
salida +=
'				</div>'+
'			</div>'+
'		</div>'+
'	</div>'+
'</div>';	
return salida;
}

function MostrarSoloPersonaje(){
	$('.otrosPersonajes').hide();
}

function MostrarTodo(){
	$('.otrosPersonajes').show();
}

function Pdf(id,fileName){
	var doc = new jsPDF();
	doc.fromHTML(document.getElementById(id).innerHTML.replaceAll("<salto>","</br>"),5,5);
	doc.save(fileName+".pdf");
}
