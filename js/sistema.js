$('#mainContent').empty();
$('#mainContent').load("inicio.html");

function cargaLibreto(){
	$('#mainContent').empty();
	$('#mainContent').load("libreto.html");
}

function MostrarSoloPersonaje(){
	$('.otrosPersonajes').hide();
}

function MostrarTodo(){
	$('.otrosPersonajes').show();
}
