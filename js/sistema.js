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

function Pdf(id,fileName){
	var doc = new jsPDF();
	doc.fromHTML(document.getElementById(id).innerHTML.replaceAll("<salto>","</br>"),5,5);
	doc.save(fileName+".pdf");
}
