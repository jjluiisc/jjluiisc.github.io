$('#mainContent').empty();
$('#mainContent').load("inicio.html");
$(".site-header").show();

function cargaLibreto(){
	$(".site-header").hide();
	$('#mainContent').empty();
	$('#mainContent').load("libreto.html");
}

function MostrarSoloPersonaje(){
	$('.otrosPersonajes').hide();
}

function MostrarTodo(){
	$('.otrosPersonajes').show();
}
